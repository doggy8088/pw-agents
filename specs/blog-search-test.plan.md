# Blog.miniasp.com 站內搜尋功能測試計劃

## Application Overview

本測試計劃旨在驗證 blog.miniasp.com 部落格網站的站內搜尋功能是否正常運作，特別是確認能夠搜尋到關於 "Playwright" 的相關文章，並且能夠正確存取特定文章「如何在 Docker 執行 Playwright 自動化測試腳本」。

## Test Scenarios

### 1. 站內搜尋功能測試

**Seed:** `tests/seed.spec.ts`

#### 1.1. 搜尋 Playwright 關鍵字並驗證搜尋結果

**File:** `tests/search-playwright/search-playwright-articles.spec.ts`

**Steps:**
  1. 導航到 blog.miniasp.com 首頁
  2. 在右側邊欄找到搜尋框
  3. 在搜尋框中輸入 'Playwright'
  4. 點擊搜尋按鈕
  5. 等待搜尋結果頁面載入
  6. 驗證頁面 URL 變更為搜尋結果頁 (包含 q=Playwright 參數)
  7. 驗證頁面標題顯示為「搜尋結果： 'Playwright'」
  8. 驗證搜尋結果至少有一篇文章

**Expected Results:**
  - 成功導航到 blog.miniasp.com 首頁，頁面完整載入
  - 搜尋框元素正確顯示且可供輸入
  - 文字成功輸入至搜尋框
  - 搜尋按鈕可點擊且觸發搜尋動作
  - 搜尋結果頁面成功載入
  - URL 包含 'search?q=Playwright' 參數
  - 頁面標題正確顯示「搜尋結果： 'Playwright' | The Will Will Web」
  - 頁面顯示至少一筆與 Playwright 相關的搜尋結果

#### 1.2. 驗證特定文章存在於搜尋結果中

**File:** `tests/search-playwright/verify-docker-article-exists.spec.ts`

**Steps:**
  1. 導航到 blog.miniasp.com 首頁
  2. 在搜尋框中輸入 'Playwright'
  3. 點擊搜尋按鈕
  4. 等待搜尋結果頁面載入
  5. 在搜尋結果中尋找標題為「如何在 Docker 執行 Playwright 自動化測試腳本」的文章
  6. 驗證該文章連結存在
  7. 驗證文章連結 URL 包含 '/post/2024/10/14/How-to-run-Playwright-automation-test-scripts-in-Docker'

**Expected Results:**
  - 首頁成功載入
  - 搜尋功能正常執行
  - 搜尋結果頁面正確顯示
  - 搜尋結果頁面完整載入
  - 找到標題為「如何在 Docker 執行 Playwright 自動化測試腳本」的文章
  - 該文章的連結可點擊且正確顯示
  - 文章 URL 路徑正確對應到 2024年10月14日發布的文章

#### 1.3. 點擊並存取 Docker Playwright 文章內容

**File:** `tests/search-playwright/access-docker-article.spec.ts`

**Steps:**
  1. 導航到 blog.miniasp.com 首頁
  2. 在搜尋框中輸入 'Playwright'
  3. 點擊搜尋按鈕
  4. 等待搜尋結果頁面載入
  5. 點擊「如何在 Docker 執行 Playwright 自動化測試腳本」文章連結
  6. 等待文章頁面載入
  7. 驗證頁面 URL 為 'https://blog.miniasp.com/post/2024/10/14/How-to-run-Playwright-automation-test-scripts-in-Docker'
  8. 驗證頁面標題包含「如何在 Docker 執行 Playwright 自動化測試腳本」
  9. 驗證文章標題在頁面中正確顯示
  10. 驗證文章發布日期顯示為 2024/10/14
  11. 驗證文章分類包含 'Container' 和 'DevOps'

