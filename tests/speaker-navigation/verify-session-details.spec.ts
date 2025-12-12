// spec: specs/webconf-speaker-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('講者陣容瀏覽測試', () => {
  test('驗證講者議程資訊完整性', async ({ page }) => {
    // 1. 直接導航到保哥的講者頁面 (https://webconf.tw/speakers/2)
    await page.goto('https://webconf.tw/speakers/2');

    // 2. 驗證講者個人資訊區域顯示完整
    await expect(page.getByRole('heading', { name: '保哥 Will', level: 2 })).toBeVisible();
    await expect(page.getByText('多奇數位創意有限公司 / 技術總監')).toBeVisible();

    // 3. 確認議程標題為「深入淺出 Playwright Agent 代理人模式」
    await expect(page.getByRole('heading', { name: '深入淺出 Playwright Agent 代理人模式' })).toBeVisible();

    // 4. 驗證議程時間資訊顯示（12/12 (fri.) 13:30~14:15）
    await expect(page.getByText('12/12 (fri.) 13:30~14:15')).toBeVisible();

    // 5. 確認議程地點資訊顯示（M 棟 & F 棟）
    await expect(page.getByText('M 棟 & F 棟')).toBeVisible();

    // 6. 驗證議程標籤顯示（Frontend、AI）
    // Filter within the session details section to avoid matching speaker list tags
    const sessionSection = page.locator('main');
    await expect(sessionSection.getByText('Frontend').last()).toBeVisible();
    await expect(sessionSection.getByText('AI').last()).toBeVisible();

    // 7. 確認「共筆文件」連結可見
    await expect(page.getByRole('link', { name: '共筆文件' })).toBeVisible();

    // 8. 驗證議程介紹、目標受眾、預期收穫等內容完整顯示
    await expect(page.getByRole('heading', { name: '目標受眾' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '預期收穫' })).toBeVisible();
    await expect(page.getByText('在 AI 驅動的時代，測試自動化也需要與時俱進')).toBeVisible();
  });
});
