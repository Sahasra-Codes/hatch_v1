import { CtaLink } from "./ui";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Big Ideas
          <br />
          <span className="underlined">
            Hatch Together
            <svg
              className="hero-stroke"
              viewBox="0 0 500 30"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                pathLength="1"
                d="M5 24 C84 12 160 5 241 6 C341 5 434 12 495 22"
              />
            </svg>
          </span>
        </h1>
        <p className="hero-description">Find your people. Build what’s next.</p>
        <div className="hero-links">
          <CtaLink />
        </div>
      </div>
    </section>
  );
}
