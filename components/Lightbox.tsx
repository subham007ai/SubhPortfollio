"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "@/lib/motion";

export type LightboxPhoto = { src: string; caption: string };

export default function Lightbox({ photo, onClose }: { photo: LightboxPhoto | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const invokerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (photo) {
      invokerRef.current = document.activeElement as HTMLElement | null;
      // wait for the enter animation to mount the button
      const t = setTimeout(() => closeRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    invokerRef.current?.focus();
    invokerRef.current = null;
  }, [photo]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          className="fixed inset-0 z-[90] bg-bg/95 backdrop-blur-sm grid place-items-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border hairline border-line bg-line/40">
              <Image src={photo.src} alt={photo.caption} fill sizes="100vw" priority className="object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="dot-matrix">{photo.caption}</span>
              <button
                ref={closeRef}
                onClick={onClose}
                className="dot-matrix border hairline border-line rounded-full px-4 py-2 hover:bg-fg hover:text-bg transition-colors"
                data-cursor="hover"
              >
                Close · Esc
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
