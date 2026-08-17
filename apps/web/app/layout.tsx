import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Providers } from "@/components/Providers";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
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
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      </body>
    </html>
  );
}
