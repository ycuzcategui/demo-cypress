import { OpencartLocators } from "../locators/opencart.locators";

const opencartLocators = new OpencartLocators();

export class OpencartPage {

    private url: string;
    private title: string;
    private tenSecondsTimeout: any;

    constructor() {
        this.url = "https://opencart.abstracta.us/";
        this.title = "Your Store";
        this.tenSecondsTimeout = {timeout: 10000};
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

    public goToRegisterView(path: string) {
        cy.visit(`${this.url}${path}`);
        this.assertRenderedRegisterView();
    }

    private assertRenderedRegisterView() {
        opencartLocators.getRegisterAccountTitle().should('exist');
        opencartLocators.getRegisterForm().should('exist');
    }

    private fillInTheFirstName(firstName: string) {
        opencartLocators.getFirstNameInput().type(firstName);
    }

    private fillInTheLastName(lastName: string) {
        opencartLocators.getLastNameInput().type(lastName);
    }

    private fillInTheEmail(email: string) {
        opencartLocators.getEmailInput().type(email);
    }

    private fillInTheTelephone(telephone: string) {
        opencartLocators.getTelephoneInput().type(telephone);
    }

    private fillInThePassword(password: string) {
        opencartLocators.getPasswordInput().type(password);
    }

    private fillInTheConfirmPassword(password: string) {
        opencartLocators.getConfirmPasswordInput().type(password);
    }

    private selectAgreeCheckbox() {
        opencartLocators.getAgreeCheckbox().check("1");
    }

    private clickOnContinueButton() {
        opencartLocators.getContinueButton().click(this.tenSecondsTimeout);
    }

    public completeRegisterFormAndSubmit(registerParams: any) {
        this.fillInTheFirstName(registerParams.firsName);
        this.fillInTheLastName(registerParams.lastName);
        this.fillInTheEmail(registerParams.email);
        this.fillInTheTelephone(registerParams.telephone);
        this.fillInThePassword(registerParams.password);
        this.fillInTheConfirmPassword(registerParams.password);
        this.selectAgreeCheckbox();
        cy.wait(2000); // TODO: Change waiting mechanism
        this.clickOnContinueButton();
    }

    public assertFormErrorMessageByText(message: string): boolean {
        try {
            opencartLocators.getFormErrorMessageByText(message).should('exist');
            return true;
        } catch (error) {
            return false;
        }
    }

}
