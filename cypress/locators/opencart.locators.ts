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

}
