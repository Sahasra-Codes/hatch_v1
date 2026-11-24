"use client";

import { useRef, useState, type PointerEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  PenTool,
  Sparkles,
} from "lucide-react";

const builders = [
  {
    name: "Alex",
    role: "Product designer",
    skill: "Prototyping",
    Icon: PenTool,
  },
  { name: "Sam", role: "Software developer", skill: "Frontend", Icon: Code2 },
  {
    name: "Jordan",
    role: "Creative technologist",
    skill: "Creative coding",
    Icon: Sparkles,
  },
];

export function SwipePreview() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">();
  const start = useRef<number | null>(null);
  const builder = builders[index % builders.length];

  function swipe(nextDirection: "left" | "right") {
    setDirection(nextDirection);
    setIndex((current) => current + 1);
  }

  function finishGesture(event: PointerEvent<HTMLDivElement>) {
    if (start.current === null) return;
    const distance = event.clientX - start.current;
    start.current = null;
    if (Math.abs(distance) > 42) swipe(distance < 0 ? "left" : "right");
  }

  return (
    <figure className="swipe-preview">
      <figcaption>Sample builder profiles</figcaption>
      <div
        className="swipe-stage"
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          start.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={finishGesture}
        onPointerCancel={() => {
          start.current = null;
        }}
      >
        <div className="swipe-stack" aria-hidden="true" />
        <div
          key={index}
          className="swipe-card"
          data-direction={direction}
          aria-live="polite"
        >
          <span className="builder-avatar">
            <builder.Icon size={28} aria-hidden="true" />
          </span>
          <strong>{builder.name}</strong>
          <span>{builder.role}</span>
          <small>{builder.skill}</small>
        </div>
      </div>
      <div className="swipe-controls">
        <button
          type="button"
          aria-label="Swipe left to pass"
          onClick={() => swipe("left")}
        >
          <ArrowLeft size={21} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Swipe right to show interest"
          onClick={() => swipe("right")}
        >
          <ArrowRight size={21} aria-hidden="true" />
        </button>
      </div>
    </figure>
  );
}

export function MatchPreview() {
  return (
    <div
      className="match-preview"
      role="img"
      aria-label="Illustration of design and engineering skills coming together"
    >
      <div className="match-tile match-tile-left" aria-hidden="true">
        <PenTool size={32} />
        Design
      </div>
      <span className="match-check" aria-hidden="true">
        <Check size={23} />
      </span>
      <div className="match-tile match-tile-right" aria-hidden="true">
        <Code2 size={32} />
        Engineering
      </div>
    </div>
  );
}
