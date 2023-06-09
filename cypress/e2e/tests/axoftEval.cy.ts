import { GooglePage } from "../../pages/google.page";
import { TestLoginPage } from "../../pages/testLogin.page";
import { LoginSuccessPage } from "../../pages/loginSuccess.page";
import { OpencartPage } from "../../pages/opencart.page";
import { testData } from "../../fixtures/axoftEval.data";

const googlePage = new GooglePage();
const testLoginPage = new TestLoginPage();
const loginSuccessPage = new LoginSuccessPage();
const opencartPage = new OpencartPage();

const {
    googleData,
    loginData,
    opencartData
} = testData;

describe('Axoft Evaluation - Section 2', () => {

    it('Exercise 6: Google Test', () => {
        googlePage.visit();
        googlePage.searchForKeyword(googleData.googleKeyword);
        cy.wait(1000); // TODO: Change waiting mechanism
        expect(googlePage.assertResultItemHeadersByText(googleData.googleKeyword)).to.equal(true);
    });

    it('Exercise 7: Login Test', () => {
        testLoginPage.visit();
        testLoginPage.userLogin(loginData.testLoginUsername, loginData.testLoginPassword);
        cy.wait(1000); // TODO: Change waiting mechanism
        loginSuccessPage.assertRendered();
        expect(loginSuccessPage.assertLoginSuccessMsgTitle(loginData.loginMsgTitle)).to.equal(true);
    });

    it('Exercise 8: Dropdown List Test', () => {
        opencartPage.visit();
        opencartPage.goToSearchCriteria();
        opencartPage.selectAndAssertCategoryFromDropdown(opencartData.category.text, opencartData.category.val);
    });

    it('Exercise 9: Form Test', () => {
        opencartPage.goToRegisterView(opencartData.registerPath);
        cy.wait(1000); // TODO: Change waiting mechanism
        opencartPage.completeRegisterFormAndSubmit(opencartData.registerPositiveParams);
    });

    afterEach('Wait on each scenario', () =>{
        cy.wait(2000);
    });

});
