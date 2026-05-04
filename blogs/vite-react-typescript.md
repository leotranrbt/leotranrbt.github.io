---
title: Setting Up Vite with React and TypeScript
date: 2026-04-15
summary: A practical guide to scaffolding a type-safe React project with Vite, covering config, path aliases, and strict TypeScript settings.
tags: [vite, react, typescript]
---

## Why Vite?

Vite offers near-instant dev server startup and fast HMR by leveraging native ES modules in the browser. For React + TypeScript projects, it's become the default choice over Create React App.

## Project Setup

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

## Strict TypeScript Config

Enable strict mode in `tsconfig.json` to catch more errors at compile time:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## Key Takeaways

- Prefer `const` over `let` for non-reassigned variables
- Avoid the `any` type — use specific interfaces instead
- Use `import type` for type-only imports to keep bundles lean

```ts
// Good
import type { FC } from 'react';

// Avoid
import { FC } from 'react';
```

That's the baseline. Build from here.
