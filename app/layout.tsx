import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/registry/magicui/smooth-cursor";
import PageTransition from "@/components/PageTransition";
import { themeInitScript } from "@/lib/theme";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["600","700","800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400","500","700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://subhamsarangi.vercel.app"),
  title: {
    default: "Subham Sarangi — AI Engineering Student",
    template: "%s"
  },
  description: "Second-year B.Tech CS-AIML at SOA. Python, ML, automation. Building real-world projects.",
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
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
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
