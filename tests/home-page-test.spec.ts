import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'

test("Home Page functions validation", async ({page}) => {

    let homePage = new HomePage(page)
    await page.goto("https://www.cars.com/")
    await homePage.validateTitleMessage("Imagine the possibilities")
    await homePage.clickMenuButton()
    await homePage.searchBarValidation("Porsche")
    await homePage.validateOrSearchByTitle("- Or search by -")
    await homePage.seachByFilter("bmw", "bmw-alpina_b7", "30", "60125")
    await page.waitForTimeout(5_000)
})