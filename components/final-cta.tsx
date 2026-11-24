import { CtaLink } from "./ui";

export function FinalCTA() {
  return (
    <section id="join" className="final-cta" aria-labelledby="join-title">
      <div className="container">
        <h2 id="join-title">
          Your next big idea
          <br />
          starts with <em>people.</em>
        </h2>
        <CtaLink>Join now</CtaLink>
      </div>
    </section>
  );
}
