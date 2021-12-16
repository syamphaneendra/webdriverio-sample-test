const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const ZeroBankPage = require('./../pageobjects/ZeroBankPage')

Given('I am on the Zero Bank application page', async () => {
  await ZeroBankPage.launchBrowser();
});

When('I login to the application', async () => {
  await ZeroBankPage.login("username", "password");
});

When('I try to login to the application with incorrect credentials', async () => {
  await ZeroBankPage.login("wrongusername", "wrongpassword");
});

Then('I should see the six menu list items', async () => {
  await ZeroBankPage.verifyMenus(6);
});

Then('I should see login error message', async () => {
  await ZeroBankPage.verifyLoginErrorMessage();
});

When('I provide the feedback', async () => {
  await ZeroBankPage.provideFeedback("ABC Name", "abc@abc.com", "Feedback test", "How it is developed?");
});

Then('I should see the feedback response', async () => {
  await ZeroBankPage.verifyFeedbackResponse();
});

When('I add a new payee in Pay Bills section', async () => {
  await ZeroBankPage.addNewPayee("ABC", "United Kingdom", "12345", "ABC");
});

Then('I should see the successful message with payee name', async () => {
  await ZeroBankPage.verifyAddPayeeSuccessMessage("ABC");
});

Given('I go to pay saved payee option under the Pay Bills section', async () => {
  await ZeroBankPage.gotoPaySavedPayeeSection();
});

When('I transfer {string} dollors to the {string} {string} account today', async (amount, payee, payeeAccount) => {
  await ZeroBankPage.transferFunds(amount, payee, payeeAccount);
});

Then('I should see the successful transfer message', async () => {
  await ZeroBankPage.verifyTransferFundsSuccessmessage();
});