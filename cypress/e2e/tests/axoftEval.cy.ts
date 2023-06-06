import { GooglePage } from "../../pages/google.page";
import { testData } from "../../fixtures/axoftEval.data";

const googlePage = new GooglePage();

describe('Axoft Evaluation', () => {

    it('Section 2 - Exercise 6: Test Google', () => {
        googlePage.visit();
        googlePage.searchForKeyword(testData.googleKeyword);
        cy.wait(1000); // TODO: Change waiting mechanism
        expect(googlePage.assertResultItemHeadersByText(testData.googleKeyword)).to.equal(true);
    });

});
