// spec: specs/webconf-speaker-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('講者陣容瀏覽測試', () => {
  test('驗證講者陣容頁面篩選功能', async ({ page }) => {
    // 1. 導航到講者陣容頁面 (https://webconf.tw/speakers)
    await page.goto('https://webconf.tw/speakers');

    // 2. 確認頁面顯示篩選按鈕（FILTER）
    await expect(page.getByRole('button', { name: '開啟議程類型篩選選單' })).toBeVisible();

    // 3. 點擊篩選按鈕開啟篩選選單
    await page.getByRole('button', { name: '開啟議程類型篩選選單' }).click();

    // 4. 驗證篩選選單提供議程類型選項（如 Frontend, AI, Backend 等）
    await expect(page.getByRole('checkbox', { name: 'Frontend' })).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'AI' })).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Backend' })).toBeVisible();

    // 5. 選擇「Frontend」標籤進行篩選
    await page.getByText('Frontend', { exact: true }).first().click();

    // 6. 確認篩選後「保哥 Will」仍然顯示在結果中（因為他的標籤包含 Frontend）
    await expect(page.getByRole('heading', { name: '保哥 Will' })).toBeVisible();
  });
});
