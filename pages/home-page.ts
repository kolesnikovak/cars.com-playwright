import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

    imagineTitle : Locator
    menuButton : Locator
    searchBar : Locator
    orSearchByTitle : Locator
    

    constructor(page: Page) {
        this.imagineTitle = page.locator('h1[class="hero-title "] span')
        this.menuButton = page.locator('svg[class="menu-icon"]')
        this.searchBar = page.locator('input[name="one_hitter"]')
        this.orSearchByTitle = page.locator('spark-stack[class="search-bar-horizontal-or"] strong')
    }

    async validateTitleMessage(expectedTitleMessage: string): Promise<void> {
        await expect(this.imagineTitle).toHaveText(expectedTitleMessage)
    }

    async clickMenuButton(): Promise<void> {
        await this.menuButton.click()
    }

    async searchBarValidation(searchBarText: string): Promise<void> {
        await this.searchBar.fill(searchBarText)
    }

     async validateOrSearchByTitle(expectedTitleMessage: string): Promise<void> {
        await expect(this.orSearchByTitle).toHaveText(expectedTitleMessage)
    }

}