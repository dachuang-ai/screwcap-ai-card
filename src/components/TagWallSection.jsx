import React from 'react';

export default function TagWallSection() {
  const tags = [
    'AI 導入', 'AI 自動化', '企業系統', 'Ragic', 'WordPress', 
    '客製網站', '一頁式網站', '落地頁', 'SEO/GEO', 'Google 商家', 
    'Google Ads', '各平台廣告代操', '社群營運', '企劃書撰寫', '廣告企劃', 
    '主視覺設計', 'AI 短影音', 'AI 數位人', '品牌顧問', '聲譽人設重建', 
    '緊急公關處理', '維基百科協助', 'G2 驗證協助'
  ];

  // Divide into 2 rows for bidirectional luxury marquee flow
  const row1 = tags.slice(0, Math.ceil(tags.length / 2));
  const row2 = tags.slice(Math.ceil(tags.length / 2));

  return (
    <section className="py-20 bg-[#111827] border-b border-[#E8DCC8]/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center sm:text-left">
        <p className="font-mono text-xs text-[#C6A75E] tracking-widest uppercase">
          INTEGRATED TECH & MARKETING CAPABILITIES
        </p>
      </div>

      {/* Marquee Row 1 (Left to Right) */}
      <div className="flex overflow-hidden relative w-full mb-5 py-2">
        <div className="flex animate-marquee whitespace-nowrap gap-4 sm:gap-6">
          {[...row1, ...row1, ...row1].map((tag, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F2A44]/80 border border-[#C6A75E]/25 text-sm font-sans tracking-wider text-[#E8DCC8] hover:border-[#C6A75E] hover:text-white transition-colors cursor-default backdrop-blur-md shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="flex overflow-hidden relative w-full py-2">
        <div className="flex animate-marqueeReverse whitespace-nowrap gap-4 sm:gap-6">
          {[...row2, ...row2, ...row2].map((tag, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F2A44]/60 border border-[#E8DCC8]/20 text-sm font-sans tracking-wider text-[#E8DCC8]/90 hover:border-[#C6A75E] hover:text-white transition-colors cursor-default backdrop-blur-md shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8DCC8]/60" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CSS Marquee Animations injected directly or via tailwind */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marqueeReverse {
          animation: marqueeReverse 38s linear infinite;
        }
        .animate-marquee:hover, .animate-marqueeReverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
