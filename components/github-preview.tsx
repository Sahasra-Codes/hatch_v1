import { Github } from "lucide-react";
import { ActivityGrid } from "./ui";

export function GitHubPreview() {
  return (
    <section
      className="container builder-section section-pad"
      aria-labelledby="builder-title"
    >
      <div>
        <p className="eyebrow">02 — Built by you</p>
        <h2 id="builder-title">Show contributions</h2>
        <p>
          Your weekend experiment. Your first pull request. The project you’re
          proud of. We’re planning space to share your work, with an optional
          GitHub connection.
        </p>
        <p className="builder-note">
          Your contribution goes beyond a contribution count.
        </p>
      </div>
      <figure className="github-concept">
        <div className="flex items-center gap-3">
          <Github size={22} aria-hidden="true" />
          <span className="mini-label">SMALL STEPS. SOMETHING REAL.</span>
        </div>
        <ActivityGrid />
        <div className="grid-legend">
          <span>Every builder has their own rhythm.</span>
          <div aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <figcaption>Sample GitHub contribution activity</figcaption>
      </figure>
    </section>
  );
}
