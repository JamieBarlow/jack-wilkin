import HeroSection from "./components/HeroSection";
import IssueCard from "./components/IssueCard";
import SideBySideContent from "./components/SideBySideContent";
import BackgroundTexture from "./components/BackgroundTexture";
import { fetchPage } from "@/app/api/contentfulPage";
import RichTextRenderer from "./components/RichTextRenderer";
import FAQs from "./components/FAQs";
import ContentfulImage from "./components/ContentfulImage";
import Link from "next/link";
import LazyMapLarge from "./components/map/LazyMapLarge";
import { Metadata } from "next";
import { Suspense } from "react";
import type { PageFields } from "@/app/api/contentfulPage";
import LoadingContent from "./components/LoadingContent";
import { fetchPageData } from "@/lib/fetchPageData";

export const metadata: Metadata = {
  description:
    "Inclusive and accessible support. Neurodivergent & LGBTQ+ affirming counselling, in Oxford and online.",
};

export default async function Home() {
  // Fetch header and primary page content
  const pageFields = await fetchPage("Home Page", 4);
  const { pageHeader, subtitle, subtitle2 } = pageFields;
  const subtitleParts = subtitle2?.split("|");

  return (
    <main className="w-full">
      <div className="w-full bg-secondary">
        <HeroSection bgUnderWave="var(--color-secondary)">
          <h1>
            <span className="logo">{pageHeader}&nbsp;</span>
            {subtitle}
          </h1>
          <h2 className="my-0 mb-4">
            <span className="inline-block mb-2 sm:mb-4">
              {subtitleParts?.[0].trim()}
            </span>
            {/* Line break on small screens */}
            <span className="2xl:hidden">
              <br />
            </span>
            {/* Show the "|" only on medium+ screens */}
            <span className="hidden 2xl:inline"> | </span>
            <span>{subtitleParts?.[1].trim()}</span>
          </h2>
          <Link href="contact">
            <button className="btn-banner-outline font-raleway font-semibold text-lg text-base-100 hover:text-banner-green">
              Contact Me
            </button>
          </Link>
        </HeroSection>
      </div>
      <Suspense fallback={<LoadingContent />}>
        <PageContent pageFields={pageFields} />
      </Suspense>
    </main>
  );
}

