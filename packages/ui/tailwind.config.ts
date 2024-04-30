import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwing-config/tailwind.config';

const config: Pick<Config, 'prefix' | 'presets'> = {
  prefix: 'ui-',
  presets: [sharedConfig],
};

export default config;
