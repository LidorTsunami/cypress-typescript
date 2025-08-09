import {WheresMyStuffSolutionPage} from "./wheresMyStuffSolutionPage";

export class CustomerServicePage {
    private readonly searchInputSelector: string;
    private readonly searchResultLinkSelector: string;

    constructor() {
        this.searchInputSelector = '#hubHelpSearchInput';
        this.searchResultLinkSelector = 'a.a-link-normal[data-csa-c-content-id="cshelp.searchResult"]';
    }

    searchHelp(text: string) {
        cy.get(this.searchInputSelector).type(`${text}{enter}`);
    }

    clickSearchResultLinkByIndex(index: number): WheresMyStuffSolutionPage {
        cy.get(this.searchResultLinkSelector)
            .eq(index)
            .click();

        return new WheresMyStuffSolutionPage();
    }
}
