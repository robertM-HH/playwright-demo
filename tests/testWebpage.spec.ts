import { test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.beforeEach('Open start URL', async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    const loginPage = new LoginPage(page);
    await loginPage.loginToWebsite();
    });


test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
    
    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    });
 
      

test('can login to website @fast',async ({page}) => {
    const loginpage = new LoginPage(page);
    /**
     * To set a specific browser size:
     * const customViewportSize = { width: 900, height: 600 };
     * const loginPage = new LoginPage(page, customViewportSize);
     */

})