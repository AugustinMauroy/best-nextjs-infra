import type { Config } from 'tailwindcss';

export default {
  content: ['./**/*.tsx'],
  darkMode:
    process.env.BUILD_ENV === 'storybook'
      ? ['class', '[data-theme="dark"]']
      : 'media',
} as Config;
