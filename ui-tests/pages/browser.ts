import { HomePage } from './homePage';

export class Browser {
    goTo(url: string): void {
        cy.visit(url)
    }

    gotoAmazon(): HomePage {
        this.goTo('/');
        return new HomePage();
    }

    reload(): void {
        cy.reload()
    }

    scrollToTop(): void {
        cy.window().scrollTo(0, 0);
    }
}
