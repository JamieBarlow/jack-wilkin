const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
import * as contentful from "contentful";
import { Document } from "@contentful/rich-text-types";
import { FieldsType } from "contentful";

const client = contentful.createClient({
  space,
  accessToken,
});

type PageFields = {
  header: string;
  subtitle?: string;
  subtitle2?: string;
  sections: SectionsData[];
};

interface SectionsData {
  header?: string;
  orderNumber: number;
  textContent: Document[];
}

interface SectionFields {
  title: string;
  header?: string;
  page: {
    fields: {};
    metadata: string;
    sys: {};
  };
  orderNumber: number;
  textBlocks?: Ref[];
  media?: Ref[];
}

interface Ref {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
}

interface TextBlock {
  fields: {
    header?: string;
    textBlockTitle: string;
    textContent: Document;
  };
  metadata: {};
  sys: {};
}

export async function fetchPageEntries(pageTitle: string): Promise<PageFields> {
  // Fetch page data
  const pageData = await client.getEntries({
    content_type: "page",
    "fields.pageTitle[match]": pageTitle,
  });
  // Main fields data
  const fields = pageData.items[0].fields;
  const header = fields.pageHeader;
  const subtitle = fields.subtitle;
  const subtitle2 = fields.subtitle2;

  // Section data
  const sections = fields.sections as Ref[];
  const sectionIds = sections.map((section: Ref) => {
    return section.sys.id;
  });

  const sectionsContent = await Promise.all(
    sectionIds.map(async (id) => {
      const res = await client.getEntries({
        content_type: "section",
        "sys.id": id,
      });
      return res;
    })
  );

  const sectionsData = sectionsContent.map((section) => {
    const data = section.items[0].fields as SectionFields | FieldsType;
    const header = data.header;
    const orderNumber = data.orderNumber;
    const textContent = data.textBlocks.map((text: TextBlock) => {
      const richText = text.fields.textContent as Document;
      return richText;
    });
    return {
      header,
      orderNumber,
      textContent,
    };
  });

  const orderedSections = sectionsData.sort((a, b) => {
    return a.orderNumber - b.orderNumber;
  });
  console.log(orderedSections);

  return {
    header: (header as string) ?? "",
    subtitle: (subtitle as string) ?? "",
    subtitle2: (subtitle2 as string) ?? "",
    sections: orderedSections,
  };
}

export default { fetchPageEntries };
