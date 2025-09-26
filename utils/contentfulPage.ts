const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
import * as contentful from "contentful";
import { Document } from "@contentful/rich-text-types";

export const client = contentful.createClient({
  space,
  accessToken,
});

export interface Page {
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

export interface PageFields {
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

export interface SectionFields {
  title: string;
  header?: string;
  orderNumber: number;
  page: Ref;
  media?: Media[];
  textBlocks?: TextBlock[];
  faqs?: FAQ[];
}

export interface FAQ {
  fields: {
    question: string;
    answer: Document;
  };
  metadata: {};
  sys: {};
}

export interface TextBlock {
  fields: TextBlockFields;
  metadata: {};
  sys: {};
}

interface TextBlockFields {
  textBlockTitle: string;
  textContent: Document | Document[] | undefined;
}

export interface Media {
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
  textContent?: Document | Document[] | undefined;
  media?: Media[];
}

interface NavLinksFields {}

export async function fetchPage(
  pageTitle: string,
  include = 10
): Promise<PageFields> {
  const pageData = await client.getEntries({
    content_type: "page",
    "fields.pageTitle[match]": pageTitle,
    include,
  } as any);
  console.log("pageData:", pageData);
  const fields = pageData.items[0].fields as unknown as PageFields; // reset Contentful typing for custom types
  return fields as unknown as PageFields;
}

export async function fetchNavLinks(include = 10): Promise<NavLinksFields> {
  const linksData = await client.getEntries({ content_type: "Navigation" });
  console.log("Links data:", linksData);
  return linksData;
}

// Use only if fetching all page entries and linked items together. Otherwise, see fetchPageSections
export async function fetchPageEntries(
  pageTitle: string
): Promise<PageDataResult> {
  // Fetch page data
  const fields = await fetchPage(pageTitle);
  // Main fields data
  const { pageHeader, subtitle, subtitle2 } = fields;
  const sections = (fields.sections ?? []) as Section[];
  console.log(sections[0].fields.header);

  const orderedSections: Section[] = sections.sort((a, b) => {
    return a.fields.orderNumber - b.fields.orderNumber;
  });

  console.log(orderedSections[5]);

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
