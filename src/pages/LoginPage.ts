import { Locator, Page, ViewportSize, expect } from "@playwright/test";

class LoginPage{
    private page: Page
    private url: string;
    private testOne: Locator;
    private defaultViewportSize: ViewportSize;

    constructor(page: Page, viewportSize?: ViewportSize) {
        this.page = page;
        this.testOne = page.locator('asd');
        this.url = 'https://demoqa.com/';
        // define the browser size.
        this.defaultViewportSize = { width: 2100, height: 1400 };

        // Set viewport size if provided, otherwise use default
        this.page.setViewportSize(viewportSize || this.defaultViewportSize);
        }

async loginToWebsite() {
    await this.page.goto(this.url);
    await expect(this.page).toHaveTitle('DEMOQA');
    }
}

export {LoginPage};