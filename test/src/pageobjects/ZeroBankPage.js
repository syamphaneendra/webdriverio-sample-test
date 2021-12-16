const Page = require('./Page');
const chai = require('chai');
chai.Assertion.addProperty('visible', require('chai-visible'));
const expect = chai.expect;

class ZeroBankPage extends Page {
    get signInButton() {return $('#signin_button')}
    get loginForm() {return $('#login_form')}
    get usernameElement() {return $('#user_login')}
    get passwordElement() {return $('#user_password')}
    get submitButton() {return $('input[type="submit"]')}
    get loginErrorMessage() {return $('.alert-error')}
    get navTabs() {return $('.nav-tabs')}
    get menuCollection() {return $$('.nav-tabs > li')}
    get feedbackLink() {return $('#feedback')}
    get feedbackName() {return $('#name')}
    get feedbackEmail() {return $('#email')}
    get feedbackSubject() {return $('#subject')}
    get feedbackQuestion() {return $('#comment')}
    get feedbackSubmit() {return $('input[type="submit"]')}
    get feedbackResponse() {return $('div.wrapper > div.container div.row > div')}
    get payeeLinkMenu() {return $('#pay_bills_tab')}   
    get payeeLinkUrl() {return $('#pay_bills_tab>a')}
    get addNewPayeeLinkUrl() {return $("a[href='#ui-tabs-2']")}
    get payeeName() {return $('#np_new_payee_name')}
    get payeeAddress() {return $('#np_new_payee_address')}
    get payeeAccount() {return $('#np_new_payee_account')}
    get payeeDetails() {return $('#np_new_payee_details')}
    get addPayeeButton() {return $('#add_new_payee')}
    get successMessage() {return $('div#alert_content')}
    get existingPayeeName() {return $('#sp_payee')}
    get existingPayeeAccount() {return $('#sp_account')}
    get amount() {return $('#sp_amount')}
    get date() {return $('#sp_date')}
    get description() {return $('#sp_description')}
    get paySavedPayeeButton() {return $('#pay_saved_payees')}

    async login(username, password) {
        await (await this.signInButton).click();
        await (await this.loginForm).waitForExist();
        await (await this.usernameElement).setValue(username);
        await (await this.passwordElement).setValue(password);
        await (await this.submitButton).click();
    }

    async verifyMenus(menuListSize)
    {
        await (await this.navTabs).waitForExist();
        expect(await this.menuCollection).to.have.lengthOf(menuListSize);
    }

    async verifyLoginErrorMessage()
    {
        expect(await (await this.loginErrorMessage).getText()).to.include('Login and/or password are wrong.');
    }

    async provideFeedback(name, email, subject, question)
    {
        await (await this.feedbackLink).waitForExist();
        await (await this.feedbackLink).click();
        await (await this.feedbackName).waitForExist();
        await (await this.feedbackName).setValue(name);
        await (await this.feedbackEmail).setValue(email);
        await (await this.feedbackSubject).setValue(subject);
        await (await this.feedbackQuestion).setValue(question);
        await (await this.feedbackSubmit).click();
    }

    async verifyFeedbackResponse()
    {
        expect(await browser.getUrl()).to.equal('http://zero.webappsecurity.com/sendFeedback.html');
    }

    async addNewPayee(name, address, account, details)
    {
        await (await this.payeeLinkMenu).waitForExist();
        await (await this.payeeLinkUrl).click();
        await (await this.addNewPayeeLinkUrl).waitForExist();
        await (await this.addNewPayeeLinkUrl).click();
        await (await this.payeeName).waitForExist();
        await (await this.payeeName).setValue(name);
        await (await this.payeeAddress).waitForExist();
        await (await this.payeeAddress).setValue(address);
        await (await this.payeeAccount).waitForExist();
        await (await this.payeeAccount).setValue(account);
        await (await this.payeeDetails).waitForExist();
        await (await this.payeeDetails).setValue(details);
        await (await this.addPayeeButton).click();
    }

    async verifyAddPayeeSuccessMessage(name) {
        expect(await (await this.successMessage).getText()).to.include('The new payee '+name+' was successfully created.');
    }

    async gotoPaySavedPayeeSection() {
        await (await this.payeeLinkMenu).waitForExist();
        await (await this.payeeLinkUrl).click();
    }

    async transferFunds(amountInDollars, payee, payeeAccount) {
        await (await this.existingPayeeName).waitForExist();
        await (await this.existingPayeeName).selectByAttribute('value', payee);
        await (await this.existingPayeeAccount).waitForExist();
        await (await this.existingPayeeAccount).selectByAttribute('value', "4");
        await (await this.amount).waitForExist();
        await (await this.amount).setValue(amountInDollars);
        await (await this.date).waitForExist();
        await (await this.date).click();
        await browser.keys("\uE007"); //Press Enter button
        await (await this.description).setValue("Transfer funds");
        await (await this.paySavedPayeeButton).click();
    }

    async verifyTransferFundsSuccessmessage()
    {
        expect(await (await this.successMessage).getText()).to.include('The payment was successfully submitted.');
    }
}

module.exports = new ZeroBankPage();