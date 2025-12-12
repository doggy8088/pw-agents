// spec: specs/webconf-speaker-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('講者陣容瀏覽測試', () => {
  test('驗證從講者詳細頁返回列表', async ({ page }) => {
    // 1. 導航到 WebConf Taiwan 2025 首頁 (https://webconf.tw/)
    await page.goto('https://webconf.tw/', { waitUntil: 'domcontentloaded' });

    // 2. 點擊「講者陣容」進入講者列表頁
    await page.getByRole('link', { name: '講者陣容' }).click({ timeout: 30000 });
    await page.waitForURL('**/speakers', { timeout: 30000 });

    // 3. 點擊任一講者卡片（如「保哥 Will」）進入詳細頁
    await page.getByRole('link', { name: '保哥 Will 保哥 Will' }).first().click({ timeout: 30000 });
    await page.waitForURL('**/speakers/2', { timeout: 30000 });

    // 4. 點擊「返回講者列表」按鈕
    await page.getByRole('button', { name: '返回講者列表' }).click({ timeout: 30000 });

    // 5. 驗證頁面返回到講者陣容列表頁
    await expect(page.getByRole('heading', { name: 'SPEAKERS' })).toBeVisible();
    await expect(page).toHaveURL(/\/speakers$/);
  });
});
