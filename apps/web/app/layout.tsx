import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { ScrollToTop } from "@/components/ScrollToTop";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adeelazad.com";
const title = "Adeel Azad | Front-end Developer";
const description =
  "Adeel Azad is a front-end developer focused on crafting engaging and intuitive web experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Adeel Azad" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description:
      "Front-end developer focused on crafting engaging and intuitive web experiences.",
    type: "website",
    images: ["/images/thumbnail/thumbnail_image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/thumbnail/thumbnail_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hankenGrotesk.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      </body>
    </html>
  );
}
