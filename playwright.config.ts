import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  fullyParallel: true,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    ignoreHTTPSErrors: true
  }
});