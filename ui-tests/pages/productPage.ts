import { CartPage } from "./cartPage";
import { Browser } from "./browser";
import testData from '../fixtures/testData.json';

export class ProductPage extends Browser {
    private readonly addToCartButtonSelector: string;
    private readonly addAlertSelector: string;
    private readonly addToCartConfirmationSelector: string;
    private readonly colorSwatchXpathTemplate: string;
    private readonly colorTextSelector: string;
    private readonly cartIconSelector: string;
    private readonly defaultColorText: string;

    constructor() {
        super();
        this.addToCartButtonSelector = '#add-to-cart-button';
        this.addAlertSelector = '#attachDisplayAddBaseAlert';
        this.addToCartConfirmationSelector = 'h1.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold';
        this.colorSwatchXpathTemplate = '//li[contains(@class, "dimension-value-list-item-square-image")][.//img[@alt="{{ALT_TEXT}}"]]';
        this.colorTextSelector = 'tr.a-spacing-small.po-color td.a-span9 > span.a-size-base.po-break-word';
        this.cartIconSelector = '#nav-cart';
        this.defaultColorText = testData.products.scissors.colorText;
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
                    cy.get(this.addToCartConfirmationSelector)
                        .should('be.visible')
                        .and('contain.text', 'Added to cart');
                }
            });
        });
    }

    clickColorSwatch(altText: string = this.defaultColorText): void {
        const xpath: string = this.colorSwatchXpathTemplate.replace('{{ALT_TEXT}}', altText);
        cy.xpath(xpath).click();
    }

    verifyColorText(expectedText: string = this.defaultColorText): void {
        cy.get(this.colorTextSelector).should('have.text', expectedText);
    }

    goToCartPage(): CartPage {
        cy.get(this.cartIconSelector).click();
        return new CartPage();
    }
}
