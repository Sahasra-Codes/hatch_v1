"use client";

import { useEffect } from "react";

const revealTargets = [
  ".hero-copy > *",
  ".mission-layout > *",
  ".discovery h2",
  ".match-preview",
  ".builder-section > *",
  ".github-concept .activity-grid",
  ".final-cta > .container > *",
  ".site-footer > *",
].join(", ");

export function ScrollMotion() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-entered", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(revealTargets).forEach((target) => {
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