**Expected Results:**
  - 首頁成功載入
  - 搜尋功能正常執行
  - 搜尋結果頁面正確顯示
  - 搜尋結果完整載入
  - 文章連結可點擊
  - 成功跳轉至文章詳細頁面
  - URL 完全匹配預期的文章路徑
  - 頁面標題正確顯示為「如何在 Docker 執行 Playwright 自動化測試腳本 | The Will Will Web」
  - 文章標題在頁面主要內容區正確顯示
  - 文章元資料顯示正確的發布日期
  - 文章分類標籤正確顯示為 Container 和 DevOps

#### 1.4. 驗證 Docker Playwright 文章內容完整性

**File:** `tests/search-playwright/verify-article-content.spec.ts`

**Steps:**
  1. 直接導航到文章 URL: 'https://blog.miniasp.com/post/2024/10/14/How-to-run-Playwright-automation-test-scripts-in-Docker'
  2. 等待頁面完全載入
  3. 驗證文章主要標題存在
  4. 驗證文章包含「先下載 Docker 容器映像」章節
  5. 驗證文章包含「初始化 Docker Desktop 執行環境 (Windows)」章節
  6. 驗證文章包含「建立 Playwright 容器」章節
  7. 驗證文章包含程式碼區塊
  8. 驗證文章包含至少一個 Docker 相關指令範例
  9. 驗證文章底部包含相關連結區塊
  10. 驗證文章包含標籤 'Docker' 和 'Playwright'

**Expected Results:**
  - 文章頁面成功直接載入
  - 頁面所有內容完整呈現
  - 文章標題「如何在 Docker 執行 Playwright 自動化測試腳本」清楚顯示
  - 章節「先下載 Docker 容器映像」存在且可見
  - 章節「初始化 Docker Desktop 執行環境 (Windows)」存在且可見
  - 章節「建立 Playwright 容器」存在且可見
  - 文章包含至少一個語法高亮的程式碼區塊
  - 可找到 'docker pull' 或 'docker run' 相關指令
  - 文章底部的「相關連結」區塊正確顯示
  - 文章標籤區正確顯示 'Docker' 和 'Playwright' 兩個標籤

#### 1.5. 測試搜尋結果翻頁和返回功能

**File:** `tests/search-playwright/search-navigation.spec.ts`

**Steps:**
  1. 導航到 blog.miniasp.com 首頁
  2. 在搜尋框中輸入 'Playwright'
  3. 點擊搜尋按鈕
  4. 等待搜尋結果頁面載入
  5. 記錄搜尋結果的文章總數
  6. 點擊第一篇搜尋結果文章
  7. 等待文章頁面載入
  8. 點擊瀏覽器返回按鈕
  9. 驗證返回到搜尋結果頁面
  10. 驗證搜尋結果仍然顯示且內容未改變

**Expected Results:**
  - 首頁成功載入
  - 搜尋執行成功
  - 搜尋結果頁面正確顯示
  - 搜尋結果完整載入
  - 成功記錄搜尋結果數量（至少有 5 筆結果）
  - 文章頁面成功開啟
  - 文章內容正確載入
  - 成功返回前一頁
  - 返回後仍在搜尋結果頁面，URL 包含 'search?q=Playwright'
  - 搜尋結果內容保持一致，之前的搜尋結果仍然顯示

#### 1.6. 測試搜尋無結果情境

**File:** `tests/search-playwright/search-no-results.spec.ts`

**Steps:**
  1. 導航到 blog.miniasp.com 首頁
  2. 在搜尋框中輸入一個不太可能存在的關鍵字 'xyzabcdefg123456'
  3. 點擊搜尋按鈕
  4. 等待搜尋結果頁面載入
  5. 驗證頁面顯示無搜尋結果或空結果列表
  6. 驗證頁面不會顯示錯誤訊息
  7. 驗證搜尋框仍然可用

**Expected Results:**
  - 首頁成功載入
  - 搜尋框接受不常見的關鍵字輸入
  - 搜尋功能正常執行而不會崩潰
  - 搜尋結果頁面正常載入
  - 頁面優雅地處理無結果情況，顯示空白結果或友善訊息
  - 頁面不會顯示系統錯誤
  - 搜尋框保持可用狀態，允許使用者進行新的搜尋
