import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <div className="container mx-auto px-6">
          <h1>Hello World</h1>
          <Link href="/about-me">About Me</Link>
          <Link href="/helpful-links">Helpful Links</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
