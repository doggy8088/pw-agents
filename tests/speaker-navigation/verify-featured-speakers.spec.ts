// spec: specs/webconf-speaker-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('講者陣容瀏覽測試', () => {
  test('驗證首頁 Featured Speakers 區域', async ({ page }) => {
    // 1. 導航到 WebConf Taiwan 2025 首頁 (https://webconf.tw/)
    await page.goto('https://webconf.tw/');

    // 2. 滾動到 Featured Speakers 區域
    // 3. 確認 Featured Speakers 區域中顯示多位講者
    await expect(page.getByRole('heading', { name: 'Featured Speakers' })).toBeVisible();

    // 4. 驗證「保哥 Will」出現在 Featured Speakers 輪播中
    // 由於輪播每60秒循環，需要輪詢檢查，每10秒檢查一次
    const willSpeakerLink = page.locator('a[href="/speakers/2"]').first();
    let found = false;
    const maxWaitTime = 60000; // 最多等待 60 秒
    const pollInterval = 10000; // 每 10 秒檢查一次
    const startTime = Date.now();

    while (!found && (Date.now() - startTime) < maxWaitTime) {
      try {
        await expect(willSpeakerLink).toBeVisible({ timeout: pollInterval });
        found = true;
      } catch (error) {
        // 如果還沒找到且還有時間，繼續等待下一個輪詢週期
        if ((Date.now() - startTime) >= maxWaitTime) {
          throw new Error('在 60 秒內未能在 Featured Speakers 輪播中找到「保哥 Will」');
        }
        // 否則繼續下一次檢查
      }
    }

    expect(found).toBe(true);
  });
});
