// spec: specs/webconf-speaker-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('講者陣容瀏覽測試', () => {
  test('驗證保哥講者資訊與議程', async ({ page }) => {
    // 1. 導航到 WebConf Taiwan 2025 首頁 (https://webconf.tw/)
    await page.goto('https://webconf.tw/');

    // 2. 點擊導航列中的「講者陣容」連結
    await page.getByRole('link', { name: '講者陣容' }).click();

    // 3. 驗證頁面已導航至講者陣容頁面 (/speakers)
    await expect(page.getByRole('heading', { name: 'SPEAKERS' })).toBeVisible();

    // 4. 確認頁面上顯示「保哥 Will」的講者卡片
    await expect(page.getByRole('heading', { name: '保哥 Will' }).first()).toBeVisible();

    // 5. 點擊「保哥 Will」的講者卡片
    await page.getByRole('link', { name: '保哥 Will 保哥 Will' }).click();

    // 6. 驗證頁面已導航至保哥的個人頁面 (/speakers/2)
    await expect(page.getByRole('heading', { name: '深入淺出 Playwright Agent 代理人模式' })).toBeVisible();
  });
});
