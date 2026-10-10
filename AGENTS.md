# Development instructions

Read README.md and docs/ROADMAP.md before changes. Keep the initial app dependency-free unless a feature justifies migration. All user-facing copy is Serbian Latin. Content lives in src/content.mjs, separate from rendering. Never insert content using innerHTML. Preserve keyboard interaction, mobile layout and reduced-motion support. Run node --test tests/content.test.mjs and node --check src/app.mjs. Do not claim browser verification unless it was performed. Never commit secrets or generated dependencies.
