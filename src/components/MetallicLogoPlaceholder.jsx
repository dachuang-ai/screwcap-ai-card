import React from 'react';

/**
 * 預留未來 React Bits MetallicPaint 動態 Logo 區塊
 * 目前使用抽象六角形 placeholder 作為暫代。
 * 未來會替換成正式 SVG Logo (/assets/logo-final.svg 或 /src/assets/logo-final.svg) 
 * 並搭配 React Bits MetallicPaint component。
 * 版面已完全定位，未來替換不需重排。
 */
export default function MetallicLogoPlaceholder() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4 select-none group">
      {/* Ambient Backing Glow (Soft Gold & Navy depth) */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#1F2A44] via-[#C6A75E]/15 to-[#E8DCC8]/10 filter blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Outer Geometric Rotating Rings (High-end tech consultant feel) */}
      <div className="absolute inset-6 rounded-full border border-[#C6A75E]/20 border-dashed animate-spin" style={{ animationDuration: '40s' }} />
      <div className="absolute inset-16 rounded-full border border-[#E8DCC8]/15 transition-transform duration-700 group-hover:scale-105" />

      {/* Placeholder Container ready for MetallicPaint SVG swap */}
      <div className="relative z-10 w-4/5 h-4/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
        {/* 目前使用暫代 SVG: assets/logo-placeholder.svg */}
        <img 
          src="/assets/logo-placeholder.svg" 
          alt="螺絲帽先生 AI 跨媒體整合顧問 Logo Placeholder" 
          className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(198,167,94,0.25)]"
          onError={(e) => {
            // Fallback to inline SVG if public asset fetch fails
            e.target.style.display = 'none';
          }}
        />

        {/* Inline Fallback Graphic in case img path varies */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-90">
          <svg className="w-48 h-48 sm:w-64 sm:h-64 text-[#C6A75E]" viewBox="0 0 100 100" fill="none">
            <polygon points="50,5 89,27 89,73 50,95 11,73 11,27" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" fill="rgba(31,42,68,0.4)" />
            <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" stroke="#E8DCC8" strokeWidth="1" opacity="0.6" />
            <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="2.5" fill="#1F2A44" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Tech status badge annotation (Consultant precision) */}
      <div className="absolute bottom-6 right-6 backdrop-blur-md bg-[#1F2A44]/90 border border-[#C6A75E]/30 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#C6A75E] animate-ping" />
        <span className="font-mono text-[11px] tracking-widest text-[#E8DCC8]/90 uppercase">AI-INTEGRATED</span>
      </div>

      {/* Developer note hidden in UI for future SVG placement */}
      {/* [Future Swap]: Replace this container contents with <MetallicPaint src="/assets/logo-final.svg" /> */}
    </div>
  );
}
