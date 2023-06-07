import { GoogleLocators } from "../locators/google.locators";

const googleLocators = new GoogleLocators();

export class GooglePage {

    private url: string;
    private title: string;

    constructor() {
        this.url = "http://www.google.com/";
        this.title = "Google";
    }

    public visit() {
        cy.visit(this.url);
        cy.wait(1000); // TODO: Change waiting mechanism
        this.assertRendered();
    }

    private assertRendered() {
        cy.title().should('eq', this.title);
        googleLocators.getSearchInput().should('exist');
    }

    public searchForKeyword(keyword: string) {
        googleLocators.getSearchInput().type(`${keyword}{enter}`);
    }

    public assertResultItemHeadersByText(text: string): boolean {
        try {
            googleLocators.getResultItemHeadersByText(text).should('exist');
            return true;
        } catch (error) {
            return false;
        }
    }

}
