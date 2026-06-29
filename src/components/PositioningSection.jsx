import React from 'react';
import { Compass, Sliders, Layers, Sparkles } from 'lucide-react';

export default function PositioningSection() {
  const cards = [
    {
      step: '01',
      title: '判斷問題',
      desc: '釐清企業真正卡住的流程、曝光、管理或信任問題。',
      icon: <Compass className="w-6 h-6 text-[#C6A75E]" />
    },
    {
      step: '02',
      title: '選擇工具',
      desc: '不盲目追求最新技術，而是選擇最適合企業現況的工具。',
      icon: <Sliders className="w-6 h-6 text-[#C6A75E]" />
    },
    {
      step: '03',
      title: '整合落地',
      desc: '把 AI、網站、系統、廣告與內容接起來，成為企業真的能用的解決方案。',
      icon: <Layers className="w-6 h-6 text-[#C6A75E]" />
    }
  ];

  return (
    <section id="positioning" className="py-24 sm:py-32 bg-[#111827]/50 relative border-b border-[#E8DCC8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 高級顧問式排版：左側大標與理念，右側三個重點卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 左側大標區 (col 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C6A75E] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BRAND POSITIONING</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.3] mb-6">
              不是多做一個工具，<br />
              而是把工具<span className="text-[#C6A75E] underline decoration-[#C6A75E]/40 decoration-2 underline-offset-8">變成系統</span>。
            </h2>

            {/* 核心理念詩句排版 */}
            <div className="my-8 p-6 rounded-2xl bg-[#1F2A44]/60 border border-[#C6A75E]/20 font-mono text-sm leading-relaxed text-[#E8DCC8] shadow-inner">
              <p className="text-[#C6A75E] font-semibold mb-2">我不是工程師、</p>
              <p className="text-[#C6A75E] font-semibold mb-2">不是設計師、</p>
              <p className="text-[#C6A75E] font-semibold mb-4">不是廣告公司。</p>
              <p className="text-white text-xs sm:text-sm font-sans font-normal leading-relaxed pt-2 border-t border-[#E8DCC8]/15">
                我是把市場上最有效率的 AI 工具、網站工具、系統工具、廣告工具、SEO/GEO、社群內容與聲譽管理方法整合起來，協助企業解決實際問題的人。
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#E8DCC8]/80 leading-relaxed">
              螺絲帽先生不是傳統廣告公司，也不是單一技術服務商。我們的角色是協助企業判斷問題、選擇工具、規劃流程、整合執行，讓 AI、網站、系統、廣告、搜尋與內容真正進入日常營運。
            </p>
          </div>

          {/* 右側三個 重點卡片 (col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {cards.map((card) => (
              <div 
                key={card.step}
                className="group relative bg-[#1F2A44]/80 hover:bg-[#1F2A44] border border-[#E8DCC8]/15 hover:border-[#C6A75E]/60 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Card background liquid glass shine */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full blur-2xl group-hover:bg-[#C6A75E]/15 transition-all duration-500" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Step Badge & Icon */}
                  <div className="flex sm:flex-col items-center justify-between sm:justify-center shrink-0 w-full sm:w-20 sm:h-20 rounded-2xl bg-[#111827]/80 border border-[#C6A75E]/30 p-4 shadow-md group-hover:border-[#C6A75E] transition-colors">
                    <span className="font-mono font-bold text-lg text-[#C6A75E]">{card.step}</span>
                    <div className="sm:mt-1">{card.icon}</div>
                  </div>

                  {/* Text details */}
                  <div className="flex-1 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide flex items-center gap-3">
                      {card.title}
                    </h3>
                    <p className="text-base text-[#E8DCC8]/85 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
