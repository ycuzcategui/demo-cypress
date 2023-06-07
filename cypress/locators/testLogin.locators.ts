export class TestLoginLocators {

    private tenSecondsTimeout: any;

    constructor() {
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public getUsernameInput() {
        return cy.get('input[id="username"]', this.tenSecondsTimeout);
    }

    public getPasswordInput() {
        return cy.get('input[id="password"]', this.tenSecondsTimeout);
    }

    public getSubmitButton() {
        return cy.get('button[id="submit"]', this.tenSecondsTimeout);
    }

}
