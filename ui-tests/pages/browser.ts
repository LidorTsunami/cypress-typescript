import { HomePage } from './homePage';

export class Browser {
    goTo(url: string): void {
        cy.visit(url)
    }

    gotoAmazon()  {
        this.goTo('/');

    }

    reload(): void {
        cy.reload()
    }

    scrollToTop(): void {
        cy.window().scrollTo(0, 0);
    }
}
