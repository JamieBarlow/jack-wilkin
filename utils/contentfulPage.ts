const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
import * as contentful from "contentful";

const client = contentful.createClient({
  space,
  accessToken,
});

type PageFields = {
  header: string;
  subtitle?: string;
  subtitle2?: string;
};

export async function fetchPageEntries(pageTitle: string): Promise<PageFields> {
  const pageData = await client.getEntries({
    content_type: "page",
    "fields.pageTitle[match]": pageTitle,
    include: 10,
  });
  console.log(pageData);
  const fields = pageData.items[0].fields;
  const header = fields.pageHeader;
  const subtitle = fields.subtitle;
  const subtitle2 = fields.subtitle2;
  return {
    header: (header as string) ?? "",
    subtitle: (subtitle as string) ?? "",
    subtitle2: (subtitle2 as string) ?? "",
  };
}

export default { fetchPageEntries };
