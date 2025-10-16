# @maneko/eslint

A shared ESLint config for our projects — simple, consistent, and modern.

## Description

Based on the configuration from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) and heavily inspired by [`@siberiacancode/eslint`](https://github.com/siberiacancode/core/tree/main/tools/eslint) from the [`@siberiacancode/core`](https://github.com/siberiacancode/core) repository.

## Quick Start

Install the package using your preferred package manager:

```bash
# npm
npm install -D @maneko/eslint @eslint/js typescript-eslint
# pnpm
pnpm add -D @maneko/eslint @eslint/js typescript-eslint
# yarn
yarn add -D @maneko/eslint @eslint/js typescript-eslint
```

Make sure you also have peer dependencies installed (react, typescript, etc.) if needed.

## Usage

Create an `eslint.config.mjs` file in the root of your project:

```js
import { eslint } from "@maneko/eslint";

export default eslint({
  typescript: true, // TypeScript support
  react: true, // React rules
  jsxA11y: true, // Accessability rules
  next: true, // NextJS rules
  stylistic: true, // Stylistic rules (optional)
});
```

Or, for a minimal setup without extras:

```js
import { eslint } from "@maneko/eslint";

export default eslint();
```

Then run ESLint as usual:

```bash
pnpm eslint . --fix
# or using npm / yarn
```

## Features

- Works with **JavaScript**, **TypeScript**, **React**, and **NextJS**
- Optional **stylistic rules** for consistent code style
- Based on `@antfu/eslint-config` and inspired by `@siberiacancode/eslint`
- Supports plugins: `react`, `react-hooks`, `jsx-a11y`, `next`, etc.
- Fully compatible with `eslint --fix` and `lint-staged`

## License

@maneko/eslint is licensed under the [MIT License](https://github.com/maneko-org/eslint/blob/main/LICENSE)
