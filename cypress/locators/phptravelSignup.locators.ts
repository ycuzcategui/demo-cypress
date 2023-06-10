export class PhptravelSignupLocators {

    private tenSecondsTimeout: any;

    constructor() {
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public getSignupStrongHeader() {
        return cy.get('h3', this.tenSecondsTimeout).find('strong', this.tenSecondsTimeout).contains('Signup');
    }

    public getSignupForm() {
        return cy.get('form[id="signup"]', this.tenSecondsTimeout);
    }

    public getFirstNameInput() {
        return cy.get('input#firstname', this.tenSecondsTimeout);
    }

    public getLastNameInput() {
        return cy.get('input#last_name', this.tenSecondsTimeout);
    }

    public getSelectCountryButton() {
        return cy.get('button[role="combobox"][title="Select Country"]', this.tenSecondsTimeout);
    }

    public getSearchCountryInput() {
        return cy.get('input[type="search"][role="combobox"]', this.tenSecondsTimeout);
    }

    public getPhoneInput() {
        return cy.get('input#phone', this.tenSecondsTimeout);
    }

    public getEmailAddressInput() {
        return cy.get('input#email', this.tenSecondsTimeout);
    }

    public getPasswordInput() {
        return cy.get('input#password', this.tenSecondsTimeout);
    }

    // public getRecaptchaCheckboxSpinner() {
    //     return cy.get('div[class="recaptcha-checkbox-spinner"][role="presentation"]', this.tenSecondsTimeout);
    // }

    public getSignupSubmitButton() {
        return cy.get('input#submitBTN', this.tenSecondsTimeout);
    }

}
