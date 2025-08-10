import { Browser } from '../pages/browser';
import { HomePage } from '../pages/homePage';
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import testData from '../fixtures/testData.json';
import { handleUncaughtExceptions } from './commands';

handleUncaughtExceptions();

export let homePage: HomePage;
export let productPage: ProductPage;
export let cartPage: CartPage;

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
