import { test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test('can login to website',async ({page}) => {

    /**
     * To set a specific browser size:
     * const customViewportSize = { width: 900, height: 600 };
     * const loginPage = new LoginPage(page, customViewportSize);
     */


    const loginPage = new LoginPage(page);
   
    await loginPage.loginToWebsite();
});