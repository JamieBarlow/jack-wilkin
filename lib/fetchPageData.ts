import { fetchContactDetails } from "@/app/api/contentfulPage";
import { fetchPageSections } from "@/app/api/contentfulSections";
import { SanitizedSection } from "@/app/api/contentfulSections";
import { PageFields } from "@/app/api/contentfulPage";

export async function fetchPageData(pageFields: PageFields) {
  // Parallel fetch with graceful degradation; each fetch can fail independently without breaking the page
  const [sectionsResult, contactDetailsResult] = await Promise.allSettled([
    fetchPageSections(pageFields, 1),
    fetchContactDetails(),
  ]);
  const sections =
    sectionsResult.status === "fulfilled"
      ? (sectionsResult.value as unknown as SanitizedSection[])
      : [];
  const contactDetails =
    contactDetailsResult.status === "fulfilled"
      ? contactDetailsResult.value
      : null;
  return { sections, contactDetails };
}
