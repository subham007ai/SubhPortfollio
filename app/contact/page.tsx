import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact — Subham Sarangi",
  description: "Say hello. No form, no funnel — email, GitHub, LinkedIn and X."
};

export default function ContactPage() {
  return <ContactClient />;
}
