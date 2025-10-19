# @maneko/eslint

[![Stars](https://img.shields.io/github/stars/maneko-org/eslint?style=flat-square&logoColor=white)](https://github.com/maneko-org/eslint/stargazers)
[![Forks](https://img.shields.io/github/forks/maneko-org/eslint?style=flat-square&logoColor=white)](https://github.com/maneko-org/eslint/network/members)
[![Pull Requests](https://img.shields.io/github/issues-pr/maneko-org/eslint?style=flat-square&logoColor=white)](https://github.com/maneko-org/eslint/pulls)
[![Issues](https://img.shields.io/github/issues/maneko-org/eslint?style=flat-square&logoColor=white)](https://github.com/maneko-org/eslint/issues)
[![Contributors](https://img.shields.io/github/contributors/maneko-org/eslint?style=flat-square&logoColor=white)](https://github.com/maneko-org/eslint/graphs/contributors)
[![License](https://img.shields.io/github/license/maneko-org/eslint?style=flat-square&logoColor=white)](https://github.com/maneko-org/eslint/blob/main/LICENSE)

A shared ESLint config for our projects — simple, consistent, and modern. Based on `@antfu/eslint-config` and tailored to work nicely with modern JS/TS stacks and common frameworks.

## Why use this

- One-line setup for a sensible, opinionated ESLint flat config.
- Works with JavaScript and TypeScript out of the box (when TS deps are installed).
- Optional integrations: React, Next.js, Vue, Astro, Svelte, Solid.
- Stylistic rules that are fixable (`eslint --fix`) and play nice with CI and `lint-staged`.

## Quick start

Install `@maneko/eslint` and the minimal tooling in your project. Use the command matching your package manager.

### JavaScript project (recommended minimal)

```bash
# pnpm (recommended)
pnpm add -D @maneko/eslint eslint @eslint/js

# yarn
yarn add -D @maneko/eslint eslint @eslint/js

# npm
npm install -D @maneko/eslint eslint @eslint/js
```

> **Note:** VS Code ESLint extension requires `eslint` to be present in the project root `node_modules`. If `eslint` exists only nested inside `node_modules/@maneko/...`, the extension won't find it — that's why we install `eslint` in the host project.

### TypeScript project

```bash
pnpm add -D @maneko/eslint eslint @eslint/js typescript-eslint
```

> Install framework peer-deps as needed (React, Vue, Next, etc.) — we mention per-integration commands below.

## Basic usage

Create `eslint.config.mjs` in the root of your project:

```js
import { eslint } from '@maneko/eslint';

export default eslint({
  // Enable TypeScript-specific rules if you installed @typescript-eslint
  typescript: true,

  // Enable React + accessibility rules
  react: {
    a11y: true
  }

  // Enable Next.js rules if you're using Next
  // nextjs: true,
});
```

### Minimal setup (no extras)

```js
import { eslint } from '@maneko/eslint';

export default eslint();
```

## Scripts & common commands

Add convenient scripts to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

If you use `lint-staged` + `husky` to lint on commit, use something like:

```json
{
  "lint-staged": {
    "**/*.{js,ts,jsx,tsx,mjs}": ["pnpm lint:fix"]
  }
}
```

## IDE integration (VS Code)

Install the [ESLint extension for VS Code](https://marketplace.visualstudio.com/items/itemName=dbaeumer.vscode-eslint) and add these settings to `.vscode/settings.json` for best DX:

```jsonc
{
  // Disable conflicting formatters if you prefer eslint autofix
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Run ESLint auto-fix on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```

## Features

- JavaScript & TypeScript support (opt-in).
- React and Next.js integrations.
- Optional accessibility (a11y) rules via `react: { a11y: true }` or `vue: { a11y: true }`.
- Opinionated stylistic rules (using `style/*`) with auto-fix support.
- Straightforward customization via `eslint()` factory.

## Integrations & optional packages

Some integrations require extra packages. Run these when enabling the feature:

**React (recommended):**

```bash
pnpm add -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

**Next.js:**

```bash
pnpm add -D @next/eslint-plugin-next
```

**Svelte / Astro / Solid / UnoCSS** — see the package docs; additional plugins may be required.

## Customization

You can override any settings by passing options and extra flat-configs to the factory function.

Example — enable TypeScript and override specific rules:

```js
import { eslint } from '@maneko/eslint';

export default eslint(
  { typescript: true, react: { a11y: true } },
  {
    rules: {
      'no-console': 'warn'
      // override other rules as needed
    }
  }
);
```

Advanced: the factory returns a composer object so you can `prepend`, `override`, and `renamePlugins` similar to `@antfu/eslint-config`.

## Troubleshooting

- **`ESLint extension not working in VSCode`** — ensure `eslint` is installed in your project root (`node_modules/eslint`). The extension doesn't resolve nested `node_modules` inside other packages.

- **Missing parser or plugins** — install the required peer deps (e.g. `typescript-eslint`) into your project.

- **Peer dependency warnings on install** — normal. If you want everything to be installed automatically by your package, move required tooling to `dependencies` (design choice). Usually we keep them as `devDependencies` for apps and `peerDependencies` for configs.

- **Deprecated rule options (e.g. `allowTemplateLiterals: true`)** — replace booleans with `'always'` or `'never'` where required by the plugin.

## Examples & recipes

- Minimal JS project: `eslint.config.mjs` with `export default eslint()`.
- TS + React: `export default eslint({ typescript: true, react: { a11y: true } })`.
- Using with legacy `.eslintrc` — convert using `@eslint/eslintrc` / `FlatCompat` if needed.

## Contributing

PRs welcome. Keep changes small and document any new opinionated rules.

## License

`@maneko/eslint` is licensed under the MIT License. See the `LICENSE` file in the repository.
