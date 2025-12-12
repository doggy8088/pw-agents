# Copilot coding agent instructions (pw-agents)

- MUST：在 Agent 任務尚未完成之前，不能提前停下工作；必須持續執行到完成為止（除非使用者明確要求暫停或停止）。

## 專案大圖
- 這是一個 Playwright + MCP 的示範專案：目標是讓 Copilot 透過 MCP 直接驅動 Playwright agent 來「規劃→生成→修復」端對端測試。
- 測試執行入口在 `playwright.config.ts`（`testDir: './tests'`，預設只跑 `chromium`，reporter=html，CI 會 retries）。

## 重要目錄與檔案
- Agents 定義：`.github/agents/`
  - `playwright-test-planner.agent.md`：探索網站並輸出測試計畫（Markdown）。
  - `playwright-test-generator.agent.md`：依測試計畫 + seed 產生測試檔。
  - `playwright-test-healer.agent.md`：跑測試、定位失敗並修復。
- 測試計畫（規格）：`specs/*.plan.md`（例如 `specs/blog-search-test.plan.md`）。
- Playwright 測試：`tests/**/*.spec.ts`（seed 範例：`tests/seed.spec.ts`）。
- MCP 設定（VS Code）：`.vscode/mcp.json`（server: `playwright-test` 使用 `npx playwright run-test-mcp-server`）。

## 開發/驗證工作流（以 PowerShell 為例）
- 安裝：`npm ci`
- 安裝瀏覽器：`npx playwright install chromium`（或 CI/全套：`npx playwright install --with-deps`）
- 列出測試：`npx playwright test --list`
- 執行測試：`npx playwright test`（如需指定：`npx playwright test --project=chromium`）
- 看報告：執行後用 `npx playwright show-report`

## 本專案的測試/規格慣例
- 測試計畫的 seed 會指向 `tests/seed.spec.ts`，generator 會以它做為起始檔案/脈絡。
- 測試計畫的結構（見 `specs/blog-search-test.plan.md`）：
  - Top-level 測試群組（例如「站內搜尋功能測試」）→ 生成後應對應到 `test.describe('<群組名>', ...)`。
  - 每個 scenario 生成成「單一檔案、單一 test」：路徑通常是 `tests/<suite>/<scenario>.spec.ts`。

## 變更與修復時的偏好
- 先對齊 Playwright 設定（`playwright.config.ts`）再改測試：專案預設並行執行、trace=on-first-retry。
- 優先使用 role-based locator（參考 `tests/example.spec.ts`：`getByRole(...)`）而不是脆弱的 CSS selector。

## CI / GitHub Actions 注意事項
- 工作流在 `.github/workflows/copilot-setup-steps.yml`：會跑 `npm ci`、`npx playwright install --with-deps`。
- `package.json` 目前沒有 `scripts`，workflow 的 "Build application" 步驟是佔位（`npx run build`），不要假設有可用的 build 指令。
