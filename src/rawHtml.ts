export function getStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="zh-TW" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>螺絲帽 AI 戰隊｜AI 整合顧問電子名片</title>
  <meta name="description" content="用 AI、現成工具與自動化流程，協助企業快速完成網站、品牌與數位流程整合。">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              black: '#0a0a0c',
              dark: '#121216',
              border: '#24242c',
              accent: '#383844',
            }
          },
          fontFamily: {
            sans: ['"Inter"', '"PingFang SC"', '"Microsoft JhengHei"', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    body {
      background-color: #070709;
      color: #f3f3f6;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    /* 自訂平滑滾動與選取樣式 */
    ::selection {
      background-color: #ffffff;
      color: #000000;
    }

    .card-glow {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-glow:hover {
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px 0 rgba(255, 255, 255, 0.05);
    }

    /* 吐司通知動畫 */
    #toast {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
  </style>
</head>
<body class="min-h-screen bg-[#070709] text-neutral-100 antialiased selection:bg-white selection:text-black relative overflow-x-hidden">

  <!-- 背景頂部光暈 -->
  <div class="pointer-events-none absolute inset-0 flex justify-center overflow-hidden z-0">
    <div class="w-[600px] h-[350px] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent blur-3xl rounded-full -top-32"></div>
  </div>

  <!-- 主容器 (精品名片手機優先比例) -->
  <main class="relative z-10 max-w-md sm:max-w-lg mx-auto px-5 py-10 sm:py-16 flex flex-col gap-14">

    <!-- 1. 首屏 Hero Section -->
    <section class="flex flex-col items-start pt-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 text-[11px] tracking-[0.18em] uppercase font-medium mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        AI Integration Team
      </div>

      <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
        螺絲帽 AI 戰隊
      </h1>

      <div class="flex items-center gap-2 text-sm text-neutral-300 font-medium mb-5 bg-neutral-900/50 px-3.5 py-1.5 rounded-lg border border-neutral-800/80">
        <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        <span>聯絡人：<strong class="text-white">Baroness</strong></span>
      </div>

      <!-- 定位標籤 -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span class="px-2.5 py-1 text-xs font-medium rounded bg-neutral-900 text-neutral-300 border border-neutral-800">AI 整合顧問</span>
        <span class="px-2.5 py-1 text-xs font-medium rounded bg-neutral-900 text-neutral-300 border border-neutral-800">網站建置</span>
        <span class="px-2.5 py-1 text-xs font-medium rounded bg-neutral-900 text-neutral-300 border border-neutral-800">品牌內容</span>
        <span class="px-2.5 py-1 text-xs font-medium rounded bg-neutral-900 text-neutral-300 border border-neutral-800">LINE 官方帳號</span>
        <span class="px-2.5 py-1 text-xs font-medium rounded bg-neutral-900 text-neutral-300 border border-neutral-800">SEO</span>
        <span class="px-2.5 py-1 text-xs font-medium rounded bg-neutral-900 text-neutral-300 border border-neutral-800">AI 自動化</span>
      </div>

      <!-- 一句話介紹 -->
      <blockquote class="relative pl-4 border-l-2 border-neutral-400 text-neutral-300 text-sm sm:text-base leading-relaxed my-2 italic">
        用 AI、現成工具與自動化流程，協助企業快速完成網站、品牌與數位流程整合。
      </blockquote>

      <!-- 行動呼籲按鈕組 -->
      <div class="grid grid-cols-2 gap-3 w-full mt-8">
        <a href="https://line.me/R/ti/p/~Baroness59420" target="_blank" rel="noopener noreferrer" 
           class="flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-3.5 px-4 rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition shadow-lg shadow-white/5">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/></svg>
          加入 LINE
        </a>
        <a href="#portfolio" 
           class="flex items-center justify-center gap-2 bg-neutral-900/90 text-neutral-200 border border-neutral-700/80 font-medium text-sm py-3.5 px-4 rounded-xl hover:bg-neutral-800 hover:text-white active:scale-[0.98] transition">
          <span>查看作品集</span>
          <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>

    <!-- 分隔線 -->
    <hr class="border-neutral-800/80">

    <!-- 2. 服務項目區 -->
    <section class="flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <h2 class="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Services / 服務項目</h2>
        <span class="text-[11px] text-neutral-500 font-mono">01 — 07</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <!-- 卡片 1 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">一頁式網站</h3>
            <p class="text-xs text-neutral-400 leading-normal">高轉換率銷售與活動網頁，極速載入與完美手機瀏覽體驗</p>
          </div>
        </div>

        <!-- 卡片 2 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">企業形象官網</h3>
            <p class="text-xs text-neutral-400 leading-normal">展現品牌權威與信任感的精品級官方門面架構</p>
          </div>
        </div>

        <!-- 卡片 3 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">AI 工具整合</h3>
            <p class="text-xs text-neutral-400 leading-normal">導入客製化 AI 助理與自動化模組，賦能企業日常營運</p>
          </div>
        </div>

        <!-- 卡片 4 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">LINE 官方帳號</h3>
            <p class="text-xs text-neutral-400 leading-normal">選單設計、自動化關鍵字回覆與分眾訊息推播規劃</p>
          </div>
        </div>

        <!-- 卡片 5 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">SEO 基礎設定</h3>
            <p class="text-xs text-neutral-400 leading-normal">符合 modern 搜尋引擎標準的網站結構與關鍵字優化</p>
          </div>
        </div>

        <!-- 卡片 6 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">AI 自動化流程</h3>
            <p class="text-xs text-neutral-400 leading-normal">串接 Make / Zapier 等自動化工作流，省去人工重複作業</p>
          </div>
        </div>

        <!-- 卡片 7 -->
        <div class="card-glow bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 sm:col-span-2 flex items-start gap-3.5">
          <div class="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1">品牌內容規劃</h3>
            <p class="text-xs text-neutral-400 leading-normal">運用 AI 輔助產製具備品牌核心語調的高質感文章與社群素材</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 分隔線 -->
    <hr class="border-neutral-800/80">

    <!-- 3. 案例 / 作品集區 -->
    <section id="portfolio" class="flex flex-col gap-5 scroll-mt-12">
      <div class="flex items-center justify-between">
        <h2 class="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Selected Works / 案例作品</h2>
        <span class="text-[11px] text-neutral-500 font-mono">3 CASES</span>
      </div>

      <div class="flex flex-col gap-4">
        <!-- 作品 1 -->
        <div class="card-glow group bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden">
          <div class="h-36 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-5 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            <div class="flex justify-between items-center z-10">
              <span class="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">Case 01</span>
              <span class="text-xs text-neutral-400 font-mono">Placeholder</span>
            </div>
            <div class="z-10">
              <h3 class="text-lg font-bold text-white tracking-tight">企業形象官網</h3>
              <p class="text-xs text-neutral-400 mt-0.5">專業級現代企業入口與品牌視覺重塑</p>
            </div>
          </div>
          <div class="p-4 bg-neutral-950/60 flex items-center justify-between border-t border-neutral-800/60">
            <span class="text-xs text-neutral-400">響應式架構 ｜ 品牌導向</span>
            <span class="text-xs text-neutral-300 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">探索案例 →</span>
          </div>
        </div>

        <!-- 作品 2 -->
        <div class="card-glow group bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden">
          <div class="h-36 bg-gradient-to-br from-neutral-850 via-neutral-900 to-neutral-950 p-5 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute right-[-10%] bottom-[-10%] w-40 h-40 border border-white/5 rounded-full pointer-events-none"></div>
            <div class="flex justify-between items-center z-10">
              <span class="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">Case 02</span>
              <span class="text-xs text-neutral-400 font-mono">Placeholder</span>
            </div>
            <div class="z-10">
              <h3 class="text-lg font-bold text-white tracking-tight">法律專業網站</h3>
              <p class="text-xs text-neutral-400 mt-0.5">嚴謹信任感介面設計與線上諮詢表單整合</p>
            </div>
          </div>
          <div class="p-4 bg-neutral-950/60 flex items-center justify-between border-t border-neutral-800/60">
            <span class="text-xs text-neutral-400">專業嚴謹 ｜ 表單自動化</span>
            <span class="text-xs text-neutral-300 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">探索案例 →</span>
          </div>
        </div>

        <!-- 作品 3 -->
        <div class="card-glow group bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden">
          <div class="h-36 bg-gradient-to-br from-neutral-900 via-neutral-925 to-black p-5 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute left-1/2 top-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div class="flex justify-between items-center z-10">
              <span class="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">Case 03</span>
              <span class="text-xs text-neutral-400 font-mono">Placeholder</span>
            </div>
            <div class="z-10">
              <h3 class="text-lg font-bold text-white tracking-tight">AI 系統 Demo</h3>
              <p class="text-xs text-neutral-400 mt-0.5">客製化知識庫問答機器人與工作流儀表板</p>
            </div>
          </div>
          <div class="p-4 bg-neutral-950/60 flex items-center justify-between border-t border-neutral-800/60">
            <span class="text-xs text-neutral-400">AI 串接 ｜ 效能優化</span>
            <span class="text-xs text-neutral-300 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">探索案例 →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 分隔線 -->
    <hr class="border-neutral-800/80">

    <!-- 4. 聯絡區 -->
    <section id="contact" class="flex flex-col gap-6 scroll-mt-12">
      <div>
        <h2 class="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Contact / 聯絡我們</h2>
        <p class="text-sm text-neutral-300">準備好開啟您的數位整合專案了嗎？隨時與我們聯繫。</p>
      </div>

      <div class="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl flex flex-col gap-5">
        <!-- 聯絡人 -->
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800/80">
          <span class="text-xs text-neutral-400">顧問代表</span>
          <span class="text-sm font-semibold text-white">Baroness</span>
        </div>

        <!-- LINE ID 一鍵複製 -->
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800/80">
          <div class="flex flex-col">
            <span class="text-xs text-neutral-400">LINE ID</span>
            <span id="lineIdText" class="text-sm font-mono font-bold text-white mt-0.5">Baroness59420</span>
          </div>
          <button onclick="copyLineId()" 
                  class="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium rounded-lg border border-neutral-700 active:scale-95 transition flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            <span id="copyBtnText">複製 ID</span>
          </button>
        </div>

        <!-- Email Placeholder -->
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <span class="text-xs text-neutral-400">電子信箱</span>
            <span class="text-sm text-neutral-300 italic mt-0.5">（點擊諮詢索取專屬信箱 placeholder）</span>
          </div>
          <a href="mailto:contact@placeholder.com" class="text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition">發送信件</a>
        </div>
      </div>

      <!-- 聯絡區主要按鈕組 -->
      <div class="flex flex-col sm:flex-row gap-3">
        <a href="https://line.me/R/ti/p/~Baroness59420" target="_blank" rel="noopener noreferrer" 
           class="flex-1 flex items-center justify-center gap-2.5 bg-white text-black font-bold text-sm py-4 px-6 rounded-xl hover:bg-neutral-200 active:scale-[0.99] transition shadow-xl shadow-white/5 text-center">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/></svg>
          立即加入 LINE 官方帳號諮詢
        </a>
      </div>
    </section>

    <!-- 5. 底部 Footer -->
    <footer class="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
      <p>螺絲帽 AI 戰隊 © 2026</p>
      <p class="text-[11px] text-neutral-600">Minimalist Digital Business Card</p>
    </footer>

  </main>

  <!-- 吐司通知 Toast -->
  <div id="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 translate-y-2 bg-neutral-900 border border-neutral-700 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2">
    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span>已複製 LINE ID：Baroness59420</span>
  </div>

  <!-- JavaScript 功能 -->
  <script>
    function copyLineId() {
      const lineId = 'Baroness59420';
      
      // 複製到剪貼簿
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(lineId);
      } else {
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = lineId;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try { document.execCommand('copy'); } catch (err) {}
        textArea.remove();
      }

      // 按鈕文字動畫
      const copyBtnText = document.getElementById('copyBtnText');
      copyBtnText.innerText = '已複製！';
      setTimeout(() => {
        copyBtnText.innerText = '複製 ID';
      }, 2000);

      // 顯示 Toast
      const toast = document.getElementById('toast');
      toast.classList.remove('opacity-0', 'translate-y-2');
      toast.classList.add('opacity-100', 'translate-y-0');

      setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-2');
      }, 3000);
    }
  </script>
</body>
</html>`;
}
