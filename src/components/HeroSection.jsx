import React from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import MetallicLogoPlaceholder from './MetallicLogoPlaceholder';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center overflow-hidden border-b border-[#E8DCC8]/10">
      {/* Background Ambient Glows (Navy #1F2A44 & Soft Gold #C6A75E) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C6A75E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#111827]/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* 左側文案區 (col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 品牌標籤：品牌名 + 副標 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8DCC8]/8 border border-[#C6A75E]/40 mb-8 backdrop-blur-md transition-all duration-300 hover:border-[#C6A75E]">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
              <span className="font-sans font-bold text-sm tracking-wide text-[#E8DCC8]">
                螺絲帽先生
              </span>
              <span className="text-[#C6A75E]/40">|</span>
              <span className="font-mono text-xs tracking-wider text-[#C6A75E]">
                AI 跨媒體整合顧問
              </span>
            </div>

            {/* 主標 */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.25] sm:leading-[1.2] mb-8 font-sans">
              把 AI、網站、系統與<br className="hidden sm:block" />
              行銷工具，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#C6A75E] to-[#E8DCC8] drop-shadow-[0_2px_15px_rgba(198,167,94,0.3)]">鎖成企業真正能用</span>的解決方案。
            </h1>

            {/* 副文 */}
            <p className="text-base sm:text-lg text-[#E8DCC8]/85 font-normal leading-relaxed max-w-2xl mb-10">
              我們協助中小企業導入 AI、自動化流程、企業管理系統、品牌官網、SEO/GEO、Google 商家、數位廣告、社群內容與聲譽管理，讓分散的工具變成<strong className="text-white font-medium">可執行、可管理、可成長</strong>的營運系統。
            </p>

            {/* CTA 按鈕組 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* 主要按鈕 */}
              <LiquidGlassButton 
                variant="primary" 
                onClick={onOpenConsultation}
                fullWidthMobile={true}
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                預約整合諮詢
              </LiquidGlassButton>

              {/* 次要按鈕 */}
              <a href="#services" className="w-full sm:w-auto">
                <LiquidGlassButton 
                  variant="secondary" 
                  fullWidthMobile={true}
                >
                  查看服務項目
                </LiquidGlassButton>
              </a>
            </div>

            {/* Trust proof one-liner */}
            <div className="mt-12 pt-8 border-t border-[#E8DCC8]/10 flex items-center gap-3 text-xs text-[#E8DCC8]/60 font-mono tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C6A75E]" />
              <span>取代「知行跨媒體廣告行銷」全新主品牌理念落地</span>
            </div>
          </div>

          {/* 右側：預留 MetallicPaint 動態 Logo 區塊 (col 5) */}
          <div className="lg:col-span-5 flex items-center justify-center mt-6 lg:mt-0">
            <MetallicLogoPlaceholder />
          </div>

        </div>
      </div>
    </section>
  );
}
