import { expect, Locator, Page } from '@playwright/test'
import { isAwaitExpression } from 'typescript'

export class SearchPage {
    tags : Locator

constructor(page : Page){
    this.tags = page.locator('div[id="active_filter_tags"] label')
}

async validateTags (expectedTagsText : string[]): Promise <void>{
    for (let i = 0; i < expectedTagsText.length; i++){
        let currentTagElement = this.tags.getByText(expectedTagsText[i])
        console.log("checking expected tag " + expectedTagsText[i])
        await expect(currentTagElement).toHaveText(expectedTagsText[i])
        await expect(currentTagElement).toBeVisible()
    }
}

}