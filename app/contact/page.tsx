import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import IssueCard from "../components/IssueCard";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <div className="">
      <HeroSection bgUnderWave="#F6F4EE">
        <h1 className="my-0">Contact Me</h1>
      </HeroSection>
      <main className="flex flex-col items-center sm:items-start">
        <BackgroundTexture
          className="bg-base-100 w-full"
          variation="abstract"
          size="200%"
          position="center"
        >
          <div className="flex flex-row flex-wrap container-padded section-middle">
            <div className="flex flex-col mx-auto text-base-content">
              <h3 className="heading">Get in touch</h3>
              <div className="flex flex-row gap-2">
                <IssueCard issue="phone" />
                <IssueCard issue="email" className="w-fit" />
              </div>
              <div className="flex flex-col gap-4 [&>p]:m-1 spaced">
                <img src="office.png" alt="Offices" />
                <div>
                  <p className="font-semibold">Counselling Offices</p>
                  <p>Counselling House</p>
                  <p>65 Bodleian Road</p>
                  <p>Oxford OX2 1GR</p>
                </div>
                <img src="minimap.png" alt="Mini map of Oxford" />
              </div>
            </div>
            <div className="flex flex-col mx-auto text-base-content">
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
