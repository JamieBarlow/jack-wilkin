import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import IssueCard from "../components/IssueCard";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { fetchContactDetails, fetchPage } from "@/utils/contentfulPage";
import { fetchPageSections } from "@/utils/contentfulSections";
import RichTextRenderer from "../components/RichTextRenderer";

const contact = async () => {
  const pageFields = await fetchPage("Contact Me");
  const { pageHeader } = pageFields;
  const sections = await fetchPageSections(pageFields, 1);
  const contactDetails = await fetchContactDetails();
  const { phoneNumber, email, location1Address, location2Address } =
    contactDetails;

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
          <div className="flex flex-row flex-wrap container-padded section-middle gap-10 justify-center">
            <div className="flex flex-col gap-10 text-base-content">
              <h3 className="heading">{sections[0].header}</h3>
              <div className="flex flex-row gap-10">
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
              <div className="flex flex-col gap-10 [&>p]:m-1">
                <Image
                  src="/office.png"
                  alt="Offices"
                  width={600}
                  height={320}
                />
                <div className="flex flex-wrap gap-10 justify-between">
                  <div className="flex-1 text-block order-1">
                    <RichTextRenderer documents={location1Address} />
                  </div>
                  <div className="flex-1 order-2">
                    <Image
                      src="/minimap.png"
                      alt="Mini map of Oxford"
                      width={610}
                      height={251}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 justify-between">
                  <Image
                    src="/minimap.png"
                    alt="Mini map of Oxford"
                    width={610}
                    height={251}
                    className="max-w-[60%] xs:max-w-[70%] object-cover"
                  />
                  <div className="text-block">
                    <RichTextRenderer documents={location2Address} />
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
