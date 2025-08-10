import {cartPage} from '../support/setupTest';
import testData from '../fixtures/testData.json';

const { pencilSharpener, scissors } = testData.products;

describe('Amazon main menu and navigation', () => {

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
