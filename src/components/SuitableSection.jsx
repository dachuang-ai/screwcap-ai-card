import React from 'react';
import { Building2, Factory, Stethoscope, GraduationCap, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SuitableSection() {
  const targetEnterprises = [
    {
      title: '中小企業主',
      icon: <Building2 className="w-8 h-8 text-[#C6A75E]" />,
      subtitle: '資源有限，老闆或主管身兼多職',
      pain: '買了很多行銷軟體、SaaS 系統或外包多個團隊，但各做各的，數據散落各處，團隊執行率低。',
      solution: '重新梳理營運邏輯，把 AI 文案生成、客服自動化與 CRM 串接成一體化系統，讓少數人力發揮倍數產能。'
    },
    {
      title: '傳統產業',
      icon: <Factory className="w-8 h-8 text-[#C6A75E]" />,
      subtitle: '面臨二代接班或數位轉型卡點',
      pain: '訂單與庫存高度依賴紙本、Excel 與老員工記憶，官網是十年前老舊模板，難以吸引新世代 B2B 買家。',
      solution: '建置 Ragic 客製化企業資料系統與具備現代化 UX/UI 的品牌官網，無縫銜接 Google B2B 搜尋廣告曝光。'
    },
    {
      title: '診所 / 律師 / 顧問',
      icon: <Stethoscope className="w-8 h-8 text-[#C6A75E]" />,
      subtitle: '高度依賴專業聲譽與信任感',
      pain: '搜尋結果出現過時或負面評價，Google 商家資訊混亂，病患或客戶詢問常卡在重複性基本 Q&A。',
      solution: '執行 GEO/SEO 搜尋聲譽優化與 Google 商家 G2 驗證，建立專業顧問型個人官網與 AI 預約導流機器人。'
    },
    {
      title: '教育產業 / 協會組織',
      icon: <GraduationCap className="w-8 h-8 text-[#C6A75E]" />,
      subtitle: '會員眾多、報名與專案流程繁雜',
      pain: '課程報名、繳費確認、活動通知與理監事文件交接耗費大量人工行政，社群內容更新頻率不穩定。',
      solution: '打造自動化報名會員追蹤系統與 AI 數位人短影音內容生產流程，大幅釋放秘書處行政負擔。'
    }
  ];

  return (
    <section id="suitable" className="py-24 sm:py-32 bg-[#111827]/60 relative border-b border-[#E8DCC8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono tracking-widest text-[#C6A75E] uppercase mb-3">
            WHO IS THIS FOR
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.25]">
            適合正在從傳統營運<br />
            走向 <span className="text-[#C6A75E]">AI 整合</span>的企業。
          </h2>
        </div>

        {/* 四個對象卡片 (單欄或 2x2 精密排列) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetEnterprises.map((item) => (
            <div 
              key={item.title}
              className="group relative bg-[#1F2A44] hover:bg-[#1F2A44]/90 border border-[#E8DCC8]/15 hover:border-[#C6A75E]/60 rounded-3xl p-8 sm:p-10 transition-all duration-500 shadow-xl flex flex-col justify-between text-left"
            >
              <div>
                {/* Top Identity */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E8DCC8]/10">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#111827] border border-[#C6A75E]/30 group-hover:border-[#C6A75E] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#C6A75E] mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pain point */}
                <div className="mb-6 p-4 rounded-2xl bg-[#111827]/60 border border-red-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>核心痛點瓶頸</span>
                  </div>
                  <p className="text-sm text-[#E8DCC8]/80 leading-relaxed font-normal">
                    {item.pain}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 rounded-2xl bg-[#C6A75E]/10 border border-[#C6A75E]/30">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C6A75E] uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>螺絲帽先生整合解方</span>
                  </div>
                  <p className="text-sm text-white leading-relaxed font-normal">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Shimmer line */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
