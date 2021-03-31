//common elements
const elements = {
	logo: '#app h1',
	heading: '#app h2',
	headingMessage: '.message',
	nameField: '[data-test="userNameField"]',
    emailField: '[data-test="emailField"]',
	passwordField: '[name="passwordField"]',
    termsCheckbox: '[for="termsCheckbox"] ',
	termsLink: '[for="termsCheckbox"] [href="/terms"]',
	privacyLink: '[for="termsCheckbox"] [href="/privacy"]',
	marketingCheckbox: '[for="marketingCheckbox"]',
	signUpBtn: '[title="Sign up"]',
	loginLink: '[title="Login to WonderBill"]',
	appStoreBtn: '[src*="app-store-1"]',
	googlePlayBtn: '[src*="app-store-2"]'
};

//successful register elements
const success = {
    logo: '#app h1',
    heading: '#app h2',
	message: '#app p',
	successImage: '[title="Success!"]'
};

const commands = {
    /**
     * @desc asserts all elements on the page
     */
	assertDisplayed: function (browser) {
		Object.keys(elements).forEach(function (key) {
            browser.waitForElementVisible(elements[key]);
        });
    },
	/**
     * @desc register a new user
	 * options:
	 * 	name: e.g. test user | mandatory
	 * 	email: e.g. test@hotmail.com | mandatory
	 * 	password: e.g. Password99! | mandatory
     */
    register: function (browser, options = {}) {
		browser
			.waitForElementVisible(elements.nameField)
            .setValue(elements.nameField, options.name)
			.setValue(elements.emailField, options.email)
            .setValue(elements.passwordField, options.password)
			.click(elements.termsCheckbox)
            .click(elements.marketingCheckbox)
			.click(elements.signUpBtn);

        Object.keys(success).forEach(function (key) {
            browser.waitForElementVisible(success[key]);
        });
	}
};

module.exports = {
    url: 'https://my.wonderbill.com/register',
	commands: [commands],
	elements: elements
};
