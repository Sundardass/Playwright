import { test, expect } from '@fixtures/base';

test.describe('Login', () => {
  test('successful login navigates to inventory', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/\/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('invalid credentials show error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });
});
