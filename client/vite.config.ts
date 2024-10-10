/// <reference types="vitest" />
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import basicSsl from '@vitejs/plugin-basic-ssl';
import istanbul from 'vite-plugin-istanbul';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    build: {
      manifest: true,
    },
    define: {
      'process.env': process.env,
      APP_ENV: JSON.stringify(env.VITE_ENV),
      APP_SSO_OAUTH_CLIENT_ID: JSON.stringify(env.VITE_SSO_OAUTH_CLIENT_ID),
      APP_SSO_OAUTH_SCOPE: JSON.stringify(env.VITE_SSO_OAUTH_SCOPE),
      APP_SSO_URL: JSON.stringify(env.VITE_SSO_URL),
      APP_SSO_REDIRECT_URL: JSON.stringify(env.VITE_SSO_REDIRECT_URL),
      APP_BASE_API_URL: JSON.stringify(env.VITE_BASE_API_URL),
    },
    plugins: [
      viteCommonjs(),
      basicSsl(),
      istanbul({
        cypress: true,
        requireEnv: false,
      }),
      react(),
      // VitePWA({
      //   injectRegister: 'script-defer',
      // }),
    ],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src/App'),
        '@api': path.resolve(__dirname, 'src/services/API'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@auth': path.resolve(__dirname, 'src/services/Auth'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@contexts': path.resolve(__dirname, 'src/store/contexts'),
        '@data': path.resolve(__dirname, 'src/store/data/mock-data'),
        '@reducers': path.resolve(__dirname, 'src/store/reducers'),
        '@shared': path.resolve(__dirname, 'src/components/shared'),
        '@src': path.resolve(__dirname, 'src'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@testing': path.resolve(__dirname, 'src/test-setup'),
        '@typedefs': path.resolve(__dirname, 'src/typedefs'),
      },
    },
    server: {
      port: 3000,
    },
    test: {
      coverage: {
        provider: 'v8',
        reporter: ['html', 'json-summary', 'json'],
        thresholds: {
          lines: 60,
          branches: 60,
          functions: 40,
          statements: 40,
        },
      },
      environment: 'jsdom',
      globals: true,
      reportOnFailure: true,
      setupFiles: ['./src/test-setup.tsx'],
    },
  };
});
