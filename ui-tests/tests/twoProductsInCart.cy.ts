import {cartPage} from '../support/setupTest';
import testData from '../fixtures/testData.json';
import {handleUncaughtExceptions} from "../support/commands";

const { pencilSharpener, scissors } = testData.products;

handleUncaughtExceptions();

describe('Amazon functionalities with 2 product in cart', () => {

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
