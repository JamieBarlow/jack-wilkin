import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import RichTextRenderer from "./RichTextRenderer";
import { SanitizedSection } from "@/utils/contentfulSections";

const FAQs = (section: SanitizedSection) => {
  return (
    <Accordion type="single" collapsible>
      {section.faqs?.map((faq, idx) => (
        <AccordionItem value={`item-${idx + 1}`} key={idx}>
          <AccordionTrigger>
            <p className="faq faq-header hover:cursor-pointer">
              {faq.question}
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="faq">
              <RichTextRenderer documents={faq.answer} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQs;
