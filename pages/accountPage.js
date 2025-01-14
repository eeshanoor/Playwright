const { expect } = require('@playwright/test'); // Import expect

class AccountPage {
  constructor(page) {
    this.page = page;
    this.accountCreatedText = page.locator('h2:has-text("ACCOUNT CREATED!")');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
    this.loggedInText = page.locator('a[href="/account/profile"]:has-text("Logged in as")');
    this.deleteAccountButton = page.locator('a[href="/delete_account"]');
    this.accountDeletedText = page.locator('h2:has-text("ACCOUNT DELETED!")');
  }

  // Method to verify account creation
  async verifyAccountCreated() {
    await expect(this.accountCreatedText).toBeVisible();
  }

  // Method to verify account deletion
  async verifyAccountDeleted() {
    await expect(this.accountDeletedText).toBeVisible();
  }

  // Method to click the "Continue" button
  async clickContinue() {
    await this.continueButton.waitFor({ state: 'visible' });  // Ensure the button is visible
    await this.continueButton.click();
  }

  // Method to click the "Delete Account" button
  async clickDeleteAccount() {
    await this.deleteAccountButton.waitFor({ state: 'visible' }); // Wait for the button to be visible
    await this.deleteAccountButton.click();

    // Optionally, you could verify the page or result after clicking delete
    await expect(this.page).toHaveURL(/.*\/delete_account/);  // Ensure URL contains "/delete_account"
  }
}

module.exports = AccountPage;
