const { defineConfig } = require('@playwright/test');

// Function to get current date and time as a string
function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

module.exports = defineConfig({
  projects: [
    {
      name: 'test',
      use: {
        headless: true,
        // Enable video recording for every test
        video: 'on',  // Capture video for every test (pass or fail)
        
        // Enable screenshot capturing for every test
        screenshot: 'on', // Capture screenshots for every test (pass or fail)

        // Enable trace capture for debugging (optional)
        trace: 'on', // Capture trace for every test (pass or fail)
      },
    },
  ],

  // Define output folder with a dynamic date-time name
  reporter: [
    ['html', { outputFolder: `playwright-report/playwright-report_${getFormattedDate()}`, open: 'never' }],
  ],

  // Configure the directory where the screenshots, videos, and traces will be stored
  outputDir: `playwright-report/playwright-report_${getFormattedDate()}`, // Store test artifacts like screenshots, videos, and traces

  timeout: 60000, // Global timeout for each test
  retries: 2, // Retry failed tests
  workers: 4, // Run tests in parallel (adjust based on your machine's capability)
});
