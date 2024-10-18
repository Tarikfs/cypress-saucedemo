import productPage from '../Page/productPage';
import loginPage from '../Page/loginPage';
import users from '../../fixtures/users.json';
import cartPage from '../Page/cartPage';
import checkoutPage from '../Page/checkoutPage';

describe('Cart Page Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.fillUsername(users[0].username);
        loginPage.fillPassword(users[0].password);
        loginPage.submit();
        productPage.assertProductDisplayed('Sauce Labs Backpack');
    });

    it('should add product to cart, display products and checkout correctly', () => {
        productPage.assertProductDisplayed('Sauce Labs Backpack');
        productPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        productPage.assertFirstProductPrice('$29.99');
        productPage.addToCartBTN();
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.checkout();
        checkoutPage.checkoutTitle('Checkout: Your Information');
    });

    it('should remove product from cart products page', () => {
        cartPage.openCart();
        cartPage.removeFromCartBTN();
    });

    it('should remove product from cart and continue shopping', () => {
        productPage.assertProductDisplayed('Sauce Labs Backpack');
        productPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        productPage.assertFirstProductPrice('$29.99');
        productPage.addToCartBTN();
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.removeFromCartBTN();
        cartPage.continueShopping();
    });
});
