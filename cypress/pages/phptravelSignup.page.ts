import { PhptravelSignupLocators } from "../locators/phptravelSignup.locators";

const phptravelSignupLocators = new PhptravelSignupLocators();

export class PhptravelSignupPage {

    private url: string;
    private title: string;
    private tenSecondsTimeout: any;

    constructor() {
        this.url = "https://phptravels.net/signup";
        this.title = "Signup";
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public visit() {
        cy.visit(this.url);
        cy.wait(1000); // TODO: Change waiting mechanism
        this.assertRendered();
    }

    private assertRendered() {
        cy.title().should('eq', this.title);
        phptravelSignupLocators.getSignupStrongHeader().should('exist');
        phptravelSignupLocators.getSignupForm().should('exist');
    }

    private fillInTheFirstName(firstName: string) {
        const elemFirstNameInput = phptravelSignupLocators.getFirstNameInput();
        elemFirstNameInput.scrollIntoView().clear({force: true});
        elemFirstNameInput.scrollIntoView().type(firstName, {force: true});
    }

    private fillInTheLastName(lastName: string) {
        phptravelSignupLocators.getLastNameInput().scrollIntoView().clear({force: true});
        phptravelSignupLocators.getLastNameInput().scrollIntoView().type(lastName, {force: true});
    }

    private selectCountryFromDropdown(country: string) {
        phptravelSignupLocators.getSelectCountryButton().scrollIntoView().click({force: true, ...this.tenSecondsTimeout});
        phptravelSignupLocators.getSearchCountryInput().scrollIntoView().type(`${country}{enter}`, {force: true});
    }

    private fillInThePhone(telephone: string) {
        phptravelSignupLocators.getPhoneInput().scrollIntoView().clear({force: true});
        phptravelSignupLocators.getPhoneInput().scrollIntoView().type(telephone, {force: true});
    }

    private fillInTheEmailAddress(email: string) {
        phptravelSignupLocators.getEmailAddressInput().scrollIntoView().clear({force: true});
        phptravelSignupLocators.getEmailAddressInput().scrollIntoView().type(email, {force: true});
    }

    private fillInThePassword(password: string) {
        phptravelSignupLocators.getPasswordInput().scrollIntoView().clear({force: true});
        phptravelSignupLocators.getPasswordInput().scrollIntoView().type(password, {force: true});
    }

    private selectRecaptchaCheckbox() {
        cy.wait(500);
        cy.get('.g-recaptcha *> iframe')
            .then($iframe => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body)
                    .find('.recaptcha-checkbox-border')
                    .should('be.visible')
                    .click();
            });
    }

    private clickOnSignupButton() {
        phptravelSignupLocators.getSignupSubmitButton().scrollIntoView().click({force: true, ...this.tenSecondsTimeout});
    }

    public completeSignupFormAndSubmit(signupParams: any) {
        this.fillInTheFirstName(signupParams.firsName);
        this.fillInTheLastName(signupParams.lastName);
        this.selectCountryFromDropdown(signupParams.country);
        this.fillInThePhone(signupParams.phone);
        this.fillInTheEmailAddress(signupParams.email);
        this.fillInThePassword(signupParams.password);
        this.selectRecaptchaCheckbox();
        cy.wait(1000); // TODO: Change waiting mechanism
        this.clickOnSignupButton();
    }

}
