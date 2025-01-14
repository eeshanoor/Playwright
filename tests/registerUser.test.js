const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const SignUpPage = require('../pages/signupPage');
const AccountPage = require('../pages/accountPage');
const { generateRandomData } = require('../utils/dataGenerator');  // Import the data generator

test('Register User with Random Data', async ({ page }) => {
  const homePage = new HomePage(page);
  const signUpPage = new SignUpPage(page);
  const accountPage = new AccountPage(page);

  // Generate random data using the data generator
  const {
    randomName,
    randomEmail,
    randomPassword,
    randomAddress,
    randomAddress2,
    randomCity,
    randomState,
    randomZipCode,
    randomMobile
  } = generateRandomData();

  // 1. Launch browser (handled by Playwright)
  
  // 2. Navigate to url 'http://automationexercise.com'
  await homePage.navigateToHomePage();

  // 3. Verify that home page is visible successfully
  await homePage.verifyHomePage();

  // 4. Click on 'Signup / Login' button
  await homePage.clickSignUpButton();

  // 5. Verify 'New User Signup!' is visible
  await signUpPage.verifyNewUserSignup();

  // 6. Enter random name and email address
  await signUpPage.enterNameAndEmail(randomName, randomEmail);

  // 7. Click 'Signup' button
  await signUpPage.clickSignUpButton();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await signUpPage.verifyAccountInfo();

  // 9. Fill random details: Title, Name, Email, Password, Date of birth
  await signUpPage.fillAccountInformation('Mr', randomName, randomEmail, randomPassword, '15');

  // 10. Select checkbox 'Sign up for our newsletter!'
  // 11. Select checkbox 'Receive special offers from our partners!'
  await signUpPage.selectNewsAndOffers();

  // 12. Fill random details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await signUpPage.fillAddressDetails(randomName.split(' ')[0], randomName.split(' ')[1], 'Company', randomAddress, randomAddress2, 'India', randomState, randomCity, randomZipCode, randomMobile);

  // 13. Click 'Create Account button'
  await signUpPage.createAccount();

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await signUpPage.verifyAccountCreated();

  // 15. Click 'Continue' button
  await signUpPage.clickContinue();

  // 17. Verify that 'Logged in as <user_name>' is visible
  const loggedInHeader = page.locator('li:has-text("Logged in as")');
  await expect(loggedInHeader.locator('b')).toHaveText(randomName);

  // 17. Click 'Delete Account' button
  await accountPage.clickDeleteAccount();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await accountPage.verifyAccountDeleted();
  await accountPage.clickContinue();
});
