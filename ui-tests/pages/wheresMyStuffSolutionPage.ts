export class WheresMyStuffSolutionPage {
    constructor() {
    }

    verifyPageTitleVisible(): void {
        cy.contains("Where's My Stuff").should('be.visible');
    }
}
