import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutPreview from "@/components/AboutPreview";
import GitHubActivity from "@/components/GitHubActivity";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutPreview />
      <GitHubActivity />
    </>
  );
}
