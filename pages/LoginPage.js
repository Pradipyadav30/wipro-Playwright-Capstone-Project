class LoginPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.usernameInput = '#user-name';

        this.passwordInput = '#password';

        this.loginButton = '#login-button';

        this.errorMessage = '[data-test="error"]';
    }

    // Open Login Page
    async gotoLoginPage() {

        await this.page.goto('https://www.saucedemo.com/');
    }

    // Login Method
    async login(username, password) {

        await this.page.fill(this.usernameInput, username);

        await this.page.fill(this.passwordInput, password);

        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;