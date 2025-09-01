import BackgroundTexture from "./components/BackgroundTexture";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="row-start-2 flex flex-col justify-around items-center gap-20 sm:items-start text-peach-cream-50">
        <section id="intro" className="bg-edgewater-50 text-off-black w-full">
          <div className="container flex flex-row flex-wrap justify-center items-center lg:max-xl:justify-start gap-10 lg:gap-16 xl:gap-40 pb-20 px-10 mx-auto">
            <div className="flex-1/2 w-full xl:max-w-md">
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
              <img
                className=""
                src="/jack-cropped2.jpg"
                alt="Profile photo of Jack"
              />
            </div>
          </div>
        </section>
        <section id="aboutCounselling" className="">
          <div>
            <h3 className="heading">
              Who is counselling for and how does it help?
            </h3>
            <p>
              People come to counselling for all sorts of reasons. I have
              experience working with clients experiencing a range of issues
              including:
            </p>
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
        <section id="aboutCounselling" className="">
          <div>
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
