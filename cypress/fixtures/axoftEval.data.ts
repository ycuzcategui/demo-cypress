export const testData = {
    googleData: {
        googleKeyword: "Axoft Argentina"
    },
    loginData: {
        testLoginUsername: "student",
        testLoginPassword: "Password123",
        loginMsgTitle: "Logged In Successfully"
    },
    opencartData: {
        category: {
            val: "20",
            text: "Desktops"
        },
        registerPath: "index.php?route=account/register",
        registerNegativeParams: {
            firsName: "Jhon",
            lastName: "Doe",
            email: `axoft${Date.now()}@gmail.com`,
            telephone: "1",
            password: "a"
        },
        telephoneErrorMessage: "Telephone must be between 3 and 32 characters!",
        passwordErrorMessage: "Password must be between 4 and 20 characters!"
    },
    phptravelSignupData: {
        signupParams: {
            firsName: "Yuroska",
            lastName: "Uzcategui",
            country: "Argentina",
            phone: "5555555",
            email: `axoft${Date.now()}@gmail.com`,
            password: "axoft1234"
        }
    }
}
