import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'

test("Home Page functions validation", async ({page}) => {

    let homePage = new HomePage(page)
    await page.goto("https://www.cars.com/")
    await homePage.validateTitleMessage("Imagine the possibilities")
    await homePage.clickMenuButton()
    await homePage.searchBarValidation("Porsche")

})