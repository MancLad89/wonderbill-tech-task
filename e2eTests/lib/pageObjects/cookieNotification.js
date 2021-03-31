//common elements
const elements = {
	cookieForm: '.evidon-banner',
	acceptCookiesBtn: '.evidon-banner-acceptbutton'
};

const commands = {
    /**
     * @desc accept cookies and remove banner
     */
	acceptCookies: function (browser) {
		browser
			.waitForElementVisible(elements.acceptCookiesBtn)
			.click(elements.acceptCookiesBtn)
			.waitForElementNotPresent(elements.acceptCookiesBtn);
	}
};

module.exports = {
	commands: [commands],
	elements: elements
};
