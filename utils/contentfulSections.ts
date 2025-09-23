import { client } from "./contentfulPage";
import { fetchPage, PageFields } from "./contentfulPage";

// Optional for fetching by individual section
export const fetchPageSections = async (
  fields: PageFields,
  include: number = 10
) => {
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
  console.log("Sections content:", sectionsContent);
  //   return sectionsContent;

  const textBlocks = sectionsContent.map((section) => {
    const arr = section.items[0].fields.textBlocks;
    let documents = [];
    for (let item of arr) {
      documents.push(item.fields.textContent);
    }
    return documents;
  });
  console.log(textBlocks);

  const sanitizedSections = sectionsContent.map((section, index) => {
    const fields = section.items[0].fields;
    return {
      header: fields.header,
      media: fields.media,
      textContent: textBlocks[index],
    };
  });
  return sanitizedSections;
};
