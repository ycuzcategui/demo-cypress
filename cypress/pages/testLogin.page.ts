import { TestLoginLocators } from "../locators/testLogin.locators";

const testLoginLocators = new TestLoginLocators();

export class TestLoginPage {

    private url: string;
    private title: string;
    private tenSecondsTimeout: any;

    constructor() {
        this.url = "https://practicetestautomation.com/practice-test-login/";
        this.title = "Test Login | Practice Test Automation";
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public visit() {
        cy.visit(this.url);
        cy.wait(1000); // TODO: Change waiting mechanism
        this.assertRendered();
    }

    private assertRendered() {
        cy.title().should("eq", this.title);
        testLoginLocators.getUsernameInput().should('exist');
        testLoginLocators.getPasswordInput().should('exist');
        testLoginLocators.getSubmitButton().should('exist');
    }

    private fillInTheUsername(username: string) {
        testLoginLocators.getUsernameInput().type(username);
    }

    private fillInThePassword(password: string) {
        testLoginLocators.getPasswordInput().type(password);
    }

    private clickOnSubmitButton() {
        testLoginLocators.getSubmitButton().click(this.tenSecondsTimeout);
    }

    public userLogin(username: string, password: string) {
        this.fillInTheUsername(username);
        this.fillInThePassword(password);
        this.clickOnSubmitButton();
    }

}