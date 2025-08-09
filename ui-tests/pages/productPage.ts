import {CartPage} from "./cartPage";

export class ProductPage {
    private readonly addToCartButtonSelector: string;
    private readonly addAlertSelector: string;


    constructor() {
        this.addToCartButtonSelector = '#add-to-cart-button';
        this.addAlertSelector = '#attachDisplayAddBaseAlert';
    }

    addToCartAndVerify(): void {
        cy.url().then((initialUrl: string) => {
            cy.get(this.addToCartButtonSelector)
                .first()
                .should('be.visible')
                .click({ force: true });

            cy.url().then((currentUrl: string) => {
                if (initialUrl === currentUrl) {
                    cy.get(this.addAlertSelector)
                        .should('be.visible')
                        .and('contain.text', 'Added to cart');
                } else {
                    cy.get('h1.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold')
                        .should('be.visible')
                        .and('contain.text', 'Added to cart');
                }
            });
        });
    }



    clickColorSwatch(altText: string = "Red, Black, Blue"): void {
        cy.xpath(`//li[contains(@class, "dimension-value-list-item-square-image")][.//img[@alt="${altText}"]]`)
            .click();
    }

    verifyColorText(expectedText: string = "Red, Black, Blue"): void {
        cy.get('tr.a-spacing-small.po-color td.a-span9 > span.a-size-base.po-break-word')
            .should('have.text', expectedText);
    }

    goToCartPage(): CartPage {
        cy.get('#nav-cart').click();
        return new CartPage();
    }
}