import {test, expect} from '../fixtures/hooks-fixtures'
import loginModuleData from '../data/login-module-data.json'


test.use({storageState:{   // using this playwright will not use saved authentication.
    cookies:[],
    origins:[]
}})

test('[Login] Verify that the user cannot log in with an invalid password',
    {tag:['@UI','@UAT'],
        annotation:{
            type:'Test Case Link',
            description:'Paste Test case link login module 1' 
        }},
    async({gotoUrl,loginPage, commonUtils})=>
{

const username = commonUtils.decryptData(process.env.USER_NAME!);  
await loginPage.loginOrangeHrm(username,loginModuleData.wrong_password);
await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
await expect(loginPage.userNameInput).toBeVisible();
})

test('[Login] Verify that the user cannot log in with an invalid username',
    {tag:['@UI','@UAT'],
        annotation:{
            type:'Test Case Link',
            description:'Paste Test case link login module 2' 
        }},
    async({gotoUrl,loginPage, commonUtils})=>
{
const password = commonUtils.decryptData(process.env.PASSWORD!);  // ! we will not receive undefined from environment variable
await loginPage.loginOrangeHrm(loginModuleData.wrong_username,password);
await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
await expect(loginPage.userNameInput).toBeVisible();
})

test('[Login] Verify that the User cannot log in with both invalid username and password',
    {tag:['@UI','@UAT','@Dev'],
        annotation:{
            type:'Test Case Link',
            description:'Paste Test case link login module 3' 
        }},
    async({gotoUrl,loginPage, commonUtils})=>
{
 // ! we will not receive undefined from environment variable
await loginPage.loginOrangeHrm(loginModuleData.wrong_username,loginModuleData.wrong_password);
await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
await expect(loginPage.userNameInput).toBeVisible();
})