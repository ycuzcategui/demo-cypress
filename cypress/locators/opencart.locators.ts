export class OpencartLocators {

    private tenSecondsTimeout: any;

    constructor() {
        this.tenSecondsTimeout = {timeout: 10000};
    }

    public getHomeContainerHeader() {
        return cy.get('a', this.tenSecondsTimeout).contains('Your Store');
    }

    public getHomeSearchInput() {
        return cy.get('div[id="search"]', this.tenSecondsTimeout);
    }

    public getHomeSearchButton() {
        return this.getHomeSearchInput().find('button[type="button"]', this.tenSecondsTimeout);
    }

    public getSearchCriteriaTitle() {
        return cy.get('h1', this.tenSecondsTimeout).contains('Search');
    }

    public getSearchKeywordsInput() {
        return cy.get('input#input-search', this.tenSecondsTimeout);
    }

    public getCategoriesDropdownList() {
        return cy.get('select[name="category_id"]', this.tenSecondsTimeout);
    }

    public getRegisterAccountTitle() {
        return cy.get('h1', this.tenSecondsTimeout).contains('Account');
    }

    public getRegisterForm() {
        return cy.get('form[class="form-horizontal"]', this.tenSecondsTimeout);
    }

    public getFirstNameInput() {
        return cy.get('input#input-firstname', this.tenSecondsTimeout);
    }

    public getLastNameInput() {
        return cy.get('input#input-lastname', this.tenSecondsTimeout);
    }

    public getEmailInput() {
        return cy.get('input#input-email', this.tenSecondsTimeout);
    }
    
    public getTelephoneInput() {
        return cy.get('input#input-telephone', this.tenSecondsTimeout);
    }

    public getPasswordInput() {
        return cy.get('input#input-password', this.tenSecondsTimeout);
    }

    public getConfirmPasswordInput() {
        return cy.get('input#input-confirm', this.tenSecondsTimeout);
    }

    public getAgreeCheckbox() {
        return cy.get('input[type="checkbox"][name="agree"]', this.tenSecondsTimeout);
    }

    public getContinueButton() {
        return cy.get('input[type="submit"][value="Continue"]', this.tenSecondsTimeout);
    }

}
