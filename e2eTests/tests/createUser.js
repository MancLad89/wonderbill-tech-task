describe('New user tests', function() {
    const name = 'Test User';
    const email = `${Math.random().toString(36).substring(7)}@hotmail.com`;
    const password = 'Password99!';

    before(function(browser) {
        browser.page.registerPage().navigate();
        browser.page.cookieNotification()
            .acceptCookies(browser);
    });

    test('Assert all elements on register page', function(browser){
        browser.page.registerPage()
            .assertDisplayed(browser);
    });

    test('Create new user', function(browser){
        browser.page.registerPage()
            .register(browser,{
                name: name,
                email: email,
                password: password
            });
    });

    //failing test
    test('Create new user from homepage', function(browser){
        browser.page.homePage().navigate();

        browser.page.registerPage()
            .register(browser,{
                name: name,
                email: email,
                password: password
            });
    });
});