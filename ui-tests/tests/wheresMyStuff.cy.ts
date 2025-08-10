import { Browser } from '../pages/browser';
import { HomePage } from '../pages/homePage';
import { CustomerServicePage } from "../pages/customerServicePage";
import { WheresMyStuffSolutionPage } from "../pages/wheresMyStuffSolutionPage";
import testData from '../fixtures/testData.json';
import {CustomerService} from "../interfaces/interface";

describe('Navigate to wheres my stuff solution page', () => {
    let homePage: HomePage;
    homePage = new HomePage();
    let wheresMyStuffSolutionPage: WheresMyStuffSolutionPage;

    const wheresMyStuff : CustomerService = testData.customerService;

    before(() => {
        const browser = new Browser();
        browser.gotoAmazon();
        homePage.loadHomePage();
    });

    it('should search for wheres my stuff', () => {
        const customerPage: CustomerServicePage = homePage.goToCustomerService();
        customerPage.searchHelp(wheresMyStuff.searchQuery);
        wheresMyStuffSolutionPage = customerPage.clickSearchResultLinkByIndex(0);

        wheresMyStuff.expectedUrlIncludes.forEach(part =>
            cy.url().should('include', part)
        );

        cy.contains(wheresMyStuff.expectedTitle).should('be.visible');
    });
});
