import { Browser } from '../pages/browser';
import { HomePage } from '../pages/homePage';
import { CustomerServicePage } from "../pages/customerServicePage";
import { WheresMyStuffSolutionPage } from "../pages/wheresMyStuffSolutionPage";
import testData from '../fixtures/testData.json';

describe('Navigate to wheres my stuff solution page', () => {
    let homePage: HomePage;
    let wheresMyStuffSolutionPage: WheresMyStuffSolutionPage;

    const wheresMyStuff : TestData['customerService'] = testData.customerService;

    before(() => {
        const browser = new Browser();
        homePage = browser.gotoAmazon();
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
