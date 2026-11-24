import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { accountLinks } from "@/lib/site-content";

export function Wordmark() {
  return (
    <a href="#top" aria-label="Hatch home" className="wordmark">
      hatch<span>.</span>
    </a>
  );
}

export function CtaLink({
  children = "Sign up",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={accountLinks.signup} className={`button ${className}`}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export function ActivityGrid() {
  return (
    <div className="activity-grid" aria-hidden="true">
      {Array.from({ length: 126 }, (_, i) => (
        <span
          key={i}
          data-level={(i * 13 + Math.floor(i / 7) * 3) % 5}
          style={{ "--column": Math.floor(i / 7) } as CSSProperties}
        />
      ))}
    </div>
  );
}
