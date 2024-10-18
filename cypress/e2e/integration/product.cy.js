import productPage from '../Page/productPage';
import loginPage from '../Page/loginPage';
import users from '../../fixtures/users.json';

describe('Product Page Tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername(users[0].username);
    loginPage.fillPassword(users[0].password);
    loginPage.submit();
    productPage.assertProductDisplayed('Sauce Labs Backpack');
  });

  it('should display products correctly', () => {
    productPage.assertProductDisplayed('Sauce Labs Backpack');
    productPage.assertFirstProductDescription("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")
    productPage.assertFirstProductPrice('$29.99');
  });
});
