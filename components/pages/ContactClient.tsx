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
    <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-24 pb-20 sm:pb-24">
      <div className="dot-matrix mb-3 sm:mb-4">Contact</div>
      <h1 className="font-display tracking-tightest text-4xl sm:text-5xl md:text-7xl leading-[0.9] mb-4 sm:mb-6">
        Get in touch.<br />
        <span className="text-fg/60">Let&apos;s build together.</span>
      </h1>
      <p className="text-muted max-w-xl mb-8 sm:mb-12 text-sm sm:text-base leading-relaxed">
        Email is the best way to reach me directly for freelance projects, internships, or questions. You can also connect with me across socials.
      </p>

      <button onClick={copy} className="block w-full text-left group active:scale-[0.99] transition-transform" aria-label={`Copy ${profile.email} to clipboard`}>
        <span className="font-display tracking-tightest break-all leading-[0.95] block text-[10vw] md:text-[7vw] font-extrabold group-hover:underline underline-offset-[0.12em]">
          {profile.email}
        </span>
        <span className="dot-matrix mt-3 sm:mt-4 block" style={{ color: copied ? "var(--signal)" : "var(--muted)" }}>
          {copied ? "Copied to clipboard" : "Click address to copy"}
        </span>
      </button>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <SocialLink label="GitHub" href={profile.socials.github} handle="@subham007ai" />
        <SocialLink label="LinkedIn" href={profile.socials.linkedin} handle="in/subham-sarangi007" />
        <SocialLink label="X / Twitter" href={profile.socials.x} handle="@subhamxai" />
      </div>

      <section className="mt-14 border-t hairline border-t-line pt-6" aria-labelledby="resume-status">
        <p className="dot-matrix mb-2">Resume · In progress</p>
        <h2 id="resume-status" className="font-display text-2xl md:text-3xl tracking-tight">Resume is in preparation.</h2>
        <p className="mt-2 text-muted max-w-xl">
          A downloadable PDF version will be available here soon. In the meantime, feel free to email me directly and I will share the latest copy.
        </p>
      </section>
    </div>
  );
}

function SocialLink({ label, href, handle }: { label: string; href: string; handle: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group border-t hairline border-t-line pt-3 pb-2 block active:opacity-75">
      <span className="dot-matrix flex justify-between">
        <span>{label}</span>
        <span>↗</span>
      </span>
      <span className="mt-1.5 block font-display text-xl tracking-tight group-hover:underline underline-offset-4">
        {handle}
      </span>
    </a>
  );
}
