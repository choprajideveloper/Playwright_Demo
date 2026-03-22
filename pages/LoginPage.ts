import {Locator, Page} from '@playwright/test';
export class LoginPage{

    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly invalidCredentialsErrorPopup: Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.userNameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton=page.getByRole('button',{name:'login'});
        this.invalidCredentialsErrorPopup=page.getByText('Invalid credentials');

    }

/* TO open URL in browser */
   async gotoOrangeHrm()
    {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

/* Login to HRM */
    async loginOrangeHrm(username: string , password: string)
    {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
