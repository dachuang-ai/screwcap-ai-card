/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Globe, 
  LayoutTemplate, 
  Cpu, 
  MessageSquare, 
  Search, 
  Zap, 
  FileText, 
  Check, 
  Copy, 
  ArrowRight, 
  Code2, 
  Download, 
  X, 
  Sparkles, 
  Mail, 
  Scale, 
  Monitor,
  UserCheck
} from 'lucide-react';
import { getStandaloneHtml } from './rawHtml';

export default function App() {
  const [copiedLineId, setCopiedLineId] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const lineId = "Baroness59420";
  const lineJoinUrl = "https://line.me/R/ti/p/~Baroness59420";

  // 複製 LINE ID
  const handleCopyLineId = () => {
    navigator.clipboard.writeText(lineId);
    setCopiedLineId(true);
    setTimeout(() => setCopiedLineId(false), 3000);
  };

  // 複製完整 HTML 原始碼
  const handleCopyRawHtml = () => {
    const rawHtml = getStandaloneHtml();
    navigator.clipboard.writeText(rawHtml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // 下載單檔 HTML
  const handleDownloadHtml = () => {
    const rawHtml = getStandaloneHtml();
    const blob = new Blob([rawHtml], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const services = [
    {
      title: "一頁式網站",
      desc: "高轉換率銷售與品牌活動網頁，極速載入與完美手機瀏覽體驗",
      icon: LayoutTemplate,
      tag: "Conversion"
    },
    {
      title: "企業形象官網",
      desc: "展現品牌權威與專業信任感的精品級官方門面資訊架構",
      icon: Globe,
      tag: "Branding"
    },
    {
      title: "AI 工具整合",
      desc: "導入客製化 AI 助理與智慧資料串接，加速內部團隊協作效能",
      icon: Cpu,
      tag: "AI Solution"
    },
    {
      title: "LINE 官方帳號",
      desc: "圖文選單設計、自動化關鍵字回覆與進階 API 系統串接",
      icon: MessageSquare,
      tag: "Chatbot"
    },
    {
      title: "SEO 基礎設定",
      desc: "符合現代搜尋引擎規範的網站結構優化與關鍵字佈局策略",
      icon: Search,
      tag: "Traffic"
    },
    {
      title: "AI 自動化流程",
      desc: "串接 Make / Zapier 等無程式碼自動化工作流，省去重複作業",
      icon: Zap,
      tag: "Workflow"
    },
    {
      title: "品牌內容規劃",
      desc: "運用 AI 輔助產製契合品牌核心語調的高質感數位文案與素材",
      icon: FileText,
      tag: "Content",
      fullWidth: true
    }
  ];

  const cases = [
  {
    title: "添福診所",
    subtitle: "診所形象網站／醫療服務展示",
    desc: "以清楚的服務資訊與形象頁面，協助診所建立線上專業感與客戶信任。",
    category: "真實案例",
    icon: Monitor,
    url: "https://share.google/lUYcG5EFQs1ZC2A0K"
  },
  {
    title: "達創智能科技 AI",
    subtitle: "AI 整合品牌官網／6 組 Demo 展示",
    desc: "展示 AI 應用、企業系統 Demo、品牌定位與數位整合能力。",
    category: "真實案例",
    icon: Sparkles,
    url: "http://www.dachuang-ai.com"
  },
  {
    title: "房多多",
    subtitle: "房地產品牌網站／服務介紹",
    desc: "協助房地產相關品牌建立線上形象、服務內容與聯絡入口。",
    category: "真實案例",
    icon: Globe,
    url: "http://xinfdd.com"
  },
  {
    title: "李孟居科技官網",
    subtitle: "科技產業個人品牌官網",
    desc: "以科技、產業整合與專業形象為核心，建立個人品牌展示網站。",
    category: "真實案例",
    icon: Cpu,
    url: "https://lmjdefense.com"
  }
];

  return (
    <div className="min-h-screen bg-[#070709] text-[#f3f3f6] antialiased font-sans selection:bg-white selection:text-black relative overflow-x-hidden pb-16">
      
      {/* 頂部浮動工具列：讓用戶隨時可取得 GitHub Pages 單檔 HTML */}
      <header className="sticky top-0 z-40 bg-[#070709]/80 backdrop-blur-md border-b border-neutral-900/80 px-4 py-3">
        <div className="max-w-md sm:max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>SCREW CAP AI TEAM</span>
          </div>
          <button
            onClick={() => setShowCodeModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium border border-neutral-800 transition shadow-sm active:scale-95"
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>取得 GitHub Pages 原始碼</span>
          </button>
        </div>
      </header>

      {/* 背景頂部光暈 */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden z-0">
        <div className="w-[600px] h-[350px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent blur-3xl rounded-full -top-32"></div>
      </div>

      {/* 主內容容器 (精品名片手機優先比例) */}
      <main className="relative z-10 max-w-md sm:max-w-xl mx-auto px-5 pt-8 sm:pt-14 flex flex-col gap-14">

        {/* 1. 首屏 Hero Section */}
        <section className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400 text-[11px] tracking-[0.18em] uppercase font-medium mb-6 shadow-inner">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>AI Integration Consultant</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            螺絲帽 AI 戰隊
          </h1>

          <div className="flex items-center gap-2.5 text-sm text-neutral-300 font-medium mb-5 bg-neutral-900/60 px-3.5 py-2 rounded-xl border border-neutral-800/80">
            <UserCheck className="w-4 h-4 text-neutral-400" />
            <span>聯絡代表：<strong className="text-white font-semibold tracking-wide">Lucifer</strong></span>
          </div>

          {/* 定位標籤 Pill Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {["AI 整合顧問", "網站建置", "品牌內容", "LINE 官方帳號", "SEO", "AI 自動化"].map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800/80">
                {tag}
              </span>
            ))}
          </div>

          {/* 一句話介紹 */}
          <blockquote className="relative pl-4 border-l-2 border-neutral-400 text-neutral-300 text-sm sm:text-base leading-relaxed my-2 italic">
            「 用 AI、現成工具與自動化流程，協助企業快速完成網站、品牌與數位流程整合。 」
          </blockquote>
          <p className="mt-4 text-sm text-neutral-300 leading-7">
協助企業降低溝通成本、提升工作效率，讓 AI、網站與自動化真正落地，而不是增加管理負擔。
</p>
<p className="mt-4 text-xs text-neutral-400 leading-6">
  已協助診所、法律、科技、房地產等不同產業建立品牌形象與數位解決方案。
</p>
          {/* 行動呼籲按鈕組 */}
          <div className="grid grid-cols-2 gap-3 w-full mt-8">
           <a 
  href={lineJoinUrl} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-3.5 px-4 rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-lg shadow-white/5"
>
  <MessageSquare className="w-4 h-4 fill-current text-black" />
  <span>聯繫 LUCIFER</span>
</a>
            <a 
              href="#portfolio" 
              className="flex items-center justify-center gap-2 bg-neutral-900/90 text-neutral-200 border border-neutral-700/80 font-medium text-sm py-3.5 px-4 rounded-xl hover:bg-neutral-800 hover:text-white active:scale-[0.98] transition-all"
            >
              <span>查看作品集</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </section>

        {/* 分隔線 */}
        <hr className="border-neutral-800" />

        {/* 2. 服務項目區 */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Core Services / 服務項目</h2>
            <span className="text-[11px] text-neutral-500 font-mono">01 — 07</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className={`group bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-4 flex items-start gap-3.5 hover:border-neutral-500 hover:bg-neutral-900/80 transition-all duration-300 hover:-translate-y-0.5 ${item.fullWidth ? 'sm:col-span-2' : ''}`}
                >
                  <div className="p-2.5 rounded-lg bg-neutral-800/80 text-white mt-0.5 group-hover:bg-white group-hover:text-black transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-white tracking-wide">{item.title}</h3>
                      <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 group-hover:text-neutral-200">{item.tag}</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-normal group-hover:text-neutral-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 分隔線 */}
        <hr className="border-neutral-800" />

        {/* 3. 案例作品集區 */}
        <section id="portfolio" className="flex flex-col gap-5 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Selected Works / 案例作品集</h2>
            <span className="text-[11px] text-neutral-500 font-mono">REAL CASES</span>
          </div>
<p className="text-sm text-neutral-400 leading-6">
  以下案例皆為經客戶同意可公開展示之真實作品，部分企業網站、管理系統與品牌專案因合作保密約定（NDA）或客戶要求，不便公開展示完整內容。如有需要，可於洽談時提供更符合產業類型的案例方向供您參考。
</p>
          <div className="flex flex-col gap-4">
           {cases.map((c, idx) => {
  const CaseIcon = c.icon;
  return (
    <div key={idx} className="group bg-neutral-900/30 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60">
      <div className="h-36 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-5 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-36 h-36 bg-white/[0.04] rounded-full blur-2xl pointer-events-none group-hover:bg-white/[0.08] transition-colors"></div>

        <div className="flex justify-between items-center z-10">
          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">{c.category}</span>
          <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
            <CaseIcon className="w-3.5 h-3.5 text-neutral-400" />
            客戶同意公開
          </span>
        </div>

        <div className="z-10">
          <h3 className="text-lg font-bold text-white tracking-tight">{c.title}</h3>
          <p className="text-xs text-neutral-300 font-medium mt-0.5">{c.subtitle}</p>
        </div>
      </div>

      <div className="p-4 bg-neutral-950/80 flex items-center justify-between border-t border-neutral-800/60">
        <p className="text-xs text-neutral-400 leading-relaxed truncate pr-2">{c.desc}</p>
        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-300 font-semibold group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1 shrink-0 hover:text-white"
        >
          查看完整網站 →
        </a>
      </div>
    </div>
  );
})}
          </div>
        </section>
        {/* 分隔線 */}
        <hr className="border-neutral-800" />

        {/* 4. 聯絡區 */}
        <section id="contact" className="flex flex-col gap-6 scroll-mt-20">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Contact / 聯絡資訊</h2>
            <p className="text-sm text-neutral-300">期待協助您的團隊導入 AI 與數位自動化升級。</p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl flex flex-col gap-5 shadow-inner">
            {/* 聯絡人 */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
              <span className="text-xs text-neutral-400 font-medium">顧問代表 Representative</span>
              <span className="text-sm font-semibold text-white">Lucifer</span>
            </div>

            {/* LINE ID 一鍵複製 */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400 font-medium">LINE ID</span>
                <span className="text-sm font-mono font-bold text-white mt-0.5 tracking-wider">{lineId}</span>
              </div>
              <button 
                onClick={handleCopyLineId}
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 hover:text-white text-xs font-medium rounded-lg border border-neutral-700 active:scale-95 transition flex items-center gap-1.5"
              >
                {copiedLineId ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">已複製 ID</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>複製 ID</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Placeholder */}
            <div className="flex items-center justify-between">
  <div className="flex flex-col">
    <span className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
      <Mail className="w-3.5 h-3.5 text-neutral-400" />
      電子信箱 Email
    </span>
    <span className="text-sm text-white mt-0.5">
      zxunimedia@gmail.com
    </span>
  </div>
  <span className="text-xs text-neutral-500 font-mono">Business Email</span>
</div>

<p className="text-xs text-neutral-500 mt-3">
  合作洽詢歡迎加入 LINE，也可來信討論需求。
</p>
          </div>

          {/* 聯絡區主要按鈕組 */}
          <div className="flex flex-col gap-3">
            <a 
              href={lineJoinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-2.5 bg-white text-black font-bold text-sm py-4 px-6 rounded-xl hover:bg-neutral-200 active:scale-[0.99] transition shadow-xl shadow-white/5 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-current text-black" />
              <span>立即加入 LINE 聯繫 LUCIFER</span>
            </a>
            <a 
              href="#portfolio" 
              className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-neutral-300 border border-neutral-800 font-medium text-xs py-3.5 px-6 rounded-xl hover:bg-neutral-800 hover:text-white transition text-center"
            >
              <span>回顧案例作品</span>
            </a>
          </div>
        </section>

        {/* 5. 底部 Footer */}
<footer className="pt-8 border-t border-neutral-900 flex flex-col items-center justify-center text-center gap-2">
  <p className="font-medium text-neutral-300">
    螺絲帽 AI 戰隊 © 2026
  </p>

  <p className="text-[11px] text-neutral-500">
    AI Integration｜Website｜Automation｜Brand Strategy
  </p>

  <p className="text-[11px] text-neutral-600 max-w-md leading-5">
    用 AI、網站與自動化，協助企業打造更有效率的數位營運流程。
  </p>
</footer>

      </main>

      {/* 吐司通知 Toast */}
      {copiedLineId && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 border border-neutral-700 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>已複製 LINE ID：{lineId}</span>
        </div>
      )}

      {/* GitHub Pages 單檔 HTML 匯出 Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">GitHub Pages 完整 index.html 原始碼</h3>
                  <p className="text-[11px] text-neutral-400">內含 Tailwind CDN 與純 JS 互動邏輯，貼上即可直接部署使用</p>
                </div>
              </div>
              <button 
                onClick={() => setShowCodeModal(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Code Preview) */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#070709] font-mono text-xs text-neutral-300">
              <pre className="whitespace-pre overflow-x-auto p-4 bg-neutral-950 rounded-xl border border-neutral-800/80 selection:bg-white selection:text-black">
                {getStandaloneHtml()}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={handleDownloadHtml}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-xl text-xs font-semibold border border-neutral-700 transition"
              >
                <Download className="w-4 h-4 text-neutral-300" />
                <span>直接下載 index.html</span>
              </button>
              <button
                onClick={handleCopyRawHtml}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-xl text-xs font-bold transition shadow-lg shadow-white/10"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>已複製完整 HTML 程式碼！</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black" />
                    <span>一鍵複製完整 HTML</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
