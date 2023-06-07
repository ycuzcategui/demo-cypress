import { GooglePage } from "../../pages/google.page";
import { TestLoginPage } from "../../pages/testLogin.page";
import { LoginSuccessPage } from "../../pages/loginSuccess.page";
import { testData } from "../../fixtures/axoftEval.data";

const googlePage = new GooglePage();
const testLoginPage = new TestLoginPage();
const loginSuccessPage = new LoginSuccessPage();
const {
    googleData,
    loginData
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

    afterEach('Wait on each scenario', () =>{
        cy.wait(2000);
    });

});
