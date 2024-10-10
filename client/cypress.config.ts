import coverage from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: () => {
        const config = viteConfig({
          mode: 'development',
          command: 'build',
        });
        config.server.https = false;
        return config;
      },
    },
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },
  defaultCommandTimeout: 30000,
  reporter: 'list',
  reporterOptions: {
    toConsole: true,
  },
});
