import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedWork from "@/components/FeaturedWork";
import GitHubActivity from "@/components/GitHubActivity";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-fg selection:bg-accent selection:text-bg">
      <Hero />
      <TechStack />
      <FeaturedWork />
      <GitHubActivity />
    </main>
  );
}
