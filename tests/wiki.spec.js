import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
    // await page.goto('https://google.com/')
    await page.goto('https://www.wikipedia.org/')
    await page.getByLabel('Search Wikipedia').click()
    await page.getByLabel('Search Wikipedia').fill('samsun')
    await page.getByRole('button', { name: 'Search' }).click()
    await page
        .getByRole('link', {
            name: 'Clockwise from top right: Samsunum-1 ship and coast, Statue of Honor, Atatürk Culture Centre, Bandırma Ferry and National Struggle Park Open Air Museum, Saathane Square, Store 55',
        })
        .click()
})
