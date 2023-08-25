import { test, expect } from '@playwright/test';

test('authorization', async ({ page }) => {
    await page.goto('https://www.sima-land.ru/');
    await page.locator('./@class="A1F89" and @text="Войти"').click();
    await page.locator('./@data-testid="text-field:field"').fill("qa_test@test.ru");
    await page.locator('./@type="password"').fill("qa_test");
    await page.locator('./@type="submit"').click();
    await expect(page.locator('./@class="A1F89" and @text="Профиль"')).toBeVisible();
});