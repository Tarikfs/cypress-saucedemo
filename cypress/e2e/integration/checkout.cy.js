import loginPage from '../Page/loginPage';
import users from '../../fixtures/users.json';
import cartPage from '../Page/cartPage';
import checkoutPage from "../Page/checkoutPage";
import productPage from '../Page/productPage';
import resetAppStatePage from '../Page/resetAppStatePage';

describe('Checkout Page Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.fillUsername(users[0].username);
        loginPage.fillPassword(users[0].password);
        loginPage.submit();
        productPage.assertProductDisplayed('Sauce Labs Backpack');
    });

    it('should add product to cart, display products and checkout correctly', () => {
        productPage.assertProductDisplayed('Sauce Labs Backpack');
        productPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        productPage.assertFirstProductPrice('$29.99');
        productPage.addToCartBTN();
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.checkout();
        checkoutPage.checkoutTitle('Checkout: Your Information');
        checkoutPage.fillFirstName('testFirst');
        checkoutPage.fillLastName('testLast');
        checkoutPage.fillZipPostalCode('12345678');
        checkoutPage.continue();
        checkoutPage.checkoutTitle('Checkout: Overview');
        checkoutPage.finish();
        checkoutPage.checkoutTitle('Checkout: Complete!');
    });

    it('should add product to cart, display products and checkout with empty first name information', () => {
        productPage.assertProductDisplayed('Sauce Labs Backpack');
        productPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        productPage.assertFirstProductPrice('$29.99');
        productPage.addToCartBTN();
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.checkout();
        checkoutPage.checkoutTitle('Checkout: Your Information');
        checkoutPage.continue();
        checkoutPage.assertYourInfoError('Error: First Name is required')

    });

    it('should open cart, display products and checkout with empty last name information', () => {
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.checkout();
        checkoutPage.checkoutTitle('Checkout: Your Information');
        checkoutPage.fillFirstName('testFirst');
        checkoutPage.continue();
        checkoutPage.assertYourInfoError('Error: Last Name is required')
    });

    it('should open cart, display products and checkout with empty postal code information', () => {
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.checkout();
        checkoutPage.checkoutTitle('Checkout: Your Information');
        checkoutPage.fillFirstName('testFirst');
        checkoutPage.fillLastName('testLast');
        checkoutPage.continue();
        checkoutPage.assertYourInfoError('Error: Postal Code is required')
    });

    it('should open cart, display products, checkout and cancel on overview', () => {
        cartPage.openCart();
        cartPage.assertFirstProductName('Sauce Labs Backpack');
        cartPage.assertFirstProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cartPage.assertFirstProductPrice('$29.99');
        cartPage.checkout();
        checkoutPage.checkoutTitle('Checkout: Your Information');
        checkoutPage.fillFirstName('testFirst');
        checkoutPage.fillLastName('testLast');
        checkoutPage.fillZipPostalCode('12345678');
        checkoutPage.continue();
        checkoutPage.cancel();
        resetAppStatePage.reset();
    });
});