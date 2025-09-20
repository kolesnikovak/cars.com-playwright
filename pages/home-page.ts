import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

    imagineTitle : Locator
    menuButton : Locator
    searchBar : Locator
    orSearchByTitle : Locator
    makeFilterSelect : Locator
    modelFilterselect : Locator
    distanceFilterSelect : Locator
    zipCodeFilter : Locator
    showResultsButton : Locator
    

    constructor(page: Page) {
        this.imagineTitle = page.locator('h1[class="hero-title "] span')
        this.menuButton = page.locator('svg[class="menu-icon"]')
        this.searchBar = page.locator('input[name="one_hitter"]')
        this.orSearchByTitle = page.locator('spark-stack[class="search-bar-horizontal-or"] strong')
        this.makeFilterSelect = page.locator('select[name="makes[]"]')
        this.modelFilterselect = page.locator('select[name="models[]"]')
        this.distanceFilterSelect = page.locator('select[name="maximum_distance"]')
        this.zipCodeFilter = page.locator('input[name="zip"]')
        this.showResultsButton = page.locator('spark-fieldset[variant="melded"] spark-button')


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

    async seachByFilter (make : string, model : string, distance : string, zipCode : string): Promise <void>{
        await this.makeFilterSelect.selectOption(make)
        await this.modelFilterselect.selectOption(model)
        await this.distanceFilterSelect.selectOption(distance)
        await this.zipCodeFilter.fill(zipCode)
        await this.showResultsButton.click()
    }

}