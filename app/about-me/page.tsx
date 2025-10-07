import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import SideBySideContent from "../components/SideBySideContent";
import { fetchPage } from "@/app/api/contentfulPage";
import { fetchPageSections } from "@/app/api/contentfulSections";
import RichTextRenderer from "../components/RichTextRenderer";
import { SanitizedSection } from "@/app/api/contentfulSections";
import ContentfulImage from "../components/ContentfulImage";

export const revalidate = 60;

const AboutMePage = async () => {
  const pageFields = await fetchPage("About Me", 4);
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
          <section className="flex flex-row flex-wrap container-padded">
            <div className="text-base-content w-full">
              <SideBySideContent className="section-top gap-10 xl:justify-between">
                <div className="text-block lg:w-md xl:w-full xl:max-w-2xl">
                  <h3 className="heading">{sections[0].header}</h3>
                  <RichTextRenderer documents={sections[0].textContent} />
                  <button className="btn-cta font-raleway font-semibold text-lg my-4">
                    Contact Me
                  </button>
                </div>
                <div className="flex-1 flex box-gradient-bg-right p-5 pl-0 max-w-md">
                  <ContentfulImage
                    asset={sections[0].media?.[0]}
                    quality={100}
                  />
                </div>
              </SideBySideContent>
            </div>
          </section>
          <section
            id="qualifications"
            className="text-base-content container-padded mb-20"
          >
            <div className="flex flex-row flex-wrap justify-between items-center gap-10 lg:gap-16">
              <div className="w-full lg:max-w-[40%] order-2 lg:order-1">
                <ContentfulImage
                  asset={sections[1].media?.[0]}
                  quality={100}
                  className="box-gradient-bg-left p-5"
                />
              </div>
              <div className="text-block flex-1 order-1 lg:order-2">
                <h3 className="heading">{sections[1].header}</h3>
                <RichTextRenderer documents={sections[1].textContent} />
              </div>
            </div>
          </section>
        </BackgroundTexture>
      </main>
    </div>
  );
};

export default AboutMePage;
