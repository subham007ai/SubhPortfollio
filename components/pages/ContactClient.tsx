"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { setCopied(false); }
  };
  return (
    <div className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-24">
      <p className="dot-matrix mb-4">Index · 005</p>
      <h1 className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.9] mb-6">Say hello.<br /><span className="text-fg/60">No form. No funnel.</span></h1>
      <p className="text-muted max-w-xl mb-14">Email is the fastest way to reach me. I&apos;m also available through the channels below.</p>
      <button onClick={copy} className="block w-full text-left group" aria-label={`Copy ${profile.email} to clipboard`}>
        <span className="font-display tracking-tightest break-all leading-[0.95] block text-[10vw] md:text-[7vw] font-extrabold group-hover:underline underline-offset-[0.12em]">{profile.email}</span>
        <span className="dot-matrix mt-4 block" style={{ color: copied ? "var(--signal)" : "var(--muted)" }}>{copied ? "Copied to clipboard" : "Click address to copy"}</span>
      </button>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <SocialLink label="GitHub" href={profile.socials.github} handle="@subham007ai" />
        <SocialLink label="LinkedIn" href={profile.socials.linkedin} handle="in/subham-sarangi007" />
        <SocialLink label="X / Twitter" href={profile.socials.x} handle="@subhamxai" />
      </div>
      <section className="mt-14 border-t hairline border-t-line pt-6" aria-labelledby="resume-status">
        <p className="dot-matrix mb-2">Resume · In progress</p>
        <h2 id="resume-status" className="font-display text-2xl md:text-3xl tracking-tight">Resume is in preparation.</h2>
        <p className="mt-2 text-muted max-w-xl">A downloadable version will appear here once it reflects the current body of work.</p>
      </section>
    </div>
  );
}

function SocialLink({ label, href, handle }: { label: string; href: string; handle: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className="group border-t hairline border-t-line pt-3"><span className="dot-matrix flex justify-between"><span>{label}</span><span>↗</span></span><span className="mt-2 block font-display text-xl tracking-tight group-hover:underline underline-offset-4">{handle}</span></a>;
}
