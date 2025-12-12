# WebConf 講者資訊測試

## Application Overview

針對 WebConf Taiwan 2025 網站的講者資訊功能進行測試，驗證使用者能否順利瀏覽講者陣容並查看特定講者的議程詳細資訊。

## Test Scenarios

### 1. 講者陣容瀏覽測試

**Seed:** `tests/seed.spec.ts`

#### 1.1. 驗證保哥講者資訊與議程

**File:** `tests/speaker-navigation/verify-will-speaker-session.spec.ts`

**Steps:**
  1. 導航到 WebConf Taiwan 2025 首頁 (https://webconf.tw/)
  2. 點擊導航列中的「講者陣容」連結
  3. 驗證頁面已導航至講者陣容頁面 (/speakers)
  4. 確認頁面上顯示「保哥 Will」的講者卡片
  5. 點擊「保哥 Will」的講者卡片
  6. 驗證頁面已導航至保哥的個人頁面 (/speakers/2)

**Expected Results:**
  - 成功載入 WebConf Taiwan 2025 首頁
  - 成功導航到講者陣容頁面，URL 為 https://webconf.tw/speakers
  - 頁面標題包含「講者陣容」
  - 講者列表中顯示「保哥 Will」及其職稱「多奇數位創意 / 技術總監」
  - 成功進入保哥的詳細頁面
  - 頁面標題或 heading 顯示「深入淺出 Playwright Agent 代理人模式」議程標題
  - 頁面顯示完整的講者介紹與議程資訊

#### 1.2. 驗證首頁 Featured Speakers 區域

**File:** `tests/speaker-navigation/verify-featured-speakers.spec.ts`

**Steps:**
  1. 導航到 WebConf Taiwan 2025 首頁 (https://webconf.tw/)
  2. 滾動到 Featured Speakers 區域
  3. 確認 Featured Speakers 區域中顯示多位講者
  4. 驗證「保哥 Will」出現在 Featured Speakers 輪播中

**Expected Results:**
  - 成功載入首頁
  - Featured Speakers 區域可見
  - 至少顯示 4 位以上的精選講者
  - 「保哥 Will」顯示在精選講者列表中，包含頭像和姓名

#### 1.3. 驗證講者陣容頁面篩選功能

**File:** `tests/speaker-navigation/verify-speaker-filter.spec.ts`

**Steps:**
  1. 導航到講者陣容頁面 (https://webconf.tw/speakers)
  2. 確認頁面顯示篩選按鈕（FILTER）
  3. 點擊篩選按鈕開啟篩選選單
  4. 驗證篩選選單提供議程類型選項（如 Frontend, AI, Backend 等）
  5. 選擇「Frontend」標籤進行篩選
  6. 確認篩選後「保哥 Will」仍然顯示在結果中（因為他的標籤包含 Frontend）

**Expected Results:**
  - 成功載入講者陣容頁面
  - 篩選按鈕可見且可點擊
  - 篩選選單正確顯示所有可用的議程類型
  - 選擇 Frontend 後，頁面只顯示標籤包含 Frontend 的講者
  - 保哥 Will 出現在篩選結果中
  - 其他不符合篩選條件的講者被隱藏或移除

#### 1.4. 驗證從講者詳細頁返回列表

**File:** `tests/speaker-navigation/verify-back-to-list.spec.ts`

**Steps:**
  1. 導航到 WebConf Taiwan 2025 首頁 (https://webconf.tw/)
  2. 點擊「講者陣容」進入講者列表頁
  3. 點擊任一講者卡片（如「保哥 Will」）進入詳細頁
  4. 點擊「返回講者列表」按鈕
  5. 驗證頁面返回到講者陣容列表頁

**Expected Results:**
  - 成功進入講者詳細頁面
  - 「返回講者列表」按鈕可見且可點擊
  - 點擊後成功返回 /speakers 頁面
  - 講者列表完整顯示，保持先前的瀏覽狀態

#### 1.5. 驗證講者議程資訊完整性

**File:** `tests/speaker-navigation/verify-session-details.spec.ts`

**Steps:**
  1. 直接導航到保哥的講者頁面 (https://webconf.tw/speakers/2)
  2. 驗證講者個人資訊區域顯示完整
  3. 確認議程標題為「深入淺出 Playwright Agent 代理人模式」
  4. 驗證議程時間資訊顯示（12/12 (fri.) 13:30~14:15）
  5. 確認議程地點資訊顯示（M 棟 & F 棟）
  6. 驗證議程標籤顯示（Frontend、AI）
  7. 確認「共筆文件」連結可見
  8. 驗證議程介紹、目標受眾、預期收穫等內容完整顯示

**Expected Results:**
  - 頁面標題顯示「保哥 Will | 深入淺出 Playwright Agent 代理人模式」
  - 講者姓名「保哥 Will」顯示為 heading
  - 職稱「多奇數位創意有限公司 / 技術總監」正確顯示
  - 講者個人簡介完整呈現
  - 議程標題、時間、地點資訊完整且正確
  - 標籤「Frontend」和「AI」清晰可見
  - 「共筆文件」連結存在且可點擊
  - 議程介紹包含 5 個要點的列表
  - 目標受眾顯示為「All」
  - 預期收穫列出 6 個學習要點
