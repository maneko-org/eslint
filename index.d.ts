declare module '@maneko/eslint' {
  import type {
    Awaitable,
    ConfigNames,
    OptionsConfig,
    TypedFlatConfigItem,
  } from '@antfu/eslint-config';
  import type { Linter } from 'eslint';
  import type { FlatConfigComposer } from 'eslint-flat-config-utils';

  export type Eslint = (
    options?: OptionsConfig & TypedFlatConfigItem,
    ...userConfigs: Awaitable<
      | FlatConfigComposer<any, any>
      | Linter.Config[]
      | TypedFlatConfigItem
      | TypedFlatConfigItem[]
    >[]
  ) => FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;

  export const eslint: Eslint;
}
