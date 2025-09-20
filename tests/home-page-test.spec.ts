import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { SearchPage } from '../pages/search-page'

test("Home Page functions validation", async ({page}) => {

    let homePage = new HomePage(page)
    await page.goto("https://www.cars.com/")
    await homePage.validateTitleMessage("Imagine the possibilities")
    await homePage.clickMenuButton()
    await homePage.searchBarValidation("Porsche")
    await homePage.validateOrSearchByTitle("- Or search by -")
    await homePage.seachByFilter("bmw", "bmw-m4", "30", "60125")
    
    let searchPage = new SearchPage(page)
    await searchPage.validateTags(["BMW", "M4"])
})