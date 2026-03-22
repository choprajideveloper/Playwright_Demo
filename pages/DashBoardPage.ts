import {Page,Locator} from '@playwright/test'

export class DashBoardPage
{
    readonly page:Page;
    readonly dashboardTitleText : Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.dashboardTitleText = page.getByRole('heading',{name:'Dashboard'});
        console.log("this is for dashboard page");
    }
}