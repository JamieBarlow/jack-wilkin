import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <header>
        <nav className="m-auto flex flex-row">
          <Link href="/about-me">About Me</Link>
          <Link href="/helpful-links">Helpful Links</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <section id="hero" className="flex flex-col gap-10">
          <h1>JFW Oxford Counselling</h1>
          <h2>Inclusive and accessible talking therapy</h2>
          <h2>in Oxford and online</h2>
          <button>Contact Me</button>
        </section>
        <section id="intro">
          <div>
            <h3 className="heading">Hello, my name is Jack.</h3>
            <p>
              I’m a qualified counsellor providing one-to-one therapy for adults
              over the age of 18. I work face to face in Oxford as well as
              online via Zoom.
            </p>
            <p>
              My approach to counselling is integrative, meaning that I draw on
              a range of therapeutic approaches to best fit your specific
              circumstances and goals.
            </p>
          </div>
        </section>
        <section id="aboutCounselling">
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
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
