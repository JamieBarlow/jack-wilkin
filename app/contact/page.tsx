import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";

const contact = () => {
  return (
    <div className="">
      <HeroSection bgUnderWave="var(--color-base-100)">
        <h1 className="my-0">Contact Me</h1>
      </HeroSection>
      <main className="flex flex-col items-center sm:items-start">
        <BackgroundTexture
          className="bg-base-100 w-full"
          variation="abstract"
          size="200%"
          position="center"
        >
          <section
            id="aboutCounselling"
            className="flex flex-col items-start text-base-content section-middle"
          >
            <div className="container-padded flex flex-col justify-center mx-auto">
              <h3 className="heading">
                Who is counselling for and how does it help?
              </h3>
              <p>
                People come to counselling for all sorts of reasons. I have
                experience working with clients experiencing a range of issues
                including:
              </p>
            </div>
          </section>
        </BackgroundTexture>
      </main>
    </div>
  );
};

export default contact;
