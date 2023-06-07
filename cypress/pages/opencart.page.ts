import { OpencartLocators } from "../locators/opencart.locators";

const opencartLocators = new OpencartLocators();

export class OpencartPage {

    private url: string;
    private title: string;

    constructor() {
        this.url = "https://opencart.abstracta.us/";
        this.title = "Your Store";
    }

    public visit() {
        cy.visit(this.url);
        cy.wait(1000); // TODO: Change waiting mechanism
        this.assertRendered();
    }

    private assertRendered() {
        cy.title().should('eq', this.title);
        opencartLocators.getHomeContainerHeader().should('exist');
        opencartLocators.getHomeSearchInput().should('exist');
    }

    public goToSearchCriteria() {
        opencartLocators.getHomeSearchButton().click();
        this.assertRenderedSearchView();
    }

    private assertRenderedSearchView() {
        opencartLocators.getSearchCriteriaTitle().should('exist');
        opencartLocators.getSearchKeywordsInput().should('exist');
        opencartLocators.getCategoriesDropdownList().should('exist');
    }

    public selectAndAssertCategoryFromDropdown(categoryText: string, categoryVal: string) {
        opencartLocators.getCategoriesDropdownList().select(categoryText).invoke("val").should("eq", categoryVal);
    }

}
