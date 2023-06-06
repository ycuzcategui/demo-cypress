export class GoogleLocators {

    private tenSecondsTimeout: any;

    constructor() {
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public getSearchInput() {
        return cy.get('textarea[type="search"]', this.tenSecondsTimeout);
    }

    public getResultItemHeadersByText(text: string) {
        return cy.get('div[role="heading"]', this.tenSecondsTimeout).find('span', this.tenSecondsTimeout).contains(`${text}`).first();
    }

}
