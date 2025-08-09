import { Browser } from '../pages/browser';
import { HomePage } from '../pages/homePage';
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import testData from '../fixtures/testData.json';
import { handleUncaughtExceptions } from '../support/commands';

handleUncaughtExceptions();


describe('Amazon main menu and navigation', () => {
    let homePage: HomePage;
    let productPage: ProductPage;
    let cartPage: CartPage;

    const { pencilSharpener, scissors } = testData.products;

    beforeEach(() => {
        const browser = new Browser();
        homePage = browser.gotoAmazon();
        homePage.loadHomePage();

        homePage.searchAmazon(pencilSharpener.searchQuery);

        productPage = homePage.clickProductByText(pencilSharpener.productText);
        productPage.addToCartAndVerify();

        browser.goTo(scissors.url);
        productPage.clickColorSwatch(scissors.colorText);
        productPage.verifyColorText(scissors.colorText);

        browser.scrollToTop();
        productPage.addToCartAndVerify();

        cartPage = productPage.goToCartPage();
    });

    it('ensures Cart contains the selected items by text', () => {
        cartPage.verifyItemsInCartByItemText(
            pencilSharpener.searchQuery,
            scissors.productText
        );
    });

    it('ensures Cart still contains the selected items by text', () => {
        cartPage.verifyItemsInCartByItemText(
            pencilSharpener.searchQuery,
            scissors.productText
        );
    });
});
