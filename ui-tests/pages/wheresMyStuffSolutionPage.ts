import { Browser } from './browser';
import testData from '../fixtures/testData.json';
import { CustomerService } from '../interfaces/interface';

export class WheresMyStuffSolutionPage extends Browser {
    private expectedTitle: string;

    constructor() {
        super();
        const wheresMyStuff: CustomerService = testData.customerService;
        this.expectedTitle = wheresMyStuff.expectedTitle;
    }

    verifyPageTitleVisible(): void {
        cy.contains(this.expectedTitle).should('be.visible');
    }
}