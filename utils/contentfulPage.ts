const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
import * as contentful from "contentful";
import { Document } from "@contentful/rich-text-types";
import { id } from "zod/locales";

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
  link?: string;
  title: string;
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

export interface NavLinks {
  links: NavLinkFields[];
  title: string;
}

export interface NavLinkFields {
  fields: {
    name: string;
    url: string;
    isButton?: boolean;
  };
  metadata: {};
  sys: {};
}

export interface FooterFields {
  email: string;
  footerTitle: string;
  internalLinks: NavLinkFields[];
  location: {
    lat: number;
    long: number;
  };
  phoneNumber: string;
  verification: {
    fields: {
      image: Media;
      link: string;
      title: string;
    };
    metadata: {};
    sys: {};
  }[];
}

interface ContactDetails {
  email: string;
  location1: {
    lon: number;
    lat: number;
  };
  location1Address: Document;
  location1Image: Media;
  location2: {
    lon: number;
    lat: number;
  };
  location2Address: Document;
  location2Image: Media;
  phoneNumber: string;
  title?: string;
}

export async function fetchPage(
  pageTitle: string,
  include = 10
): Promise<PageFields> {
  const pageData = await client.getEntries({
    content_type: "page",
    "fields.pageTitle[match]": pageTitle,
    include,
  } as any);
  const fields = pageData.items[0].fields as unknown as PageFields; // reset Contentful typing for custom types
  return fields as unknown as PageFields;
}

export async function fetchNavLinks(include = 10): Promise<NavLinks> {
  const linksData = await client.getEntries({
    content_type: "navigation",
    include,
  } as any);
  return linksData.items[0].fields as unknown as NavLinks;
}

export async function fetchFooter(include = 10): Promise<FooterFields> {
  const footerData = await client.getEntries({
    content_type: "footer",
    include,
  } as any);
  return footerData.items[0].fields as unknown as FooterFields;
}

export async function fetchContactDetails(
  include = 1
): Promise<ContactDetails> {
  const contactData = await client.getEntries({
    content_type: "contactDetails",
    include,
  } as any);
  return contactData.items[0].fields as unknown as ContactDetails;
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
