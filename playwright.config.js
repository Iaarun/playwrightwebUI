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
  timeout:15000,
  reporter:[['allure-playwright', {outputFolder: 'allure-results'}],['html',{open:'never'}]],
   workers: '50%',
  expect: { 
    timeout: 10_000 
  },

  use: {
    
    headless : false,
    browserName: 'chromium',
    launchOptions:{
      slowmo: 2000
    },
    screenshot: 'only-on-failure'
  },
 
});

module.exports = config
