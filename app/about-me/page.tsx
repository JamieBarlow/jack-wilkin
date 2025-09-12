import React from "react";
import HeroSection from "../components/HeroSection";
import BackgroundTexture from "../components/BackgroundTexture";
import SideBySideContent from "../components/SideBySideContent";
import Link from "next/link";
import Image from "next/image";

const AboutMePage = () => {
  return (
    <div>
      <HeroSection bgUnderWave="#F6F4EE">
        <h1 className="my-0">About Me</h1>
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
                  <h3 className="heading">Hello, my name is Jack.</h3>
                  <p>
                    I’m a qualified counsellor providing one-to-one therapy for
                    adults over the age of 18. I work face to face in Oxford as
                    well as online via Zoom.
                  </p>
                  <p>
                    My approach to counselling is integrative, meaning that I
                    draw on a range of therapeutic approaches to best fit your
                    specific circumstances and goals.
                  </p>
                  <p>
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur tempus urna at
                    turpis condimentum lobortis. Ut commodo efficitur neque.
                  </p>
                  <p>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <button className="btn-cta font-raleway font-semibold text-lg my-4">
                    Contact Me
                  </button>
                </div>
                <div className="flex-1 flex box-gradient-bg-right p-5 max-w-md">
                  <Image
                    src="/jack-facing.jpeg"
                    width={1200}
                    height={1600}
                    alt="Profile photo of Jack"
                  />
                </div>
              </SideBySideContent>
            </section>
          </div>
        </BackgroundTexture>
        <section id="image banner" className="w-full h-[480px] overflow-hidden">
          <Image
            src="/oxford-banner.jpg"
            alt="Christchurch Meadows, Oxford"
            width={1920}
            height={1369}
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
                  <p>
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur tempus urna at
                    turpis condimentum lobortis. Ut commodo efficitur neque.
                  </p>
                  <p>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur tempus urna at
                    turpis condimentum lobortis.
                  </p>
                  <p>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="flex flex-1 flex-row flex-wrap py-5 lg:max-w-1/2 gap-4">
                  <div className="flex flex-1 flex-col gap-4">
                    <Image
                      src="/takingnotes.jpg"
                      alt="Counsellor taking notes"
                      width={3872}
                      height={2592}
                    />
                    <Image
                      src="/standing-tall.jpg"
                      alt="Standing on ledge"
                      width={3648}
                      height={5472}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4">
                    <Image
                      src="/dogwalk.jpg"
                      alt="Walking dog"
                      className=""
                      width={640}
                      height={480}
                    />
                    <Image
                      src="/profile-trees.jpg"
                      alt="Walking on path with trees"
                      width={4000}
                      height={6000}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="extra__qualifications"
              className="flex flex-row flex-wrap container-padded section-middle gap-10"
            >
              <div className="flex-1 order-2 md:order-1">
                <div className="box-gradient-bg-left p-5 pr-0 h-fit w-1/2">
                  <Image
                    src="/BACP.png"
                    alt="BACP logo"
                    width={940}
                    height={420}
                    className="w-2xs sm:w-sm max-w-md"
                  />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h3 className="heading mt-0">Qualifications</h3>
                <p>
                  I have completed a BACP approved Diploma in Therapeutic
                  Counselling and a Master’s in Psychology.
                </p>
                <p>
                  I am a registered member of the{" "}
                  <Link href="https://www.bacp.co.uk/" className="text-primary">
                    British Association for Counselling and Psychotherapy
                    (BACP).{" "}
                  </Link>
                  This means that I work in line with their ethical framework
                  and engage in regular training and professional development.
                </p>
              </div>
            </section>
          </div>
        </BackgroundTexture>
      </main>
    </div>
  );
};

export default AboutMePage;
