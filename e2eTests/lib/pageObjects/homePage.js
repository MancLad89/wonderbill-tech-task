const elements = {
	createAccountBtn: '[href="/register"]',
	signInLink: '[href="/login"]'
};

const commands = {
	/**
     * @desc performs a search for a sale
     * @options:
     * 	location: search term e.g. London | mandatory
     * 	minPrice: e.g. 100000 | optional
     *	maxPrice: e.g. 150000 | optional
     *	advancedSearch: true | optional
     *	keyword: search term e.g. garage | optional
     */
    performForSaleSearch: function (browser, options = {}) {
        browser
			.waitForElementVisible(elements.forSaleTab)
			.click(elements.forSaleTab);

        //location
        browser
			.waitForElementVisible(elements.locationInput)
			.setValue(elements.locationInput, options.location)
        	.click(`[data-value="${options.location}"]${elements.locationSuggestion}`);

        //min price
        if(options.minPrice){
            browser
				.waitForElementVisible(forSaleTab.minPriceDropDown)
				.click(`select${forSaleTab.minPriceDropDown} option[value="${options.minPrice}"]`);
		}

        //max price
		if(options.maxPrice){
            browser
				.waitForElementVisible(forSaleTab.maxPriceDropDown)
				.click(`select${forSaleTab.maxPriceDropDown} option[value="${options.maxPrice}"]`);
		}

		//advanced search
		if(options.advancedSearch){
			browser
				.click(elements.advancedSearch)
                .waitForElementVisible(elements.keywordsInput);

			//keyword
			if(options.keyword){
                browser.setValue(elements.keywordsInput, options.keyword)
			}
		}

        //search
        browser
			.waitForElementVisible(elements.searchBtn)
			.click(elements.searchBtn);

        //assert search performed successfully
        browser.assert.visible(browser.page.propertySearchResultsPage().elements.bedroomDropDown.selector,
            'For sale search performed from homepage successfully');
    },

    /**
     * @desc performs a search for a rental
     * @options:
     * 	location: search term e.g. London | mandatory
     * 	minPrice: e.g. 100000 | optional
     *	maxPrice: e.g. 150000 | optional
     */
	performRentalSearch: function (browser, options = {}) {
		browser
			.waitForElementVisible(elements.toRentTab)
			.click(elements.toRentTab);

		//location
        browser
			.waitForElementVisible(elements.locationInput)
			.setValue(elements.locationInput, options.location)
			.click(`[data-value="${options.location}"]${elements.locationSuggestion}`);

		//min price
        browser
			.waitForElementVisible(toRentTab.minPriceDropDown)
			.click(`select${toRentTab.minPriceDropDown} option[value="${options.minPrice}"]`);

        //max price
        browser
			.waitForElementVisible(toRentTab.maxPriceDropDown)
            .click(`select${toRentTab.maxPriceDropDown} option[value="${options.maxPrice}"]`);

        //search
        browser
			.waitForElementVisible(elements.searchBtn)
            .click(elements.searchBtn);

        //assert search performed successfully
        browser
			.assert.visible(browser.page.propertySearchResultsPage().elements.bedroomDropDown.selector,
			'Rental search performed from homepage successfully');
	},

    /**
     * @desc performs a search for house prices
     * @options:
     * 	location: search term e.g. London | mandatory
     */
    performHousePriceSearch: function (browser, options = {}) {
        browser
            .waitForElementVisible(elements.housePricesTab)
            .click(elements.housePricesTab)
            .waitForElementVisible(elements.activeHousePricesTab);

        //location
        browser
            .waitForElementVisible(elements.locationInput)
            .setValue(elements.locationInput, options.location)
            .waitForElementVisible(`li[data-value*="${options.location}"]`)
            .click(`li[data-value*="${options.location}"]`);

        //search
        browser
            .waitForElementVisible(elements.searchBtn)
            .click(elements.searchBtn);
    }
};

module.exports = {
	url: 'https://my.wonderbill.com/',
	commands: [commands],
	elements: elements
};