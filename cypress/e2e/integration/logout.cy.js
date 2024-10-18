import productPage from '../Page/productPage';
import loginPage from '../Page/loginPage';
import users from '../../fixtures/users.json';
import logoutPage from '../Page/logoutPage';

describe('logout Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.fillUsername(users[0].username);
        loginPage.fillPassword(users[0].password);
        loginPage.submit();
        productPage.assertProductDisplayed('Sauce Labs Backpack');
    });


    it('should logout successfully', () => {
        logoutPage.logout();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});
