import users from '../../fixtures/users.json';
import loginPage from '../Page/loginPage';
import productPage from '../Page/productPage';
describe('Login Tests', () => {

  beforeEach("visit", () => {
    loginPage.visit();
  });
  it('should login successfully with valid credentials', () => {
    loginPage.fillUsername(users[0].username);
    loginPage.fillPassword(users[0].password);
    loginPage.submit();
    productPage.assertProductDisplayed('Sauce Labs Backpack');
  });

  it('should show error for locked-out user', () => {
    loginPage.fillUsername(users[1].username);
    loginPage.fillPassword(users[1].password);
    loginPage.submit();
    loginPage.assertLoginError('Epic sadface: Sorry, this user has been locked out.');
  });

  it('should show error for empty fields', () => {
    loginPage.submit();
    loginPage.assertLoginError('Username is required');
  });
});