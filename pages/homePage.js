const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('a:has-text("Home")');
    this.signUpButton = page.locator('a:has-text("Signup / Login")');
  }

  // Method to navigate to the homepage
  async navigateToHomePage() {
    await this.page.goto('http://automationexercise.com');
  }

  // Method to verify the home page is visible by specifically targeting the correct h1 element
  async verifyHomePage() {
    const homeHeader = await this.page.locator('h1:has-text("AutomationExercise")').nth(0);
    await expect(homeHeader).toBeVisible();
  }

  // Method to click on the Signup button
  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  // Method to verify that the "Home" link is visible and its color is orange
  async verifyHomeLink() {
    await expect(this.homeLink).toBeVisible();
    const color = await this.homeLink.evaluate(el => window.getComputedStyle(el).color);
    expect(color).toBe('rgb(255, 165, 0)'); // RGB for orange color
  }
}

module.exports = HomePage;
