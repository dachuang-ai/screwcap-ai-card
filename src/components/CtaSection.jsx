import React from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { HelpCircle, Calendar } from 'lucide-react';

export default function CtaSection({ onOpenConsultation }) {
  return (
    <section className="py-24 sm:py-36 bg-[#111827] relative border-b border-[#E8DCC8]/10 overflow-hidden text-center">
      {/* Shimmer backings */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F2A44] via-[#111827] to-[#111827] opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A75E]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A75E]/10 border border-[#C6A75E]/30 text-[#C6A75E] text-xs font-mono tracking-widest uppercase mb-8">
          <HelpCircle className="w-4 h-4" />
          <span>LET'S DIAGNOSE YOUR BUSINESS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.3] mb-8">
          不知道該先做網站、廣告、<br className="hidden sm:block" />
          AI，還是<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#C6A75E] to-[#E8DCC8]">系統</span>？
        </h2>

        <p className="text-base sm:text-xl text-[#E8DCC8]/85 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
          先不用急著決定工具。讓我們先一起判斷你真正要解決的是<strong className="text-white font-semibold">曝光、流程、管理、內容</strong>，還是<strong className="text-[#C6A75E] font-semibold">信任問題</strong>。
        </p>

        <div className="flex justify-center">
          <LiquidGlassButton 
            variant="primary" 
            onClick={onOpenConsultation}
            fullWidthMobile={true}
            className="!px-10 !py-5 text-base sm:text-lg shadow-[0_0_50px_rgba(198,167,94,0.35)]"
            icon={<Calendar className="w-5 h-5 ml-2" />}
          >
            預約整合諮詢
          </LiquidGlassButton>
        </div>

        <p className="text-xs font-mono text-[#E8DCC8]/50 mt-8">
          免費初步盤點諮詢｜一對一顧問專業評估
        </p>

      </div>
    </section>
  );
}
