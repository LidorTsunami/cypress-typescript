export class CartPage {
    private readonly cartLocator: string;

    constructor() {
        this.cartLocator = '#activeCartViewForm';
    }

    verifyItemsInCartByItemText(...texts: string[]): void {
        cy.get(this.cartLocator)
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
