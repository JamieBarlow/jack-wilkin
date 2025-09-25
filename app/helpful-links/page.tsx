import React from "react";
import { fetchPage } from "@/utils/contentfulPage";
import { fetchPageSections } from "@/utils/contentfulSections";
import { SanitizedSection } from "@/utils/contentfulSections";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import RichTextRenderer from "../components/RichTextRenderer";

const helpfulLinks = async () => {
  const pageFields = await fetchPage("Helpful Links", 4);
  const sections = (await fetchPageSections(
    pageFields,
    1
  )) as unknown as SanitizedSection[];
  const { pageHeader } = pageFields;

  return (
    <div>
      <HeroSection bgUnderWave="#F6F4EE">
        <h1 className="my-0">{pageHeader}</h1>
      </HeroSection>
      <main className="flex flex-col items-center sm:items-start">
        <BackgroundTexture
          id="intro"
          className="bg-base-100 w-full"
          variation="abstract"
          size="200%"
          position="center"
        >
          <div className="flex flex-row flex-wrap container-padded section-middle">
            {sections.map((section, index) => {
              return (
                <section key={index} className="text-base-content w-full">
                  <div className="text-block lg:w-md xl:w-full xl:max-w-2xl">
                    <h3 className="heading">{section.header}</h3>
                    <RichTextRenderer documents={section.textContent} />
                  </div>
                </section>
              );
            })}
          </div>
        </BackgroundTexture>
      </main>
    </div>
  );
};

export default helpfulLinks;
