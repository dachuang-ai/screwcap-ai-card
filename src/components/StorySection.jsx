import React from 'react';
import { Hexagon, Quote } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-36 bg-[#1F2A44] relative border-b border-[#E8DCC8]/10 overflow-hidden">
      {/* Background Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#111827] via-[#C6A75E]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Identity Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-[#111827] border border-[#C6A75E]/40 text-[#C6A75E]">
            <Hexagon className="w-5 h-5 animate-pulse" />
          </div>
          <span className="font-mono text-xs text-[#C6A75E] tracking-widest uppercase">
            BRAND STORY & PHILOSOPHY
          </span>
        </div>

        {/* 主標題 */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.3] mb-12">
          企業不缺工具，<br />
          缺的是能把工具<span className="text-[#C6A75E]">鎖在一起</span>的人。
        </h2>

        {/* 高級顧問內文排版 (留白充足，Apple 產品文案質感) */}
        <div className="space-y-8 text-base sm:text-xl text-[#E8DCC8]/90 font-normal leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#C6A75E] first-letter:mr-3 first-letter:float-left">
            在 AI 工具快速增加的時代，企業主面對的問題不是沒有選擇，而是選擇太多。網站、廣告、SEO、社群、自動化、管理系統、AI 內容、數位人、Google 商家，每一項看起來都有用，但真正困難的是：<strong className="text-white font-medium underline decoration-[#C6A75E]/60 underline-offset-4">誰來判斷該用什麼？誰來把它們接起來？誰來讓團隊真的用得起來？</strong>
          </p>

          <div className="p-8 sm:p-10 my-10 rounded-3xl bg-[#111827]/70 border border-[#C6A75E]/30 relative shadow-2xl backdrop-blur-xl">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#C6A75E]/15 pointer-events-none" />
            <p className="text-lg sm:text-2xl text-white font-medium leading-relaxed italic">
              「螺絲帽先生的角色，就像系統裡那顆不起眼卻關鍵的螺絲帽。它不是最大的零件，卻能讓整個結構穩定。它不單獨表演技術，而是讓分散的工具、流程與內容真正鎖在一起。」
            </p>
          </div>

          <p>
            我們相信，好的數位轉型不是追逐最新技術，而是讓企業<span className="text-[#C6A75E] font-semibold">能用、會用、持續用</span>。這就是螺絲帽先生存在的原因。
          </p>
        </div>

        {/* Signature bottom footer */}
        <div className="mt-16 pt-10 border-t border-[#E8DCC8]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold tracking-wider">螺絲帽先生</p>
            <p className="text-xs font-mono text-[#C6A75E]">AI 跨媒體整合顧問</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111827] border border-[#E8DCC8]/20 text-xs font-mono text-[#E8DCC8]/70">
            <span>EST. SYSTEMIC INTEGRATION</span>
          </div>
        </div>

      </div>
    </section>
  );
}
