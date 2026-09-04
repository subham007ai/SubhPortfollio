import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "pullcord/pullcord.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/registry/magicui/smooth-cursor";
import PageTransition from "@/components/PageTransition";
import { themeInitScript } from "@/lib/theme";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://subhamsarangi.vercel.app"),
  title: {
    default: "Subham Sarangi — AI Engineering Student",
    template: "%s"
  },
  description: profile.shortBio,
  openGraph: {
    title: "Subham Sarangi",
    description: "AI Engineering Student · Building real-world projects",
    type: "website",
    siteName: "Subham Sarangi"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@subhamxai"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SmoothCursor />
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
