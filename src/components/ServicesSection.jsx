import React from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { Bot, Globe, Database, Megaphone, Lightbulb, ShieldAlert } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const services = [
    {
      id: '01',
      title: 'AI 導入與自動化整合',
      desc: '協助企業把 AI 工具導入日常工作，降低重複作業，提高內容、客服、行政與管理效率。',
      icon: <Bot className="w-7 h-7 text-[#C6A75E]" />,
      items: [
        'AI 導入顧問', 'AI 工具應用規劃', 'AI 自動化流程設計', 
        'AI 文件生成流程', 'AI 客服 / 自動回覆流程', 'AI 工作流程優化', 
        'AI 短影音製作', 'AI 數位人應用', '企業內部 AI 應用教學'
      ]
    },
    {
      id: '02',
      title: '網站與數位門面建置',
      desc: '協助企業建立專業可信任的線上門面，讓客戶看得懂、願意詢問，也能配合廣告與搜尋曝光。',
      icon: <Globe className="w-7 h-7 text-[#C6A75E]" />,
      items: [
        'WordPress 網站', '客製化網站', '品牌形象官網', 
        '一頁式網站', '廣告落地頁', '活動頁 / 銷售頁', 
        '顧問型個人品牌網站', '診所 / 律師 / 協會 / 教育產業網站', '網站 UX/UI 規劃', '網站文案架構規劃'
      ]
    },
    {
      id: '03',
      title: '企業系統與流程管理',
      desc: '把原本散在 Excel、LINE、紙本與人腦裡的資料，整理成可以查詢、管理、追蹤與交接的系統。',
      icon: <Database className="w-7 h-7 text-[#C6A75E]" />,
      items: [
        'Ragic 系統規劃', '企業管理系統', '進銷存系統', 
        '客戶管理 CRM', '表單流程系統', '報名 / 課程 / 會員管理', 
        '協會專案管理系統', '內部資料庫建置', '權限與流程設計', '報表與資料彙整'
      ]
    },
    {
      id: '04',
      title: '搜尋曝光與數位廣告代操',
      desc: '協助企業在 Google、社群與 AI 搜尋中被看見，並透過廣告與搜尋優化帶來詢問與轉換。',
      icon: <Megaphone className="w-7 h-7 text-[#C6A75E]" />,
      items: [
        'Google Ads 代操', 'Meta / Facebook 廣告代操', 'Instagram 廣告代操', 
        'YouTube 廣告規劃', '各平台廣告代操', '廣告企劃', 
        '廣告素材方向規劃', '廣告落地頁規劃', '廣告成效追蹤與優化', 
        'Google 商家優化', 'Google 商家驗證協助', 'G2 驗證協助', 
        'SEO 搜尋優化', 'GEO 生成式搜尋優化', 'AI 搜尋曝光規劃'
      ]
    },
    {
      id: '05',
      title: '品牌策略與內容企劃',
      desc: '協助企業釐清品牌定位、服務價值與對外溝通方式，讓客戶知道你是誰、做什麼、為什麼值得信任。',
      icon: <Lightbulb className="w-7 h-7 text-[#C6A75E]" />,
      items: [
        '品牌顧問', '品牌定位', '品牌故事', 
        '企劃書撰寫', '提案簡報規劃', '廣告企劃', 
        '主視覺設計', '社群營運', '社群內容規劃', 
        '品牌人設規劃', '個人品牌包裝', '企業形象文案', '服務頁文案', '案例包裝'
      ]
    },
    {
      id: '06',
      title: '聲譽管理與公關危機處理',
      desc: '協助企業或個人面對搜尋負面、形象混亂、公眾誤解或品牌信任受損問題，重新建立可信任的對外形象。',
      icon: <ShieldAlert className="w-7 h-7 text-[#C6A75E]" />,
      items: [
        '聲譽人設重建', '緊急公關處理', '網路負面資訊應對', 
        '搜尋聲譽規劃', '品牌形象修復', '個人形象重建', 
        '維基百科條目協助', '維基百科內容整理', '公開資料盤點', 
        '媒體資料整理', '對外聲明 / FAQ / 回應稿規劃', 'Google 搜尋結果優化', '長期聲譽經營策略'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#1F2A44] relative border-b border-[#E8DCC8]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 sm:mb-20">
          <p className="text-xs font-mono tracking-widest text-[#C6A75E] uppercase mb-3">
            01-06 INTEGRATED MODULES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.25]">
            六大整合服務，<br />
            協助企業從工具使用走向<span className="text-[#C6A75E]">系統化營運</span>。
          </h2>
        </div>

        {/* 6 張高級玻璃卡片：單欄排列 (Prompt requirement: 卡片要單欄排列) */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-[#111827]/70 hover:bg-[#111827]/90 border border-[#E8DCC8]/15 hover:border-[#C6A75E]/70 rounded-3xl p-6 sm:p-12 backdrop-blur-xl transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Ambient background reflection */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C6A75E]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C6A75E]/15 transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-[#E8DCC8]/10">
                {/* 左側：編號 01-06 + Icon + 標題說明 */}
                <div className="flex items-start gap-5 sm:gap-8 max-w-3xl text-left">
                  <div className="flex flex-col items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1F2A44] border border-[#C6A75E]/40 shadow-inner group-hover:border-[#C6A75E] transition-colors">
                    <span className="font-mono font-bold text-lg sm:text-2xl text-[#C6A75E]">
                      {service.id}
                    </span>
                    <div className="mt-0.5 scale-75 sm:scale-90">{service.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wide flex items-center gap-3">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#E8DCC8]/85 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* 右側 CTA：預約此服務 */}
                <div className="w-full lg:w-auto shrink-0 flex justify-start lg:justify-end">
                  <LiquidGlassButton 
                    variant="secondary"
                    onClick={() => onSelectService(service.title)}
                    fullWidthMobile={true}
                    className="!px-6 !py-3 text-xs border-[#C6A75E]/30 text-[#C6A75E] hover:border-[#C6A75E]"
                  >
                    諮詢此整合模組
                  </LiquidGlassButton>
                </div>
              </div>

              {/* 下方細項清單 (清晰列出，Apple 產品規格表感) */}
              <div className="relative z-10 pt-8 text-left">
                <p className="font-mono text-xs text-[#C6A75E]/80 tracking-widest uppercase mb-5 flex items-center gap-2">
                  <span>包含細項服務項目</span>
                  <span className="h-[1px] flex-1 bg-[#C6A75E]/20" />
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                  {service.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 text-sm text-[#E8DCC8]/90 font-sans group/item py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]/60 group-hover/item:bg-[#C6A75E] group-hover/item:scale-125 transition-all" />
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Gold Accent Line */}
              <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-transparent via-[#C6A75E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