async function PageContent({ pageFields }: { pageFields: PageFields }) {
  const { sections, contactDetails } = await fetchPageData(pageFields);

  return (
    <>
      <section id="intro" className="w-full bg-secondary">
        <div className="container-padded text-base-content">
          <SideBySideContent className="section-top gap-10 xl:gap-20 justify-center md:justify-between items-center">
            <div className="flex-1/2 w-full xl:max-w-2xl">
              <h3 className="heading mt-0">{sections[0].header}</h3>
              <RichTextRenderer documents={sections[0].textContent} />
            </div>
            <div className="box-gradient-bg-right p-5">
              <ContentfulImage
                asset={sections[0].media?.[0]}
                loading="eager"
                sizes="(max-width: 30rem) calc(86.25vw - 31px), 33vw"
              />
            </div>
          </SideBySideContent>
        </div>
      </section>
      <section id="counselling">
        <BackgroundTexture
          className="bg-base-100 w-full"
          variation="abstract"
          size="200%"
          position="center"
        >
          <div className="flex flex-col items-start text-base-content section-middle container-padded">
            <div className="flex flex-col justify-center mx-auto">
              <h3 className="heading">{sections[1].header}</h3>
              <RichTextRenderer
                documents={sections[1].textContent}
                className="pb-6"
              />
              <div
                id="issueIcons"
                className="grid max-[350px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 text-block"
              >
                <IssueCard issue="depression" size="small" uniformSize />
                <IssueCard issue="anxiety" size="small" uniformSize />
                <IssueCard issue="confidence" size="small" uniformSize />
                <IssueCard issue="trauma" size="small" uniformSize />
                <IssueCard issue="family" size="small" uniformSize />
                <IssueCard issue="grief" size="small" uniformSize />
                <IssueCard issue="identity" size="small" uniformSize />
                <IssueCard issue="work" size="small" uniformSize />
              </div>
              <div className="text-block">
                <RichTextRenderer documents={sections[2].textContent} />
              </div>
            </div>
            <SideBySideContent className="justify-center md:justify-start items-start section-middle gap-10 lg:gap-16 xl:gap-10">
              <div className="lg:max-w-[40%] xl:max-w-[50%] box-gradient-bg-left p-5">
                <ContentfulImage asset={sections[3].media?.[0]} />
              </div>
              <div className="flex-1 relative">
                <h3 className="heading">{sections[3].header}</h3>
                <RichTextRenderer documents={sections[3].textContent} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="229"
                  height="143"
                  viewBox="0 0 229 143"
                  fill="none"
                  className="w-30 md:w-40 absolute bottom-[-120] right-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6518 7.00982C6.12348 82.0953 5.79626 94.776 2.32778 113.906C-3.03861 142.994 1.41158 151.736 10.1809 133.107C31.2536 88.0419 88.3198 34.3071 119.732 30.0083C124.052 29.4352 124.641 28.7187 122.416 27.1425C119.34 24.9214 112.141 26.2111 102.063 30.5098C69.9304 44.266 39.3685 67.407 16.7907 100.078C12.6678 106.096 12.6678 106.813 16.0708 83.4558C20.0628 55.9436 24.0548 37.6745 30.2065 9.23086C31.8426 1.63635 23.2041 -5.95818 20.6518 7.00982ZM143.488 25.6379C137.075 27.0708 140.74 30.3666 149.705 31.2263C153.043 31.5129 157.559 32.2286 159.784 32.7302C169.469 34.9512 166.524 29.0053 156.119 26.7126C148.396 24.9931 146.826 24.8498 143.488 25.6379ZM195.843 40.6113C171.432 50.7134 174.639 82.9543 200.555 87.7546C222.216 91.7668 238.381 61.3178 222.805 45.9138C217.046 40.2538 203.369 37.5305 195.843 40.6113ZM215.868 45.9138C221.889 50.0693 222.805 56.5168 218.682 66.0458C211.418 82.811 195.319 87.4687 190.018 74.3574C183.736 58.8102 203.369 37.2446 215.868 45.9138Z"
                    className="fill-base-300"
                  />
                </svg>
              </div>
            </SideBySideContent>
          </div>
          <section
            id="mentoring"
            className="text-base-content container-padded mb-10"
          >
            <div className="flex flex-row flex-wrap justify-between items-center gap-10 lg:gap-16 xl:gap-10">
              <div className="text-block flex-1">
                <h3 className="heading">{sections[4].header}</h3>
                <RichTextRenderer documents={sections[4].textContent} />
              </div>
              <div className="w-full lg:max-w-[40%] xl:max-w-[50%]">
                <ContentfulImage
                  asset={sections[4].media?.[0]}
                  className="box-gradient-bg-right p-5 pl-0"
                />
              </div>
            </div>
          </section>
        </BackgroundTexture>
      </section>
      <section
        id="call-to-action"
        className="bg-base-200 text-base-content w-full section-middle"
      >
        <div className="container-padded flex flex-col items-center">
          <h2 className="text-center">{sections[5].header}</h2>
          <div className="text-center">
            <RichTextRenderer documents={sections[5].textContent} />
          </div>
          <Link href="/contact">
            <button className="btn-cta font-raleway font-semibold text-lg my-4">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
      <section id="fees">
        <BackgroundTexture
          className="bg-base-100 w-full"
          variation="abstract2"
          size="200%"
          position="center"
        >
          <div className="text-base-content w-full section-middle flex flex-col items-start">
            <div className="container-padded flex flex-col items-center">
              <h3 className="heading text-center">{sections[6].header}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-start items-center">
                <div className="text-block">
                  <h3 className="heading">{sections[7].header}</h3>
                  <RichTextRenderer documents={sections[7].textContent} />
                </div>
                <div className=" ">
                  <ContentfulImage
                    asset={sections[7].media?.[0]}
                    className="box-gradient-bg-right p-5 pl-0"
                  />
                </div>
                <div className="order-2 lg:order-1">
                  <ContentfulImage
                    asset={sections[8].media?.[0]}
                    className="box-gradient-bg-left p-5"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-block">
                    <h3 className="heading">{sections[8].header}</h3>
                    <RichTextRenderer documents={sections[8].textContent} />
                  </div>
                  <div className="text-block">
                    <h3 className="heading">{sections[9].header}</h3>
                    <RichTextRenderer documents={sections[9].textContent} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundTexture>
      </section>
      {contactDetails && (
        <section id="map-banner" className="bg-base-100 w-full">
          <LazyMapLarge
            locations={[contactDetails.location1, contactDetails.location2]}
            addresses={[
              contactDetails.location1Address,
              contactDetails.location2Address,
            ]}
            className="w-full h-[400px]"
          />
        </section>
      )}
      <section
        id="faq"
        className="bg-base-100 text-base-content section-middle pb-40 overflow-hidden"
      >
        <div className="container-padded">
          <h3 className="heading">{sections[10].header}</h3>
          <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-10 py-4">
            <div className="min-w-full sm:min-w-0 max-w-[40%] self-start">
              <div className="box-gradient-bg-left p-5">
                <ContentfulImage asset={sections[10].media?.[0]} />
              </div>
            </div>
            <div className="flex-1 self-end xl:self-start">
              <FAQs {...sections[10]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
