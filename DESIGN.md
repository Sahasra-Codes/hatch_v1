# Hatch — Landing Page Design Specification

**Product:** Hatch  
**Tagline:** Find your people. Build what's next.  
**Scope:** Landing page and brand identity, the first milestone in the [product roadmap](README.md#development-roadmap)  
**Status:** Design direction / implementation brief

## 1. Product and design intent

Hatch is a technology-focused networking and matchmaking platform for finding hackathon teammates, startup cofounders, and project collaborators. It puts collaboration first by helping builders discover people with complementary skills, shared goals, and compatible ways of working.

The landing page must communicate, within a few seconds:
1. Identify who Hatch serves.
2. Show how compatibility can help builders find teammates and collaborators.
3. Explain how Hatch makes it easier to build with people beyond an existing professional network.
4. Give visitors a clear next step based on signup availability.

**Audience** includes computer science and engineering students, software developers, hackathon participants, tech entrepreneurs and aspiring founders, UI/UX and product designers, product managers, and technology researchers and innovators.

## 2. Design principles

- **Editorial, not templated.** Use deliberate composition, typographic contrast, and strong whitespace rather than repetitive feature cards.
- **Warm, not infantilizing.** Feminine in an understated, contemporary sense; no obligatory pink, cartoon chicks, or cutesy interface copy.
- **Credible to developers.** Show authentic collaboration and project signals, including a GitHub-inspired activity motif when appropriate.
- **People before AI.** Hatch's core value is human connection; avoid making a glowing AI orb the centerpiece.
- **Accessible and responsive.** Maintain contrast, keyboard navigation, readable typography, reduced-motion support, and small-screen usability.
- **Specific and honest.** Do not invent membership counts, testimonials, partner logos, success rates, or working product features.

## 3. Visual references and interpretation

### Reference 1 — Airy lavender mobile UI
- Borrow soft off-white and lavender backgrounds, generous negative space, and restrained accents.
- Avoid: making the brand look like an AI therapy or wellness application; do not copy its orb-centric interaction.

### Reference 2 — Purple-and-white technical dashboard
- Borrow: clean data visualization, precise spacing, subtle UI borders, GitHub-like contribution squares as a technical texture.
- Avoid: a giant analytics dashboard on the homepage or fake contribution data presented as real.

### Reference 3 — Editorial split-screen landing page
- Borrow: asymmetrical split hero, bold editorial typography, strong whitespace, sculptural/art-directed composition, **hand-drawn underline beneath a headline phrase**.
- Avoid: directly copying the original composition or imagery; develop Hatch's own identity.

## 4. Brand identity

**Working wordmark:** `hatch.` in lowercase. Use a custom-feeling wordmark through typography and spacing; do not rely on a generic egg icon as the entire identity.

**Primary headline** is `Big Ideas Hatch Together`.
**Supporting copy** is the brand tagline.

**Voice:** welcoming, direct, confident, curious, collaborative. Avoid excessive hype, corporate jargon, and AI buzzwords. Write concise, human copy.

**Signature motif** is a single hand-drawn underline beneath **Hatch Together** Use an original SVG path with rounded ends and the texture of a pen stroke. The motif can recur sparingly on section headings.

**Optional secondary motif:** an abstract opening-shell or interlocking-shapes sculpture, or a curated composition of member/project cards. Prefer the latter if it makes the product more immediately understandable. Avoid an AI glow orb as the default hero visual.

## 5. Brand palette

Define these colors once and reference them through semantic tokens for backgrounds, surfaces, text, borders, and accents.

| Color | Hex | Role |
|---|---|---|
| Ink | `#111111` | Primary text in light mode and the page background in dark mode |
| White | `#FFFFFF` | Main background in light mode and primary text in dark mode |
| Hatch purple | `#713BE2` | Primary actions and brand accents |
| Lavender | `#EDE5FF` | Tinted surfaces in light mode and accent text in dark mode |
| Cloud | `#F7F7F7` | Subtle alternate surfaces in light mode |

- Use White for primary button text on Hatch purple. Use Ink for text on Lavender and Cloud surfaces.
- In dark mode, derive raised surfaces and borders from Ink and White to preserve hierarchy.
- Check text, interactive states, and focus indicators against WCAG AA using their actual background colors.
- Reserve glass styling for the sample profile cards and use solid surfaces elsewhere.

## 6. Typography

- Use Geist for headlines, body copy, and interface labels. Inter and Space Grotesk are alternatives.
- Build hierarchy with size, weight, and spacing within the chosen sans-serif family.
- **Hero:** responsive `clamp()` sizing; approximately 72–100px on wide desktop and 44–58px on mobile, adjusted to fit naturally.
- **Body:** 16–18px with comfortable line height.
- **Navigation and metadata:** 13–15px; avoid tiny low-contrast text.
- Use a limited set of font weights and a consistent type scale.

## 7. Layout and spacing

- Desktop max content width: approximately 1280px with generous gutters (48–72px on large screens).
- Mobile gutters: 20–24px.
- Use a consistent 8px spacing system, with exceptions only for optical balance.
- Rounded corners: small-to-medium (`8–16px`) on controls/cards; avoid making everything pill-shaped.
- Prefer hairline borders over shadows. Use shadows only to establish meaningful layering.
- Preserve asymmetric editorial layouts; don't flatten every section into identical three-column cards.

## 8. Landing page information architecture

### A. Header
- Place Log in and Sign up at the top right on desktop and mobile.

### B. Hero
- Center the headline, curved SVG underline, tagline, and Sign up action.

### C. Problem and positioning
- Pair the `Great ideas need great people.` message with a translucent sample profile card stack on the left.
- Let visitors swipe left or right to cycle through sample builders. Offer keyboard-accessible controls for both directions.

### D. Builder discovery
- Use `Find your kind of ambitious` with a short animation showing design and engineering coming together.

### E. Contribution preview
- Use `Show contributions` and animate the sample GitHub chart by column as it enters the viewport.

### F. Closing call to action
- Use `Your next big idea starts with people.` with a single `Join now` button.

### G. Footer
- Wordmark, one-line mission, navigation anchors.
- Privacy and contact links **only if those pages/addresses exist**.
- Do not fabricate company/legal information.

## 9. Interaction and motion

- Smooth anchor navigation with reduced-motion fallback.
- Subtle hover/focus states; 150–250ms transitions for most UI changes.
- Optional understated entrance motion for the hero; no scroll-jacking or parallax-heavy effects.
- Theme toggle supports light, dark, and system preference where practical; persist selection without a flash of incorrect theme.
- SVG underline can draw once on load if motion preference allows; it must remain visible with animations disabled.
- Every interactive element must work; no decorative dead buttons.

## 10. Landing page behavior

The landing page includes the hero, mission, swipe and discovery previews, GitHub contribution preview, closing CTA, and footer. Log in and Sign up use the configured account URLs. Join now uses the signup destination. The local fallback displays service availability.

**Later milestones** cover authentication and account management, onboarding, builder profiles, database architecture, matching, discovery and filtering, mutual connections, messaging, group chats, the hackathon directory, privacy and moderation, beta testing, and public deployment. See the [development roadmap](README.md#development-roadmap).

## 11. Implementation constraints

The landing page uses React, Vite, TypeScript, Tailwind CSS, and Lucide React. The FastAPI backend runs separately and exposes a health endpoint. See [TECH_STACK.md](TECH_STACK.md) for setup and planned platform services.

- Use semantic components for the header, hero, positioning, how it works, feature and compatibility previews, closing CTA, footer, and theme toggle.
- Use CSS variables/design tokens for themes.
- Serve local fonts with font swapping enabled.
- Avoid adding animation frameworks unless the desired motion cannot be achieved simply with CSS.
- Keep sample data explicitly marked as sample/illustrative.
- Optimize image sizes, avoid layout shifts, and ensure fast mobile performance.
- Test at approximately 375px, 768px, 1024px, and 1440px widths.
- Check keyboard navigation, screen reader labels, reduced motion, and color contrast.

## 12. Anti-patterns — do not do these

- Giant generic purple gradient hero.
- Glowing AI orbs, excessive blur, and floating emoji illustrations.
- Repeated grids of identical rounded cards with icon + title + paragraph.
- Fake testimonials, fake users, fake GitHub statistics, fake investor/partner logos.
- Tiny pale text on pale lavender backgrounds.
- Unnecessary complex 3D rendering or animation libraries.
- An app dashboard masquerading as a marketing homepage.
- Copying any reference image or existing site's composition pixel-for-pixel.

## 13. Definition of done

The landing page is complete when:
- A new visitor immediately understands who Hatch serves and why it exists.
- The page has a distinct editorial visual identity and an original underline motif.
- Light and dark modes are both carefully designed and accessible.
- The site works cleanly on mobile, tablet, and desktop.
- Account links lead to configured destinations or show the deployment's account availability.
- No unsupported claims or fake social proof appear.
- The code is modular and easy for the founder to read, maintain, and expand.

## 14. Coding-agent handoff

> Maintain the landing page in React, Vite, and TypeScript. Use the brand palette, original curved underline, and reduced-motion support for the sample swipe, discovery, and contribution animations. Keep backend services in FastAPI.
