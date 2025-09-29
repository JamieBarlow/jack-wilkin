import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import SideBySideContent from "../components/SideBySideContent";
import { fetchPage } from "@/app/api/contentfulPage";
import { fetchPageSections } from "@/app/api/contentfulSections";
import RichTextRenderer from "../components/RichTextRenderer";
import { SanitizedSection } from "@/app/api/contentfulSections";
import ContentfulImage from "../components/ContentfulImage";
// Disable caching for preview
export const revalidate = 0;

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
          <div className="flex flex-row flex-wrap container-padded section-middle">
            <section className="text-base-content w-full">
              <SideBySideContent className="section-top gap-10 xl:justify-between">
                <div className="text-block lg:w-md xl:w-full xl:max-w-2xl">
                  <h3 className="heading">{sections[0].header}</h3>
                  <RichTextRenderer documents={sections[0].textContent} />
                  <button className="btn-cta font-raleway font-semibold text-lg my-4">
                    Contact Me
                  </button>
                </div>
                <div className="flex-1 flex box-gradient-bg-right p-5 max-w-md">
                  <ContentfulImage
                    asset={sections[0].media?.[0]}
                    quality={100}
                  />
                </div>
              </SideBySideContent>
            </section>
          </div>
        </BackgroundTexture>
        <section id="image banner" className="w-full h-[480px] overflow-hidden">
          <ContentfulImage
            asset={sections[1].media?.[0]}
            quality={100}
            className="h-full w-full object-cover object-center"
          />
        </section>
        <BackgroundTexture
          className="bg-base-100 w-full"
          variation="abstract"
          size="200%"
          position="center"
        >
          <div
            id="extra"
            className="flex flex-row flex-wrap container-padded section-middle"
          >
            <section id="extra__info" className="text-base-content w-full">
              <div className="flex flex-row flex-wrap justify-between section-top gap-10">
                <div className="lg:flex-1 2xl:w-full xl:max-w-[800px]">
                  <RichTextRenderer documents={sections[2].textContent} />
                </div>
                <div className="flex flex-1 flex-row flex-wrap py-5 lg:max-w-1/2 gap-4">
                  <div className="flex flex-1 flex-col gap-4">
                    <ContentfulImage
                      asset={sections[2].media?.[0]}
                      quality={100}
                    />
                    <ContentfulImage
                      asset={sections[2].media?.[1]}
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4">
                    <ContentfulImage
                      asset={sections[2].media?.[2]}
                      quality={100}
                    />
                    <ContentfulImage
                      asset={sections[2].media?.[3]}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="extra__qualifications"
              className="flex flex-row flex-wrap container-padded section-middle gap-10 text-base-content"
            >
              <div className="flex-1 order-2 md:order-1">
                <div className="box-gradient-bg-left p-5 pr-0 h-fit w-1/2">
                  <ContentfulImage
                    asset={sections[3].media?.[0]}
                    quality={100}
                    className="w-2xs sm:w-sm max-w-md"
                  />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h3 className="heading mt-0">{sections[3].header}</h3>
                <RichTextRenderer documents={sections[3].textContent} />
              </div>
            </section>
          </div>
        </BackgroundTexture>
      </main>
    </div>
  );
};

export default AboutMePage;
