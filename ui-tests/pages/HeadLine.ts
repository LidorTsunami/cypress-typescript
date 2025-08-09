import {CartPage} from "./cartPage";

export class HeadLine {
    protected readonly searchInputSelector: string;
    protected readonly cartButtonSelector: string

    constructor() {
        this.searchInputSelector = '#twotabsearchtextbox';
        this.cartButtonSelector = '#nav-cart';
    }

    search(query: string): void {
        cy.get(this.searchInputSelector).type(`${query}{enter}`);
    }



    goToCartPage(): CartPage {
        cy.get(this.cartButtonSelector).should('be.visible').click();
        return new CartPage();
    }
}
