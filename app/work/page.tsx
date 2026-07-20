import { Suspense } from "react";
import type { Metadata } from "next";
import WorkClient from "@/components/pages/WorkClient";

export const metadata: Metadata = {
  title: "Work — Subham Sarangi",
  description: "Machine learning, computer vision and web projects — shipped with live demos, not just notebooks."
};

export default function WorkPage() {
  return (
    <Suspense>
      <WorkClient />
    </Suspense>
  );
}
