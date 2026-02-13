import {test as baseTest} from './common-fixtures';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';


type HooksFixtureType ={

gotoUrl: void;
logout : void;

}

export const test = baseTest.extend<HooksFixtureType>({
    gotoUrl: async ({ loginPage }, use) =>{
        await loginPage.gotoOrangeHrm(); // Runs Before Test
        await use();
    },

        logout:async({userPage},use)=>
        {
            await use(); // runs test
            await userPage.logOut(); // runs after test
        }
})

export {expect} from '@playwright/test'