import filterPage from "../Page/filterPage";
import productPage from '../Page/productPage';
import loginPage from '../Page/loginPage';
import users from '../../fixtures/users.json';


describe('Filter Tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername(users[0].username);
    loginPage.fillPassword(users[0].password);
    loginPage.submit();
    productPage.assertProductDisplayed('Sauce Labs Backpack');
  });

  it('should apply a low to high Price filter and inspect first product', () => {
    filterPage.applyFilter('Price (low to high)');
    productPage.assertFirstProductName('Sauce Labs Onesie');
    productPage.assertFirstProductDescription("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
    productPage.assertFirstProductPrice('$7.99');
  });

  it('should apply a high to low Price filter and inspect first product', () => {
    filterPage.applyFilter('Price (high to low)');
    productPage.assertFirstProductName('Sauce Labs Fleece Jacket');
    productPage.assertFirstProductDescription("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")
    productPage.assertFirstProductPrice('$49.99');
  });

  it('should apply a A to Z Name filter and inspect first product', () => {
    filterPage.applyFilter('Name (A to Z)');
    productPage.assertFirstProductName('Sauce Labs Backpack');
    productPage.assertFirstProductDescription("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")
    productPage.assertFirstProductPrice('$29.99');
  });

  it('should apply a Z to A Name filter and inspect first product', () => {
    filterPage.applyFilter('Name (Z to A)');
    productPage.assertFirstProductName('Test.allTheThings() T-Shirt (Red)');
    productPage.assertFirstProductDescription("This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.")
    productPage.assertFirstProductPrice('$15.99');
  });
});