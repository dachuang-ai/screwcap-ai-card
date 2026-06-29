import React from 'react';
import { MessageSquareText, SearchCode, Cpu, Wrench, RefreshCw } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      num: '1',
      title: '初步諮詢',
      desc: '了解企業現況、目標與目前卡點。',
      icon: <MessageSquareText className="w-6 h-6 text-[#C6A75E]" />
    },
    {
      num: '2',
      title: '問題盤點',
      desc: '判斷是網站問題、曝光問題、流程問題、系統問題、內容問題，還是聲譽問題。',
      icon: <SearchCode className="w-6 h-6 text-[#C6A75E]" />
    },
    {
      num: '3',
      title: '工具選型',
      desc: '選擇最適合的 AI、網站、系統、廣告或內容工具。',
      icon: <Cpu className="w-6 h-6 text-[#C6A75E]" />
    },
    {
      num: '4',
      title: '整合執行',
      desc: '規劃流程、建立架構、導入工具、完成初步落地。',
      icon: <Wrench className="w-6 h-6 text-[#C6A75E]" />
    },
    {
      num: '5',
      title: '優化與維護',
      desc: '根據實際使用狀況與數據持續調整。',
      icon: <RefreshCw className="w-6 h-6 text-[#C6A75E]" />
    }
  ];

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-[#1F2A44] relative border-b border-[#E8DCC8]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-20">
          <p className="text-xs font-mono tracking-widest text-[#C6A75E] uppercase mb-3">
            METHODOLOGY & PROCESS
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.25]">
            不是直接開工，<br />
            而是先<span className="text-[#C6A75E]">判斷問題</span>。
          </h2>
        </div>

        {/* 5 步驟流程設計 (Apple 等級時間軸感) */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C6A75E]/20 via-[#C6A75E] to-[#C6A75E]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="group flex flex-col items-start bg-[#111827]/80 hover:bg-[#111827] border border-[#E8DCC8]/15 hover:border-[#C6A75E] rounded-3xl p-8 transition-all duration-500 shadow-lg text-left"
              >
                {/* Number Ring */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F2A44] border border-[#C6A75E]/50 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#C6A75E] group-hover:text-[#1F2A44] transition-all duration-500 text-[#C6A75E]">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#C6A75E]/40 group-hover:text-[#C6A75E] transition-colors">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {step.title}
                </h3>

                <p className="text-sm text-[#E8DCC8]/80 leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Bottom accent indicator */}
                <div className="mt-8 pt-4 w-full border-t border-[#E8DCC8]/10 flex items-center justify-between text-[11px] font-mono text-[#C6A75E]/80">
                  <span>PHASE 0{step.num}</span>
                  <span>{idx < 4 ? '→' : '✓'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
