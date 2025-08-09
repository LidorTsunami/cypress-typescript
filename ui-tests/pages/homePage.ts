import {CustomerServicePage} from "./customerServicePage";
import 'cypress-xpath';
import {ProductPage} from "./productPage";

export class HomePage {
    private readonly searchInputSelector: string;
    private maxRetries: number = 5;
    private retries :number = 0;
    private readonly popupDismissButton: string;
    private locationModalTrigger: string;
    private countryDropdownButton: string;
    private israelOption: string;
    private doneButton: string;
    private readonly locationPopoverLinkId: string;
    private readonly menuItems : string

    constructor() {
        this.menuItems = '#nav-xshop'
        this.popupDismissButton =
            'input.a-button-input[data-action-type="DISMISS"][data-action-params*="AIS_INGRESS"]';
        this.searchInputSelector = '#twotabsearchtextbox';
        this.locationModalTrigger = '#glow-ingress-block';
        this.countryDropdownButton =
            'span.a-button-text.a-declarative[role="radiogroup"][data-action="a-dropdown-button"]';
        this.israelOption = 'a.a-dropdown-link';
        this.doneButton = 'button.a-button-text';
        this.locationPopoverLinkId = 'nav-global-location-popover-link';
    }

    dismissPopUp() {
        cy.get('body').then($body => {
            if ($body.find(this.popupDismissButton).length && Cypress.dom.isVisible($body.find(this.popupDismissButton))) {
                cy.get(this.popupDismissButton).click({ force: true });
            } else {
                cy.log('Popup dismiss button not visible, skipping click.');
            }
        });
    }


    searchAmazon(query: string) {
        cy.get(this.searchInputSelector).type(`${query}{enter}`);
    }

    clickProductByText(productText: string): ProductPage {
        cy.xpath(`//div[@class="a-section a-spacing-base"][.//h2[@aria-label="${productText}"]]`)
            .click();
        return new ProductPage();
    }


    settingLocationIsrael() {
        cy.get(this.locationModalTrigger).click();

        cy.wait(2000);

        cy.get(this.countryDropdownButton).should('be.visible').click();
        cy.get('body').type('i');

        cy.contains(this.israelOption, 'Israel')
            .should('be.visible')
            .click({ force: true });

        cy.contains(this.doneButton, 'Done')
            .should('be.visible')
            .click();
    }

    ensureLocationPopoverLinkExists() {
        const check: () => void = () => {
            cy.document().then(doc => {
                const elem: HTMLElement | null = doc.getElementById(this.locationPopoverLinkId);
                if (elem && Cypress.dom.isVisible(elem)) {
                    cy.log('Location popover link found');
                    return;
                } else if (this.retries < this.maxRetries) {
                    this.retries++;
                    cy.log(`Popover link not found, reloading page... Retry #${this.retries}`);
                    cy.reload();
                    cy.wait(1000).then(check);
                } else {
                    throw new Error(`${this.locationPopoverLinkId} not found after multiple retries`);
                }
            });
        };

        check();
    }

    loadHomePage() {
        this.ensureLocationPopoverLinkExists();
        cy.get(this.locationModalTrigger).then($el => {
            if (!$el.text().includes('Israel')) {
                this.settingLocationIsrael();
            } else {
                cy.log('Location already set to Israel. Skipping location change.');
            }
        });
        this.dismissPopUp();
    }

    goToCustomerService(): CustomerServicePage {
        cy.get(this.menuItems).contains('a', 'Customer Service').click({ force: true });
        return new CustomerServicePage();
    }
}
