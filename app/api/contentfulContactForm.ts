import { cacheTag } from "next/cache";
import { client } from "./contentfulPage";

export interface ContactFormFields {
  messageLabel: string;
  preferencesLabel: string;
  preSubmitLabel: string;
  submitButtonLabel: string;
}

export async function fetchContactForm(): Promise<ContactFormFields> {
  "use cache";
  cacheTag("contactForm");
  const data = await client.getEntries({
    content_type: "contactForm",
  } as any);
  const fields = data.items[0].fields as unknown as ContactFormFields;
  return fields;
}
