import { LoginSuccessLocators } from "../locators/loginSuccess.locators";

const loginSuccessLocators = new LoginSuccessLocators();

export class LoginSuccessPage {

    private url: string;
    private title: string;

    constructor() {
        this.url = "https://practicetestautomation.com/logged-in-successfully/";
        this.title = "Logged In Successfully | Practice Test Automation";
    }

    public assertRendered() {
        cy.url().should('eq', this.url);
        cy.title().should('eq', this.title);
    }

    public assertLoginSuccessMsgTitle(text: string): boolean {
        try {
            loginSuccessLocators.getLoginSuccessMsgTitle(text).should('exist');
            return true;
        } catch (error) {
            return false;
        }
    }

}
