import { expect, Locator, Page } from '@playwright/test'

export class SearchPage {
    tags : Locator
    makeFilterSelect2 : Locator
    searchWithinSelect : Locator
    zipCodeField : Locator

constructor(page : Page){
    this.tags = page.locator('div[id="active_filter_tags"] label')
    this.makeFilterSelect2 = page.locator('select[id="make_select_bmw"]')
    this.searchWithinSelect = page.getByLabel('Search within')
    this.zipCodeField = page.locator('input[value="60125"]')
}

async validateTags (expectedTagsText : string[]): Promise <void>{
    for (let i = 0; i < expectedTagsText.length; i++){
        let currentTagElement = this.tags.getByText(expectedTagsText[i])
        console.log("checking expected tag " + expectedTagsText[i])
        await expect(currentTagElement).toHaveText(expectedTagsText[i])
        await expect(currentTagElement).toBeVisible()
    }
}
async validateFiltersText (make : string, sercWithinDistance : string, zipCode : string): Promise <void>{
        await expect(this.makeFilterSelect2).toHaveValue(make)
        await expect(this.searchWithinSelect).toHaveValue(sercWithinDistance)
        await expect(this.zipCodeField).toHaveValue(zipCode)
    }
}