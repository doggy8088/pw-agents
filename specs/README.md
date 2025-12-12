# Playwright Agents Demo

## 專案宗旨

讓 GitHub Copilot 透過 Model Context Protocol (MCP) 直接驅動 Playwright Agents，協助規劃、生成與修復端對端測試。

## 專案內容

- `.github/agents/`：三個預設 Agent 定義
  - `playwright-test-planner`：互動探索介面並產生測試計畫。
  - `playwright-test-generator`：依測試計畫與種子檔產生 Playwright 測試。
  - `playwright-test-healer`：自動修復失敗的 Playwright 測試。
- `specs/`：放置測試計畫的 Markdown。
- `tests/seed.spec.ts`：範例 / 佔位的 Playwright 測試入口。

## 前置需求

- Node.js 18+ 與 npm/npx
- Copilot CLI 已安裝 (支援 MCP)
- Playwright (建議 @playwright/test ≥ 1.48 以支援 `run-test-mcp-server`)

在現有專案安裝 Playwright 及 Chromium 瀏覽器

```ps1
npm install -D @playwright/test
npx playwright install chromium
```

## 快速開始 (PowerShell)

1. 進入專案根目錄

2. 確認已安裝 Playwright 並完成瀏覽器安裝

   ```ps1
   npm install
   npx playwright install-deps
   ```

3. 在 Visual Studio Code (GitHub Copilot Chat) 中透過選取適當的 Custom Agent 啟動 Playwright 測試代理人

   啟動後即可在對話中要求：

   - 自動的規劃測試流程 → 使用 `playwright-test-planner` Agent
   - 依計畫生成測試檔案 → 使用 `playwright-test-generator` Agent (參考種子檔 `seed.spec.ts`)
   - 自動修復失敗的測試 → 使用 `playwright-test-healer` Agent

## 重頭開始

1. 初始化 Playwright 專案 (使用 TypeScript 語言)

   ```ps1
   mkdir pw-agents && cd pw-agents

   npm init playwright@latest -- --lang=ts --quiet --install-deps

   # 設定 MIT 授權
   npm pkg set license="MIT"
   npm pkg set description="Playwright Agents for Copilot CLI"

   git init -b main && git add -A && git commit -m "Initial commit"
   ```

2. 使用 `init-agents` 指令將 Playwright 測試代理人定義加入到你的專案中

   ```ps1
   npx -y playwright init-agents --loop=vscode
   ```

## GitHub Copilot coding agent 的 MCP 設定範例

```json
{
  "mcpServers": {
    "playwright-test": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "playwright",
        "run-test-mcp-server"
      ],
      "tools": [
        "*"
      ]
    }
  }
}
```

## 疑難排解

- 第一次執行會下載瀏覽器，需保持網路暢通。

- VS Code 一定要手動設定 `Chat › Custom Agent In Subagent: Enabled` (`chat.customAgentInSubagent.enabled`) 為 `true`。
