import type { Metadata } from "next";
import { Raleway, Noto_Sans, Inter, Spectral } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/Toast";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  weight: ["400", "500"],
  variable: "--font-spectral",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JFW Oxford Counselling",
    template: "%s - JFW Oxford Counselling",
  },
  description:
    "Inclusive and accessible support | Neurodivergent & LGBTQ+ affirming",
  keywords: [
    "Oxford counselling",
    "counselling in Oxford",
    "online counselling",
    "therapy in Oxford",
    "inclusive counselling",
    "neurodivergent counselling",
    "LGBTQ+ counselling",
    "LGBTQ+ therapy",
    "mental health support",
    "talking therapy",
  ],
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="wilkinTheme">
      <body
        className={`${raleway.variable} ${notoSans.variable} ${inter.variable} ${spectral.variable} antialiased *:outline`}
      >
        <Navbar>{children}</Navbar>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
