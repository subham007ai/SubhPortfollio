import type { Metadata } from "next";
import JourneyClient from "@/components/pages/JourneyClient";

export const metadata: Metadata = {
  title: "Journey — Subham Sarangi",
  description: "Four schools, one university, two hackathons — the path from Bhubaneswar classrooms to AI engineering at SOA."
};

export default function JourneyPage() {
  return <JourneyClient />;
}
