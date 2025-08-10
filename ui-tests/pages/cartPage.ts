import {Browser} from "./browser";

export class CartPage extends Browser{
    private readonly cartLocator: string;
    private readonly itemXPathTemplate: string;

    constructor() {
        super()
        this.cartLocator = '#activeCartViewForm';
        this.itemXPathTemplate = `//*[@id="sc-active-cart"]//span[(contains(@class, "a-truncate-full") or contains(@class, "a-offscreen"))and contains(., "{WORD}")]`;
    }

    verifyItemsInCartByItemText(...texts: string[]): void {
        texts.forEach((expectedText: string) => {
            const firstWord: string = expectedText.split(' ')[0];
            const xpath: string = this.itemXPathTemplate.replace('{WORD}', firstWord);

            cy.log(`Verifying item in cart (partial match): ${expectedText}`);
            cy.xpath(xpath, { timeout: 10000 }).should('exist');
        });
    }

}
