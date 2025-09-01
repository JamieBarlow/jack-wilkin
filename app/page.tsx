import BackgroundTexture from "./components/BackgroundTexture";
import HeroSection from "./components/HeroSection";
import IssueCard from "./components/IssueCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="flex flex-col items-center sm:items-start text-peach-cream-50">
        <section id="intro" className="bg-edgewater-50 text-off-black w-full">
          <div className="container flex flex-row flex-wrap justify-center md:justify-start items-center gap-10 lg:gap-16 xl:gap-40 section-top mx-auto">
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
          </div>
        </section>
        <section
          id="aboutCounselling"
          className="flex flex-col items-start text-off-black bg-peach-cream-200 w-full section-middle"
        >
          <div className="container flex flex-col justify-center mx-auto">
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
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-12"
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
            <p>
              Counselling provides a safe, empathetic, non-judgemental space to
              explore whatever is going on for you, with a qualified
              professional who can help to guide you through that process.
            </p>
            <p>
              What this looks like in practice is unique to each individual, but
              it may involve exploring the past or a specific incident,
              examining your relationships with others, or working to develop
              greater self-acceptance.
            </p>
          </div>
        </section>
        <section
          id="neuroSupport"
          className="text-off-black bg-peach-cream-200 w-full section-middle"
        >
          <div className="container flex flex-col justify-center mx-auto">
            <h3 className="heading">Neurodivergent and LGBTQ+ support</h3>
            <p>
              I also have extensive experience supporting neurodivergent
              individuals and individuals identifying as LGBTQ+, including trans
              and non-binary individuals.
            </p>
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <p>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </>
  );
}
