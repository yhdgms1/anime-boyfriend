import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import ssl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ mode }) => {
  const external = mode.includes('external');

  return {
    plugins: [
      svelte(),
      ssl(),
      {
        name: 'html-postprocess',
        transformIndexHtml(html) {
          return html.replace('{{sdk}}', external ? '' : '<script src="https://yandex.ru/games/sdk/v2"></script>')
        }
      }
    ],
    build: {
      target: ['firefox78', 'chrome78'],
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash].[ext]'
        }
      },
    },
    base: './',
    mode: external ? mode.includes('external-dev') ? 'development' : 'production' : mode,
  }
})
