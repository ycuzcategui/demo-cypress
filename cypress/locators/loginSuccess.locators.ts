export class LoginSuccessLocators {

    private tenSecondsTimeout: any;

    constructor() {
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public getLoginSuccessMsgTitle(text: string) {
        return cy.get('h1[class="post-title"]', this.tenSecondsTimeout).contains(`${text}`);
    }

}