import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
<<<<<<< HEAD
  readonly usernameInput: Locator  ;
=======
  readonly usernameInput:   Locator;
>>>>>>> 9e9a72409355bb692e3f2322703ece0a16124afc
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
