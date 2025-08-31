import BackgroundTexture from "./components/BackgroundTexture";

export default function Home() {
  return (
    <>
      <BackgroundTexture className="bg-banner-green w-full flex flex-col">
        <section
          id="hero"
          className="flex flex-col gap-8 items-center text-peach-cream-50 text-center mt-20 mb-0"
        >
          <h1>JFW Oxford Counselling</h1>
          <h2>Inclusive and accessible talking therapy</h2>
          <h2>in Oxford and online</h2>
          <button className="btn-banner-outline font-raleway font-semibold text-lg">
            Contact Me
          </button>
        </section>
        <svg
          width="100%"
          height="140"
          viewBox="0 0 1000 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-edgewater-200"
            d="M0,140 L0,70 L10,71.13037068964049 L20,72.25712769746963 L30,73.37666889425468 L40,74.48541521898763 L50,75.57982212078458 L60,76.65639089045973 L70,77.71167984554793 L80,78.74231533301867 L90,79.74500251450664 L100,80.71653589957994 L110,81.65380959337152 L120,82.553827225814 L130,83.4137115307344 L140,84.2307135441857 L150,85.00222139260919 L160,85.72576864273238 L170,86.39904218650905 L180,87.01988963589383 L190,87.58632620381113 L200,88.0965410493204 L210,88.54890306669323 L220,88.94196609989488 L230,89.27447356580019 L240,89.54536247136387 L250,89.75376681190275 L260,89.899020339626 L270,89.98065869356249 L280,89.99842088407632 L290,89.9522501272245 L300,89.84229402628955 L310,89.6689040999066 L320,89.43263465829348 L330,89.1342410311766 L340,88.77467715307748 L350,88.35509251367962 L360,87.87682848302528 L370,87.3414140232898 L380,86.75056080084283 L390,86.10615771422243 L400,85.41026485551578 L410,84.66510692445121 L420,83.8730661162561 L430,83.03667450601758 L440,82.1586059538921 L450,81.2416675570426 L460,80.28879067563012 L470,79.30302156154917 L480,78.28751161986568 L490,77.24550733409092 L500,76.18033988749895 L510,75.09541451366765 L520,73.99419961028813 L530,72.88021565104505 L540,71.75702393101486 L550,70.62821518156255 L560,69.49739809113323 L570,68.36818776863686 L580,67.24419418630724 L590,66.1290106389828 L600,65.0262022567029 L610,63.93929460734452 L620,62.87176242573498 L630,61.82701850527302 L640,60.80840278757024 L650,59.819171684992575 L660,58.862487670236234 L670,57.94140916621951 L680,57.058880768611104 L690,56.217723832253036 L700,55.42062745157177 L710,54.670139863813006 L720,53.96866030258247 L730,53.318431327736576 L740,52.721531656143284 L750,52.17986951623264 L760,51.69517654758165 L770,51.26900226503615 L780,50.902709105067146 L790,50.597468070197884 L800,50.35425498542622 L810,50.173847378609864 L820,50.056821994787725 L830,50.00355295238382 L840,50.01421054718821 L850,50.0887607079384 L860,50.22696510524172 L870,50.428381913490554 L880,50.69236722333452 L890,51.018077100194105 L900,51.404470282234975 L910,51.850311509177665 L920,52.354175471300934 L930,52.914451366014106 L940,53.52934804743145 L950,54.19689975248619 L960,54.91497238527792 L970,55.68127033956337 L980,56.4933438375795 L990,57.34859676173752 L1000,58.24429495415053 L1000,140 Z"
          />
        </svg>
      </BackgroundTexture>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20 text-peach-cream-50">
        <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
          <section id="intro">
            <div>
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
          </section>
          <section id="aboutCounselling">
            <div>
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
            </div>
          </section>
        </main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
      </div>
    </>
  );
}
