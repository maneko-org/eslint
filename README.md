# @maneko/eslint

A shared ESLint config for our projects — simple, consistent, and modern.

## Description

Based on the configuration from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) and heavily inspired by [`@siberiacancode/eslint`](https://github.com/siberiacancode/core/tree/main/tools/eslint) from the [`@siberiacancode/core`](https://github.com/siberiacancode/core) repository.

## Quick start

Install the package and some common peer deps. Pick your package manager:

```bash
# pnpm (recommended)
pnpm add -D @maneko/eslint eslint @eslint/js typescript-eslint

# npm
npm install -D @maneko/eslint eslint @eslint/js typescript-eslint

# yarn
yarn add -D @maneko/eslint eslint @eslint/js typescript-eslint
```

> Make sure you also install framework peer-dependencies when needed (React, Vue, Astro, Next, etc.).

## Basic usage

Create `eslint.config.mjs` at the root of your project.

```js
import { eslint } from '@maneko/eslint';

export default eslint({
  // TypeScript support — keeps TS checks and rules enabled.
  typescript: true,

  // React setup. NOTE: to enable accessibility rules, use the object form
  // (not `react: true`).
  react: {
    // Enables `jsx-a11y` rules for React projects
    a11y: true
  }

  // You can also enable other frameworks similarly:
  // vue: { a11y: true }
  // astro: { a11y: true }
});
```

### Minimal setup (no extras)

```js
import { eslint } from '@maneko/eslint';

export default eslint();
```

## Scripts & common commands

Add a script to your `package.json` for convenience:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

If you use `lint-staged` + `husky` to run linting on commit, a simple setup looks like this:

```json
{
  "lint-staged": {
    "**/*.{js,ts,jsx,tsx,mjs}": ["pnpm lint:fix"]
  }
}
```

## Features

- JavaScript & TypeScript support.
- React and NextJS support
- Optional accessibility (a11y) rules via `react: { a11y: true }` (or `vue: { a11y: true }`, `astro: { a11y: true }` and etc.)
- Opinionated stylistic rules that play nice with `eslint --fix`
- Compatible with `lint-staged` and CI

## How to customize

Everything in this config can be overridden in your local `eslint.config.mjs` or `.eslintrc.*` file. If you need a stricter or looser rule set, extend the exported config and override specific rules.

Example: toggling a rule in your project:

```js
import { eslint } from '@maneko/eslint';

export default eslint(
  { typescript: true, react: { a11y: true } },
  {
    rules: {
      // override any rule here
      'no-console': 'warn'
    }
  }
);
```

## Troubleshooting

- If ESLint can't find parser/plugins, verify you installed `@typescript-eslint/*` packages and `eslint` itself.
- If a plugin complains about peer deps, install the missing peer dependency (e.g. React) or disable that plugin for the project.

## License

`@maneko/eslint` is licensed under the MIT License. See the `LICENSE` file in the repository.
