import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixtures';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';

/**test.beforeEach('Before Each Hook',async({loginPage, commonUtils})=>
{
  await loginPage.gotoOrangeHrm();

})


test.afterEach('After Each Hook',async({userPage})=>
{
    await userPage.logOut();
})
**/

test('Temp test', async ({ page , gotoUrl}) => {
// const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
// const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
//await loginPage.loginOrangeHrm(decryptedUserName,decryptedPassword);
 console.log(await page.title());
})

test("Temp test 2",async({page, gotoUrl})=>   // yaha humne logout fixture provide nhai kiya hai to iske liye vo nhai chalega.
{
   await expect(page).toHaveTitle('OrangeHRM');
})


test("Temp test 3",async({page, gotoUrl, logout})=>
{
   await expect(page).toHaveTitle('OrangeHRM');
})