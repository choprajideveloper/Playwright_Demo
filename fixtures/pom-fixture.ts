import {test as baseTest} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
import { DashBoardPage } from "../pages/DashBoardPage";
import {UserPage} from "../pages/UserPage";
import { LeftNavigationPage } from "../pages/LeftNavigationPage";
import {PimPage} from '../pages/PimPage';



type PomFixturesType = {
loginPage: LoginPage;
dashboardPage: DashBoardPage;
userPage: UserPage;
leftNavigationPage: LeftNavigationPage;
pimPage: PimPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async({page},use)=>{
       await use(new LoginPage(page));
    },
    dashboardPage: async({page},use)=>{
        await use(new DashBoardPage(page));
    },

    userPage: async({page},use)=>{
        await use(new UserPage(page));
    },

    leftNavigationPage: async({page},use)=>
    {
        await use(new LeftNavigationPage(page));
    },

    pimPage: async({page},use)=>
    {
        await use(new PimPage(page));
    }
})