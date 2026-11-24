import { SwipePreview } from "./builder-previews";

export function MissionSection() {
  return (
    <section id="why-hatch" className="mission section-pad">
      <div className="container mission-layout">
        <SwipePreview />
        <div>
          <h2>
            Great ideas need
            <br />
            <em>great people.</em>
          </h2>
          <p>
            You have the spark. Finding people who get it shouldn’t be the hard
            part. Hatch is being built for the conversations, connections, and
            shared ambition that turn “what if” into “let’s try.”
          </p>
          <p className="mission-signoff">
            A place to belong. A reason to begin.
          </p>
        </div>
      </div>
    </section>
  );
}
