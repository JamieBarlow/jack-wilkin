import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import IssueCard from "../components/IssueCard";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { fetchContactDetails, fetchPage } from "@/utils/contentfulPage";
import { fetchPageSections } from "@/utils/contentfulSections";
import RichTextRenderer from "../components/RichTextRenderer";
import ContentfulImage from "../components/ContentfulImage";

const contact = async () => {
  const pageFields = await fetchPage("Contact Me");
  const { pageHeader } = pageFields;
  const sections = await fetchPageSections(pageFields, 1);
  const contactDetails = await fetchContactDetails();
  console.log(contactDetails);
  const {
    phoneNumber,
    email,
    location1Address,
    location2Address,
    location1Image,
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
          <div className="flex flex-row flex-wrap container-padded section-middle gap-16 justify-center">
            <div className="flex flex-1 flex-col gap-10 text-base-content">
              <h3 className="heading">{sections[0].header}</h3>
              <div className="flex flex-row flex-wrap gap-6 md:justify-between lg:justify-start">
                <IssueCard
                  issue="phone"
                  background="bg-base-100"
                  title={phoneNumber}
                />
                <IssueCard
                  issue="email"
                  background="bg-base-100"
                  className="w-fit"
                  title={email}
                />
              </div>
              <div id="addresses" className="flex flex-col gap-10 [&>p]:m-1">
                <div className="card bg-base-100 shadow-lg">
                  <figure className="relative w-full h-[251px]">
                    <Image
                      src="/address1.jpg"
                      alt="Mini map of Oxford"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <div className="card-body ps-0 py-0 flex flex-col md:flex-row flex-wrap flex-1 gap-6">
                    <div className="flex-shrink-0">
                      <ContentfulImage
                        asset={location1Image}
                        className="max-w-sm"
                        quality={100}
                      />
                    </div>
                    <div className="flex-1 px-6 pb-6">
                      <RichTextRenderer documents={location1Address} />
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 shadow-lg">
                  <figure className="relative w-full h-[251px]">
                    <Image
                      src="/address2.jpg"
                      alt="Mini map of Oxford"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <div className="card-body ps-0 py-0 flex flex-col md:flex-row flex-wrap flex-1 gap-6">
                    <div className="flex-shrink-0">
                      <ContentfulImage
                        asset={location2Image}
                        className="max-w-sm"
                        quality={100}
                      />
                    </div>
                    <div className="flex-1 px-6 pb-6">
                      <RichTextRenderer documents={location2Address} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-base-content">
              <h3 className="heading">Contact Form</h3>
              <ContactForm />
            </div>
          </div>
        </BackgroundTexture>
      </main>
    </div>
  );
};

export default contact;
