import HeroSection from "./components/HeroSection";
import IssueCard from "./components/IssueCard";
import SideBySideContent from "./components/SideBySideContent";
import BackgroundTexture from "./components/BackgroundTexture";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/accordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full bg-secondary">
        <HeroSection bgUnderWave="var(--color-secondary)">
          <h1>JFW Oxford Counselling</h1>
          <h2 className="my-0">Inclusive and accessible talking therapy</h2>
          <h2 className="my-0 mb-4">In Oxford and online</h2>
          <button className="btn-banner-outline font-raleway font-semibold text-lg">
            Contact Me
          </button>
        </HeroSection>
        <section id="intro" className="text-base-content w-full">
          <SideBySideContent className="section-top gap-10 lg:gap-16 xl:gap-60 justify-center md:justify-start items-center">
            <div className="flex-1/2 w-full xl:max-w-xl">
              <h3 className="heading">Hello, my name is Jack.</h3>
              <p>
                I’m a qualified counsellor providing one-to-one therapy for
                adults over the age of 18. I work face to face in Oxford as well
                as online via Zoom.
              </p>
              <p>
                My approach to counselling is integrative, meaning that I draw
                on a range of therapeutic approaches to best fit your specific
                circumstances and goals.
              </p>
            </div>
            <div className="box-gradient-bg-right p-5">
              <Image
                src="/jack-cropped2.jpg"
                width={366}
                height={366}
                alt="Profile photo of Jack"
              />
            </div>
          </SideBySideContent>
        </section>
      </div>
      <BackgroundTexture
        className="bg-base-100 w-full"
        variation="abstract"
        size="200%"
        position="center"
      >
        <section
          id="aboutCounselling"
          className="flex flex-col items-start text-base-content section-middle container-padded"
        >
          <div className="flex flex-col justify-center mx-auto">
            <h3 className="heading">
              Who is counselling for and how does it help?
            </h3>
            <p>
              People come to counselling for all sorts of reasons. I have
              experience working with clients experiencing a range of issues
              including:
            </p>
            <div
              id="issueIcons"
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center lg:justify-items-start gap-10 text-block"
            >
              <IssueCard issue="depression" />
              <IssueCard issue="anxiety" />
              <IssueCard issue="confidence" />
              <IssueCard issue="trauma" />
              <IssueCard issue="family" />
              <IssueCard issue="grief" />
              <IssueCard issue="identity" />
              <IssueCard issue="work" />
            </div>
            <div className="text-block">
              <p>
                Counselling provides a safe, empathetic, non-judgemental space
                to explore whatever is going on for you, with a qualified
                professional who can help to guide you through that process.
              </p>
              <p>
                What this looks like in practice is unique to each individual,
                but it may involve exploring the past or a specific incident,
                examining your relationships with others, or working to develop
                greater self-acceptance.
              </p>
            </div>
          </div>
          <SideBySideContent className="justify-center md:justify-start items-start section-middle text-block gap-10 lg:gap-16 xl:gap-10">
            <div className="max-w-lg xl:max-w-2xl box-gradient-bg-left p-5">
              <Image
                src="/fidgetspinner.jpg"
                width={1280}
                height={848}
                alt="Fidget spinner"
              />
            </div>
            <div className="flex-1">
              <h3 className="heading">Neurodivergent and LGBTQ+ support</h3>
              <p>
                I also have extensive experience supporting neurodivergent
                individuals and individuals identifying as LGBTQ+, including
                trans and non-binary individuals.
              </p>
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <p>
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="229"
                height="143"
                viewBox="0 0 229 143"
                fill="none"
                className="w-30 md:w-40 absolute bottom-[-30px] right-2 xl:bottom-0 xl:right-10 2xl:bottom-10 2xl:right-20"
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
        </section>
      </BackgroundTexture>
      <section
        id="call-to-action"
        className="bg-base-200 text-base-content w-full section-middle"
      >
        <div className="container-padded flex flex-col items-center">
          <h2 className="heading text-center">How to get started</h2>
          <p className="text-center">
            Complete an enquiry form on the website or email me at
            jackwilkin.counselling@gmail.com.
          </p>
          <p className="text-center">I aim to respond within 48 hours.</p>
          <button className="btn-cta font-raleway font-semibold text-lg my-4">
            Contact Me
          </button>
        </div>
      </section>
      <BackgroundTexture
        className="bg-base-100 w-full"
        variation="abstract2"
        size="200%"
        position="center"
      >
        <section
          id="call-to-action"
          className="text-base-content w-full section-middle flex flex-col items-start"
        >
          <div className="container-padded flex flex-col items-center">
            <h3 className="heading text-center">Fees and availability</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-start">
              <div className="text-block">
                <h3 className="heading">Fees</h3>
                <p>Initial 30-minute consultation - Free</p>
                <p>Ongoing sessions - £60 per 50-minute session</p>
                <p>
                  If cost is a barrier to accessing counselling, please contact
                  me to discuss a reduced fee.
                </p>
                <p>
                  If I am unable to meet your requirements, I will be happy to
                  signpost you to other low-cost counselling services.
                </p>
              </div>
              <div className="box-gradient-bg-right p-5 pl-0">
                <Image
                  src="/fees.png"
                  alt="Fees"
                  width={640}
                  height={432}
                  className=""
                />
              </div>
              <div className="box-gradient-bg-left p-5 order-2 lg:order-1">
                <Image
                  src="/availability.png"
                  alt="Availability"
                  width={640}
                  height={426}
                  className=""
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-block">
                  <h3 className="heading">Availability</h3>
                  <p>
                    I currently work on Tuesday 3-7pm in person, and on
                    Wednesday evenings online.
                  </p>
                  <p>Please contact me for current availability.</p>
                </div>
                <div className="text-block">
                  <h3 className="heading">Location</h3>
                  <p>TBA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundTexture>
      <section id="map-banner" className="bg-base-100 w-full">
        <Image
          src="/map-banner.png"
          width={1920}
          height={495}
          alt="Map image of Oxford"
        ></Image>
      </section>
      <section
        id="faq"
        className="bg-base-100 text-base-content section-middle overflow-hidden"
      >
        <div className="container-padded">
          <h3 className="heading">Frequently Asked Questions</h3>
          <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-10 py-4">
            <div className="min-w-full sm:min-w-0 max-w-[40%] self-start">
              <div className="box-gradient-bg-left p-5">
                <Image
                  src="/question.jpg"
                  width={1920}
                  height={1920}
                  alt="FAQs image"
                />
              </div>
            </div>
            <div className="flex-1 self-end xl:self-start">
              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1" className="">
                  <AccordionTrigger className="">
                    <p className="faq faq-header">
                      Will everything I say be kept confidential?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="faq">
                      Yes, everything you share with me will be treated as
                      strictly confidential. In rare situations I may be
                      ethically or legally required to share information with
                      third parties, these situations are explained in the
                      counselling agreement which we will go through in your
                      first session.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <p className="faq faq-header">
                      What does the first session involve?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="faq">
                      During your initial session, we will go through the
                      counselling agreement before exploring what has brought
                      you to therapy and your goals. It is an opportunity for me
                      to start getting to know you, learning more about your
                      background and significant moments in your life. It is
                      also an opportunity for you to ask me questions about my
                      way of working and what to expect from therapy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <p className="faq faq-header">
                      Do I have to come once a week?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="faq">
                      In my experience, it can be beneficial to meet once a week
                      for the first 6 weeks, to establish a solid foundation for
                      the work. However, I recognise this not possible for
                      everyone and am able to offer fortnightly sessions as
                      well.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <p className="faq faq-header">
                      How many sessions do I need?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="faq">
                      Some clients come for only 6 sessions, whilst others
                      continue with therapy for many years. I offer an
                      open-ended number of sessions, and we will review how
                      things are going every 6 weeks to assist you in deciding
                      whether or not to continue and when the time is right to
                      stop.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    <p className="faq faq-header">
                      What is the difference between counselling and
                      psychotherapy?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="faq">
                      Historically, counselling may have been seen as
                      shorter-term, more focused work than psychotherapy.
                      Nowadays, the terms are used interchangeably and I refer
                      to the work I do as both counselling and psychotherapy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
