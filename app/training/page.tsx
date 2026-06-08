import { fetchPage } from "@/app/api/contentfulPage";
import { fetchPageSections } from "@/app/api/contentfulSections";
import { SanitizedSection } from "@/app/api/contentfulSections";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import RichTextRenderer from "../components/RichTextRenderer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Details on training offered by Jack Wilkin, an Oxford-based counsellor providing inclusive, neurodivergent and LGBTQ+ affirming support.",
};

const trainingPage = async () => {
  const pageFields = await fetchPage("Training", 4);
  const sections = (await fetchPageSections(
    pageFields,
    1,
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
          <div className="flex flex-row flex-wrap container-padded section-top">
            {sections.map((section, index) => {
              return (
                <section key={index} className="text-base-content w-full">
                  <div className="text-block">
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

export default trainingPage;
