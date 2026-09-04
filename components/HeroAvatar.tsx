import Image from "next/image";

export default function HeroAvatar({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  return (
    <figure className="group relative w-64 sm:w-80 md:w-96 aspect-square rounded-full overflow-hidden border hairline border-line bg-card shadow-2xl transition-all duration-700 hover:border-fg/40 select-none">
      {/* Fisheye distorted avatar */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        sizes="(min-width: 768px) 384px, 256px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {/* Convex lens glass reflection + physical peephole rim */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500 border border-white/15 shadow-[inset_0_0_40px_rgba(0,0,0,0.6),inset_0_0_15px_rgba(0,0,0,0.4)] bg-[radial-gradient(ellipse_at_32%_24%,rgba(255,255,255,0.12),transparent_60%)] group-hover:opacity-90"
        aria-hidden="true"
      />
      <figcaption className="sr-only">Portrait of {alt}</figcaption>
    </figure>
  );
}
