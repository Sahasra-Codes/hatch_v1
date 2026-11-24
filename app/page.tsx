import { ScrollMotion } from "@/components/scroll-motion";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { FeaturesSection } from "@/components/features-section";
import { GitHubPreview } from "@/components/github-preview";
import { FinalCTA } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div id="top">
      <ScrollMotion />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <MissionSection />
        <FeaturesSection />
        <GitHubPreview />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
