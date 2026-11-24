import { MatchPreview } from "./builder-previews";

export function FeaturesSection() {
  return (
    <section
      id="community"
      className="community section-pad"
      aria-labelledby="community-title"
    >
      <div className="container discovery">
        <h2 id="community-title">Find your kind of ambitious</h2>
        <MatchPreview />
      </div>
    </section>
  );
}
