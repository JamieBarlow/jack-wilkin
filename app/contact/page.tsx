import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import IssueCard from "../components/IssueCard";
import ContactForm from "../components/ContactForm";
import { fetchPage, PageFields } from "@/app/api/contentfulPage";
import RichTextRenderer from "../components/RichTextRenderer";
import ContentfulImage from "../components/ContentfulImage";
import LazyMap from "../components/map/LazyMap";
import { Metadata } from "next";
import { fetchPageData } from "@/lib/fetchPageData";
import ContentSkeleton from "../components/ContentSkeleton";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Contact details and contact form for Jack Wilkin, an Oxford-based counsellor providing inclusive, neurodivergent and LGBTQ+ affirming support.",
};

export default async function Contact() {
  // Fetch header / primary page content
  const pageFields = await fetchPage("Contact Me");
  const { pageHeader } = pageFields;

  return (
    <div className="">
      <HeroSection bgUnderWave="#F6F4EE">
        <h1 className="my-0">{pageHeader}</h1>
      </HeroSection>
      <Suspense fallback={<ContentSkeleton />}>
        <PageContent pageFields={pageFields} />
      </Suspense>
    </div>
  );
}

async function PageContent({ pageFields }: { pageFields: PageFields }) {
  const { sections, contactDetails } = await fetchPageData(pageFields);

  return (
    <main className="flex flex-col items-center sm:items-start">
      <BackgroundTexture
        className="bg-base-100 w-full"
        variation="abstract3"
        size="200%"
        position="center"
      >
        <div className="flex flex-row flex-wrap container-padded section-middle justify-center gap-10">
          <section id="contact-details flex-1">
            <h3 className="heading text-base-content text-center pb-6">
              {sections[0].header}
            </h3>
            <div className="grid gap-10 text-base-content">
              {contactDetails && (
                <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
                  <IssueCard
                    issue="phone"
                    background="bg-base-100"
                    title={contactDetails.phoneNumber}
                    size="small"
                    uniformSize
                  />
                  <IssueCard
                    issue="email"
                    background="bg-base-100"
                    title={contactDetails.email}
                    size="small"
                    uniformSize
                  />
                </div>
              )}
              {contactDetails && (
                <div
                  id="addresses"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center text-base-content"
                >
                  <div className="card w-3xs bg-base-100 shadow-lg">
                    <figure className="relative w-full h-[251px]">
                      <LazyMap
                        locations={[contactDetails.location1]}
                        addresses={[contactDetails.location1Address]}
                        className="w-full h-[400px] object-cover"
                      />
                    </figure>
                    <div className="ps-0 py-0 flex flex-col md:flex-row flex-wrap flex-1 gap-6">
                      <div className="relative w-full">
                        <ContentfulImage
                          asset={contactDetails.location1Image}
                          quality={100}
                        />
                      </div>
                      <div className="flex-1 px-6 pb-6">
                        <RichTextRenderer
                          documents={contactDetails.location1Address}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card w-3xs bg-base-100 shadow-lg">
                    {contactDetails && (
                      <figure className="relative w-full h-[251px]">
                        <LazyMap
                          locations={[contactDetails.location2]}
                          addresses={[contactDetails.location2Address]}
                          className="w-full h-[400px] object-cover"
                        />
                      </figure>
                    )}
                    {contactDetails && (
                      <div className="ps-0 py-0 flex flex-col md:flex-row flex-wrap flex-1 gap-6">
                        <div className="relative w-full">
                          <ContentfulImage
                            asset={contactDetails.location2Image}
                            quality={100}
                          />
                        </div>
                        <div className="flex-1 px-6 pb-6">
                          <RichTextRenderer
                            documents={contactDetails.location2Address}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
          <section
            id="contact-form"
            className="flex flex-1 flex-col text-base-content"
          >
            <h3 className="heading text-base-content text-center pb-6">
              Contact Form
            </h3>
            <ContactForm />
          </section>
        </div>
      </BackgroundTexture>
    </main>
  );
}
