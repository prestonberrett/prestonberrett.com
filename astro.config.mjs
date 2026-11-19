// @ts-check
import { defineConfig } from 'astro/config';

// Load local, uncommitted settings (e.g. DEV_HOST) from .env if it exists.
try {
  process.loadEnvFile();
} catch {}

// https://astro.build/config
export default defineConfig({
  server: {
    host: '127.0.0.1',
    allowedHosts: process.env.DEV_HOST ? [process.env.DEV_HOST] : [],
  },
});
