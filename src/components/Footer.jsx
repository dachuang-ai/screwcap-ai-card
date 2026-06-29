import React from 'react';
import { Hexagon, MessageCircle, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer({ onSelectService }) {
  const serviceCategories = [
    'AI 導入與自動化',
    '網站與數位門面',
    '企業系統與流程管理',
    '搜尋曝光與廣告代操',
    '品牌策略與內容企劃',
    '聲譽管理與公關危機處理'
  ];

  return (
    <footer className="bg-[#111827] text-[#E8DCC8] pt-20 pb-12 border-t border-[#E8DCC8]/15 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8DCC8]/10">
          
          {/* 左側品牌認證 (col 5) */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3 select-none">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1F2A44] border border-[#C6A75E]/60 shadow-md">
                <Hexagon className="w-5 h-5 text-[#C6A75E]" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block">螺絲帽先生</span>
                <span className="font-mono text-xs text-[#C6A75E] tracking-wider uppercase">AI 跨媒體整合顧問</span>
              </div>
            </div>

            <p className="text-sm text-[#E8DCC8]/80 leading-relaxed max-w-sm font-normal">
              取代「知行跨媒體廣告行銷」全新主品牌。協助中小企業整合 AI、自動化、網站、企業系統、SEO/GEO、Google 商家與數位廣告，打造真正能落地執行的跨媒體解決方案。
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#C6A75E]">
              <span>把 AI、網站、系統與行銷工具，鎖成解決方案。</span>
            </div>
          </div>

          {/* 中間：Footer 服務分類 (col 4) */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase text-[#C6A75E] tracking-widest mb-6 font-semibold">
              整合服務分類 MODULES
            </h4>
            <ul className="space-y-3">
              {serviceCategories.map((cat, idx) => (
                <li key={idx}>
                  <a 
                    href="#services"
                    onClick={() => onSelectService && onSelectService(cat)}
                    className="text-sm text-[#E8DCC8]/80 hover:text-[#C6A75E] hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#C6A75E]/60">0{idx + 1}.</span>
                    <span>{cat}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側：Footer 聯絡資訊先預留 (col 3) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase text-[#C6A75E] tracking-widest mb-6 font-semibold">
              聯絡與官方連結 CONTACT
            </h4>
            <div className="space-y-4 text-sm text-[#E8DCC8]/85">
              {/* LINE */}
              <a href="#" className="flex items-center gap-3 group hover:text-[#C6A75E] transition-colors">
                <div className="p-2 rounded-lg bg-[#1F2A44] text-[#C6A75E] group-hover:bg-[#C6A75E] group-hover:text-[#111827] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>官方 LINE 諮詢</span>
              </a>

              {/* Email */}
              <a href="mailto:consult@mr-nut.tw" className="flex items-center gap-3 group hover:text-[#C6A75E] transition-colors">
                <div className="p-2 rounded-lg bg-[#1F2A44] text-[#C6A75E] group-hover:bg-[#C6A75E] group-hover:text-[#111827] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs">consult@mr-nut.tw</span>
              </a>

              {/* 電話 */}
              <div className="flex items-center gap-3 text-[#E8DCC8]/70">
                <div className="p-2 rounded-lg bg-[#1F2A44] text-[#C6A75E]/70">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs">預留顧問專線</span>
              </div>

              {/* Google 商家連結 */}
              <a href="#" className="flex items-center gap-3 group hover:text-[#C6A75E] transition-colors">
                <div className="p-2 rounded-lg bg-[#1F2A44] text-[#C6A75E] group-hover:bg-[#C6A75E] group-hover:text-[#111827] transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="flex items-center gap-1 text-xs">
                  <span>Google 商家檔案</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </span>
              </a>

              {/* 社群連結預留 */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-mono text-[#E8DCC8]/50 uppercase">社群頻道</span>
                <div className="h-[1px] flex-1 bg-[#E8DCC8]/10" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E8DCC8]/50">
          <p>© {new Date().getFullYear()} 螺絲帽先生 (Mr. Nut) All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>隱私權聲明</span>
            <span>服務條款</span>
            <span className="text-[#C6A75E]/80">AI Cross-Media Integrated Consultant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
