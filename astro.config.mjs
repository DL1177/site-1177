// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://felippejuan.github.io' : 'https://drluizinho.com.br',
  base: isGitHubPages ? '/site-1177' : '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
