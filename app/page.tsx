import HeroSection from "./components/HeroSection";
import IssueCard from "./components/IssueCard";
import SideBySideContent from "./components/SideBySideContent";
import BackgroundTexture from "./components/BackgroundTexture";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <main className="flex flex-col items-center sm:items-start">
        <section id="intro" className="bg-secondary text-base-content w-full">
          <SideBySideContent className="section-top gap-10 lg:gap-16 xl:gap-60">
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
              <img src="/jack-cropped2.jpg" alt="Profile photo of Jack" />
            </div>
          </SideBySideContent>
        </section>
        <BackgroundTexture
          className="bg-base-100 w-full"
          variation="abstract"
          size="200%"
          position="center"
        >
          <section
            id="aboutCounselling"
            className="flex flex-col items-start text-base-content section-middle relative"
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
              <div
                id="issueIcons"
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10 spaced"
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
              <div className="spaced">
                <p>
                  Counselling provides a safe, empathetic, non-judgemental space
                  to explore whatever is going on for you, with a qualified
                  professional who can help to guide you through that process.
                </p>
                <p>
                  What this looks like in practice is unique to each individual,
                  but it may involve exploring the past or a specific incident,
                  examining your relationships with others, or working to
                  develop greater self-acceptance.
                </p>
              </div>
            </div>
            <SideBySideContent className="items-start section-middle spaced gap-10 lg:gap-16 xl:gap-10">
              <div className="max-w-lg xl:max-w-2xl box-gradient-bg-left p-5">
                <img src="/fidgetspinner.jpg" alt="Fidget spinner" />
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
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
