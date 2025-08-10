export class CartPage {
    private readonly cartLocator: string;
    private readonly itemXPathTemplate: string;

    constructor() {
        this.cartLocator = '#activeCartViewForm';
        this.itemXPathTemplate = `//*[@id="sc-active-cart"]//span[
            (contains(@class, "a-truncate-full") or contains(@class, "a-offscreen"))
            and contains(., "{WORD}")
        ]`;
    }

    verifyItemsInCartByItemText(...texts: string[]): void {
        texts.forEach(expectedText => {
            const firstWord = expectedText.split(' ')[0];
            const xpath = this.itemXPathTemplate.replace('{WORD}', firstWord);

            cy.log(`Verifying item in cart (partial match): ${expectedText}`);
            cy.xpath(xpath, { timeout: 10000 }).should('exist');
        });
    }
}
