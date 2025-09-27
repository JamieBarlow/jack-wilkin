import { client } from "./contentfulPage";
import { fetchPage, PageFields, Media, TextBlock, FAQ } from "./contentfulPage";
import { ContentfulAsset } from "@/app/components/ContentfulImage";
import { Document } from "@contentful/rich-text-types";

export interface SanitizedFAQ {
  question: string;
  answer: Document | Document[] | undefined;
}

export interface SanitizedSection {
  header: string;
  textContent?: Document | Document[] | undefined;
  media?: ContentfulAsset[];
  faqs?: SanitizedFAQ[];
}

// Optional for fetching by individual section
export const fetchPageSections = async (
  fields: PageFields,
  include: number = 10
): Promise<SanitizedSection[]> => {
  const sectionIds = fields.sections?.map((section) => section.sys.id) ?? [];
  const sectionsContent = await Promise.all(
    sectionIds.map(async (id) => {
      const res = await client.getEntries({
        content_type: "section",
        "sys.id": id,
        include,
      } as any);
      return res;
    })
  );

  const textBlocks = sectionsContent.map((section) => {
    const item = section.items?.[0];
    if (!item || !item.fields || !item.fields.textBlocks) return [];
    const arr = item.fields.textBlocks as unknown as TextBlock[] | undefined;
    if (!arr) return [];
    return arr.map((item) => {
      if (!item.fields || item.fields.textContent === undefined) return [];
      return item.fields.textContent;
    });
  });

  const faqs = sectionsContent.map((section) => {
    const arr = section.items[0].fields.faqs as unknown as FAQ[] | undefined;
    if (!arr) return [];
    return arr.map((item) => item.fields);
  });

  const sanitizedSections = sectionsContent.map((section, index) => {
    const fields = section.items[0].fields;
    return {
      header: fields.header,
      media: fields.media,
      textContent: textBlocks[index],
      faqs: faqs[index],
    };
  });
  return sanitizedSections as unknown as SanitizedSection[];
};
