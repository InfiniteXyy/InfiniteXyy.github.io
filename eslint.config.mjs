import antfu from '@antfu/eslint-config';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';

const flatCompat = new FlatCompat();

const nextConfig = fixupConfigRules(flatCompat.extends('next/core-web-vitals')).map((config) => {
  if (config.plugins && 'import' in config.plugins) {
    delete config.plugins.import;
  }
  return { ...config, ignores: ['**/*.{md,json}'] };
});

export default antfu({
  isInEditor: false,
  stylistic: { quotes: 'single', semi: true },
  jsx: true,
}).append(nextConfig).overrideRules({
  'antfu/if-newline': 'off',
});
