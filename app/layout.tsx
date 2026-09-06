import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "pullcord/pullcord.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/registry/magicui/smooth-cursor";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SmoothScroll>
          <SmoothCursor />
          <Nav />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
