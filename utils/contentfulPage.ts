const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
import * as contentful from "contentful";
import { Document } from "@contentful/rich-text-types";

const client = contentful.createClient({
  space,
  accessToken,
});

interface Page {
  includes: {};
  items: PageItems[];
  limit: number;
  skip: number;
  sys: {};
  total: number;
}

interface PageItems {
  fields: PageFields;
  metadata: {};
  sys: Sys;
}

interface Sys {
  contentType: {
    sys: {
      id: string;
      linkType: string;
      type: string;
    };
  };
  createdAt: string;
  environment: {};
  id: string;
  locale: string;
  publishedVersion: number;
  revision: number;
  space: {};
  type: string;
  updatedAt: string;
}

interface PageFields {
  pageHeader: string;
  pageTitle: string;
  sections?: Section[];
  subtitle?: string;
  subtitle2?: string;
}

export interface Section {
  fields: SectionFields;
  metadata: {};
  sys: Sys;
}

interface SectionFields {
  title: string;
  header?: string;
  orderNumber: number;
  page: Ref;
  media?: Media[];
  textBlocks?: TextBlock[];
}

interface TextBlock {
  fields: TextBlockFields;
  metadata: {};
  sys: {};
}

interface TextBlockFields {
  textBlockTitle: string;
  textContent: Document;
}

interface Media {
  fields: {
    file: {
      contentType: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
      fileName: string;
      url: string;
    };
    title: string;
  };
  metadata: {};
  sys: {};
}

interface Ref {
  fields: PageFields | SectionFields;
  metadata: {};
  sys: {};
}

export interface PageDataResult {
  pageHeader: string;
  subtitle?: string;
  subtitle2?: string;
  sections: SanitizedSection[];
}

interface SanitizedSection {
  header?: string;
  textContent?: Document;
  media?: Media[];
}

export async function fetchPageEntries(
  pageTitle: string
): Promise<PageDataResult> {
  // Fetch page data
  const pageData = await client.getEntries<any>({
    content_type: "page",
    "fields.pageTitle[match]": pageTitle,
    include: 10,
  });
  console.log(pageData);
  // Main fields data
  const fields = pageData.items[0].fields as unknown as PageFields; // reset Contentful typing for custom types
  const { pageHeader, subtitle, subtitle2 } = fields;
  const sections = (fields.sections ?? []) as Section[];
  console.log(sections[0].fields.header);

  const orderedSections: Section[] = sections.sort((a, b) => {
    return a.fields.orderNumber - b.fields.orderNumber;
  });

  const sanitizedSections = orderedSections.map((section) => {
    return {
      header: section.fields.header,
      // @ts-ignore
      textContent: section.fields.textBlocks[0].fields.textContent,
      media: section.fields.media,
    };
  });

  return {
    pageHeader,
    subtitle,
    subtitle2,
    sections: sanitizedSections,
  };
}

export default { fetchPageEntries };

// Optional for fetching by individual section
const fetchPageSections = async (page: Page) => {
  const sectionIds =
    page.items[0].fields.sections?.map((section) => section.sys.id) ?? [];
  const sectionsContent = await Promise.all(
    sectionIds.map(async (id) => {
      const res = await client.getEntries({
        content_type: "section",
        "sys.id": id,
      });
      return res;
    })
  );
  const result = sectionsContent as unknown as Section[];
  return result;
};
