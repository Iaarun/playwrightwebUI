// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  use: {
    broswerName: 'chromium',
    headless : false,
    launchOptions:{
      slowmo: 500
    }
  },
 
});

module.exports = config
