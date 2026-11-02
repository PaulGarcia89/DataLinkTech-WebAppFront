# Contact / commercial preview visual refresh — 2026-11-01

Scope: DataLink marketing website only. No SaaS changes. UI UX Pro Max was already installed at /Users/paulgarcia/.codex/skills/ui-ux-pro-max; no download required.

Applied guidance: clear primary conversion, visible keyboard focus, readable contrast, responsive layout and consistent vector icons. Preserved existing brand palette and typography instead of adopting the generic suggested font pairing.

Changes:
- Removed the decorative workstation from both rendered placements.
- Replaced shared CTA with an inset navy consultation panel, clearly differentiated booking/WhatsApp actions and a three-step consultation agenda.
- Consolidated contact styling in contact-cta.module.css; removed legacy CTA overrides.
- Refined the commercial process preview into a single ordered panel with numbered steps and consistent icon containers.
- Added English translations. Existing custom CTA titles/copy remain supported.

Validation:
- Production build with webpack (44 generated pages), TypeScript and ESLint passed.
- Browser: 375, 768, 1024, 1280 and 1440px checked without horizontal page overflow; Spanish/English, homepage and Platform CTA reviewed.
- Keyboard focus visible on WhatsApp; CTA targets at least 50px tall on desktop.
- CTA text contrast on #0c2844: white 14.97:1, secondary 9.32:1, cyan 9.50:1.
- Calendar and WhatsApp destinations preserved; no booking or message submitted.
- No added automatic animation; transitions disabled under prefers-reduced-motion.

Not published. Preview: http://127.0.0.1:3030/#consulta
