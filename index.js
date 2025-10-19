import antfu from '@antfu/eslint-config';
import pluginReact from 'eslint-plugin-react';

/** @type {import('@maneko/eslint').Eslint} */
export const eslint = ({ ...options }, ...userConfigs) => {
  const stylistic = options.stylistic ?? false;

  if (options.react) {
    userConfigs.unshift({
      name: 'maneko/react',
      plugins: {
        'maneko-react': pluginReact,
      },
      rules: {
        'maneko-react/function-component-definition': [
          'error',
          {
            namedComponents: ['arrow-function'],
            unnamedComponents: 'arrow-function',
          },
        ],
        'maneko-react/prop-types': 'off',
        'maneko-react/react-in-jsx-scope': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    });
  }

  if (stylistic) {
    userConfigs.unshift({
      name: 'maneko/stylistic',
      rules: {
        'style/arrow-parens': ['error', 'always'],
        'style/brace-style': 'off',
        'style/comma-dangle': ['error', 'never'],
        'style/indent': ['error', 2, { SwitchCase: 1 }],
        'style/jsx-curly-newline': 'off',
        'style/jsx-one-expression-per-line': 'off',
        'style/jsx-quotes': ['error', 'prefer-single'],
        'style/linebreak-style': ['error', 'unix'],
        'style/max-len': [
          'error',
          100,
          2,
          {
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        'style/member-delimiter-style': 'off',
        'style/multiline-ternary': 'off',
        'style/no-tabs': 'error',
        'style/operator-linebreak': 'off',
        'style/quote-props': 'off',
        'style/quotes': [
          'error',
          'single',
          { allowTemplateLiterals: 'always' },
        ],
        'style/semi': ['error', 'always'],
      },
    });
  }

  userConfigs.push(
    {
      name: 'maneko/rewrite',
      rules: {
        'antfu/curly': 'off',
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'no-console': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'test/prefer-lowercase-title': 'off',
      },
    },
    {
      name: 'maneko/sort',
      rules: {
        'perfectionist/sort-array-includes': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical',
          },
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              ['builtin', 'external'],
              'internal-type',
              ['internal'],
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'object',
              'style',
              'side-effect-style',
              'unknown',
            ],
            internalPattern: ['^~/.*', '^@/.*'],
            newlinesBetween: 'always',
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            groups: ['unknown', 'method', 'multiline'],
            order: 'asc',
            type: 'alphabetical',
          },
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              callback: 'on*',
              reserved: ['key', 'ref'],
            },
            groups: [
              'shorthand',
              'reserved',
              'multiline',
              'unknown',
              'callback',
            ],
            order: 'asc',
            type: 'alphabetical',
          },
        ],
        'perfectionist/sort-union-types': [
          'error',
          {
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish',
            ],
            order: 'asc',
            specialCharacters: 'keep',
            type: 'alphabetical',
          },
        ],
      },
    },
  );

  return antfu({ ...options, stylistic }, ...userConfigs);
};
