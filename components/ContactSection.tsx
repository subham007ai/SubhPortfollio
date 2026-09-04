"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { scrollReveal } from "@/lib/motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill mailto link as fallback or handle form state
    const mailto = `mailto:${profile.email}?subject=Inquiry from ${encodeURIComponent(
      `${formData.firstName} ${formData.lastName}`.trim()
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Direct Info & Socials */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <h2 className="section-heading text-2xl sm:text-3xl mb-6">
              Get in Touch
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              If you have any inquiries, project proposals, or just want to chat about AI, computer vision, or design, please feel free to reach out.
            </p>

            <div className="mt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                Direct Contact
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-base sm:text-lg font-serif text-white underline underline-offset-4 decoration-amber-400/60 hover:decoration-amber-300 transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            {/* Follow me / Social Buttons */}
            <div className="mt-10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                Follow me
              </span>
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-[#0e0e11] hover:bg-[#18181d] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#0e0e11] hover:bg-[#18181d] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66z" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href={profile.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-xl bg-[#0e0e11] hover:bg-[#18181d] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="w-10 h-10 rounded-xl bg-[#0e0e11] hover:bg-[#18181d] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7"
        >
          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#0c0c0f] border border-emerald-500/30 text-center">
              <span className="inline-block p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <h3 className="font-serif text-xl text-white font-medium">Thank you for reaching out</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Your email client was opened to dispatch this message. I&apos;ll get back to you shortly!
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0c0c0f] border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0c0c0f] border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-input" className="sr-only">Email</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0c0c0f] border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message-input" className="sr-only">Message</label>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0c0c0f] border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#ece7de] hover:bg-white text-black font-sans font-medium text-sm transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
