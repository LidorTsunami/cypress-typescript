import {WheresMyStuffSolutionPage} from "./wheresMyStuffSolutionPage";
import {Browser} from "./browser";

export class CustomerServicePage extends Browser{
    private readonly searchInputSelector: string;
    private readonly searchResultLinkSelector: string;

    constructor() {
        super();
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
