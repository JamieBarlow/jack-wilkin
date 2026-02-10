import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import IssueCard from "../components/IssueCard";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { fetchContactDetails, fetchPage } from "@/app/api/contentfulPage";
import { fetchPageSections } from "@/app/api/contentfulSections";
import RichTextRenderer from "../components/RichTextRenderer";
import ContentfulImage from "../components/ContentfulImage";
// import Map from "../components/map/Map";
import LazyMap from "../components/map/LazyMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Contact details and contact form for Jack Wilkin, an Oxford-based counsellor providing inclusive, neurodivergent and LGBTQ+ affirming support.",
};

const contact = async () => {
  const pageFields = await fetchPage("Contact Me");
  const { pageHeader } = pageFields;
  const sections = await fetchPageSections(pageFields, 1);
  const contactDetails = await fetchContactDetails();
  // console.log(contactDetails);
  const {
    phoneNumber,
    email,
    location1,
    location1Address,
    location1Image,
    location2,
    location2Address,
    location2Image,
  } = contactDetails;

  return (
    <div className="">
      <HeroSection bgUnderWave="#F6F4EE">
        <h1 className="my-0">{pageHeader}</h1>
      </HeroSection>
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
                <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
                  <IssueCard
                    issue="phone"
                    background="bg-base-100"
                    title={phoneNumber}
                    size="small"
                    uniformSize
                  />
                  <IssueCard
                    issue="email"
                    background="bg-base-100"
                    title={email}
                    size="small"
                    uniformSize
                  />
                </div>
                <div
                  id="addresses"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center text-base-content"
                >
                  <div className="card w-3xs bg-base-100 shadow-lg">
                    <figure className="relative w-full h-[251px]">
                      <LazyMap
                        locations={[location1]}
                        addresses={[location1Address]}
                        className="w-full h-[400px] object-cover"
                      />
                    </figure>
                    <div className="ps-0 py-0 flex flex-col md:flex-row flex-wrap flex-1 gap-6">
                      <div className="relative w-full">
                        <ContentfulImage asset={location1Image} quality={100} />
                      </div>
                      <div className="flex-1 px-6 pb-6">
                        <RichTextRenderer documents={location1Address} />
                      </div>
                    </div>
                  </div>
                  <div className="card w-3xs bg-base-100 shadow-lg">
                    <figure className="relative w-full h-[251px]">
                      <LazyMap
                        locations={[location2]}
                        addresses={[location2Address]}
                        className="w-full h-[400px] object-cover"
                      />
                    </figure>
                    <div className="ps-0 py-0 flex flex-col md:flex-row flex-wrap flex-1 gap-6">
                      <div className="relative w-full">
                        <ContentfulImage asset={location2Image} quality={100} />
                      </div>
                      <div className="flex-1 px-6 pb-6">
                        <RichTextRenderer documents={location2Address} />
                      </div>
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default contact;
