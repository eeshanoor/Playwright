const { expect } = require('@playwright/test');

class SignUpPage {
  constructor(page) {
    this.page = page;
    // Locators for different fields on the signup page
    this.nameField = page.locator('input[data-qa="signup-name"]'); 
    this.emailField = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.accountInfoHeader = page.locator('h2:has-text("ENTER ACCOUNT INFORMATION")');
    this.titleRadioButton = page.locator('input[name="title"][value="Mr"]'); // Example for selecting 'Mr'
    this.passwordField = page.locator('input[name="password"]');
    this.dayDropdown = page.locator('select[name="days"]');
    this.monthDropdown = page.locator('select[name="months"]');
    this.yearDropdown = page.locator('select[name="years"]');
    this.newsletterCheckbox = page.locator('input[name="newsletter"]');
    this.offersCheckbox = page.locator('input[name="optin"]');
    this.firstNameField = page.locator('input[name="first_name"]');
    this.lastNameField = page.locator('input[name="last_name"]');
    this.companyField = page.locator('input[name="company"]');
    this.addressField = page.locator('input[name="address1"]');
    this.address2Field = page.locator('input[name="address2"]');
    this.countryDropdown = page.locator('select[name="country"]');
    this.stateField = page.locator('input[name="state"]');
    this.cityField = page.locator('input[name="city"]');
    this.zipCodeField = page.locator('input[name="zipcode"]');
    this.mobileNumberField = page.locator('input[name="mobile_number"]');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedMessage = page.locator('b:has-text("Account Created!")');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
  }

  // Method to verify 'New User Signup!' is visible
  async verifyNewUserSignup() {
    const signupHeader = this.page.locator('h2:has-text("New User Signup!")');
    await expect(signupHeader).toBeVisible();
  }

  // Method to enter name and email address
  async enterNameAndEmail(name, email) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
  }

  // Method to click the Signup button
  async clickSignUpButton() {
    await this.signupButton.click();
  }

  // Method to verify 'ENTER ACCOUNT INFORMATION' is visible
  async verifyAccountInfo() {
    await expect(this.accountInfoHeader).toBeVisible();
  }

  // Method to fill account information (Title, Name, Email, Password, Date of Birth)
  async fillAccountInformation(title, name, email, password, day, month, year) {
    await this.titleRadioButton.check(); // Check 'Mr' title
    await this.passwordField.fill(password);
    await this.dayDropdown.selectOption({ label: day });
    await this.monthDropdown.selectOption({ label: month });
    await this.yearDropdown.selectOption({ label: year });
  }

  // Method to select newsletter and special offers checkboxes
  async selectNewsAndOffers() {
    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();
  }

  // Method to fill address details (First Name, Last Name, Address, etc.)
  async fillAddressDetails(firstName, lastName, company, address, address2, country, state, city, zipCode, mobileNumber) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.companyField.fill(company);
    await this.addressField.fill(address);
    await this.address2Field.fill(address2);
    await this.countryDropdown.selectOption({ label: country });
    await this.stateField.fill(state);
    await this.cityField.fill(city);
    await this.zipCodeField.fill(zipCode);
    await this.mobileNumberField.fill(mobileNumber);
  }

  // Method to create account by clicking the create account button
  async createAccount() {
    await this.createAccountButton.click();
  }

  // Method to verify account creation message
  async verifyAccountCreated() {
    await expect(this.accountCreatedMessage).toBeVisible();
  }

  // Method to click continue button after account creation
  async clickContinue() {
    await this.continueButton.click();
  }
}

module.exports = SignUpPage;
