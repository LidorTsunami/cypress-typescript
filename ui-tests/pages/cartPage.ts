export class CartPage {
    constructor() {}

    verifyItemsInCartByItemText(...texts: string[]): void {
        const locator = '#activeCartViewForm';

        cy.get(locator)
            .should('be.visible')
            .invoke('text')
            .then((elementText: string) => {
                texts.forEach(expectedText => {
                    cy.log(`Verifying presence of: ${expectedText}`);
                    expect(elementText).to.include(expectedText);
                });
            });
    }
}
