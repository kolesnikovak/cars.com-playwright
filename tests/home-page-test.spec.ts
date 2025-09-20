import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { SearchPage } from '../pages/search-page'

test("Home Page functions validation", async ({page}) => {

    let makeValue = "bmw"
    let modelValue = "bmw-m4"
    let milesDistance = "30"
    let zipCode = "60125"

    let homePage = new HomePage(page)
    await page.goto("https://www.cars.com/")
    await homePage.validateTitleMessage("Imagine the possibilities")
    await homePage.searchBarValidation("Porsche")
    await homePage.validateOrSearchByTitle("- Or search by -")
    await homePage.seachByFilter(makeValue, modelValue, milesDistance, zipCode)
   // await homePage.validateTitleText("Your Garage")
    
    let searchPage = new SearchPage(page)
    await searchPage.validateTags(["BMW", "M4"])
    await searchPage.validateFiltersText(makeValue, milesDistance, zipCode)
})