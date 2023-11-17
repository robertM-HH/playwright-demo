import { test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
 
 
 test.beforeEach('Open start URL', async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('https://demoqa.com/');
    });

    test('my test', async ({ page }) => {
    expect(page.url()).toBe('https://demoqa.com/');
    });