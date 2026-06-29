import React, { useState } from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '中小企業主',
    contact: '',
    serviceCategory: initialService || 'AI 導入與自動化整合',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'AI 導入與自動化整合',
    '網站與數位門面建置',
    '企業系統與流程管理',
    '搜尋曝光與數位廣告代操',
    '品牌策略與內容企劃',
    '聲譽管理與公關危機處理',
    '綜合營運與多項需求'
  ];

  const industries = [
    '中小企業主',
    '傳統產業',
    '診所 / 醫療衛生',
    '律師 / 會計師 / 專業顧問',
    '教育產業 / 培訓機構',
    '協會組織 / 公益團體',
    '需要品牌重建 / 聲譽處理的個人或企業',
    '其他'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111827]/80 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#1F2A44] border border-[#C6A75E]/40 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden text-[#E8DCC8] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top ambient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E8DCC8] via-[#C6A75E] to-[#1F2A44]" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#E8DCC8]/10 hover:bg-[#E8DCC8]/20 text-[#E8DCC8] hover:text-[#C6A75E] transition-colors cursor-pointer z-10"
          aria-label="關閉視窗"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A75E]/15 border border-[#C6A75E]/30 text-[#C6A75E] text-xs font-mono tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EXECUTIVE CONSULTATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  預約整合諮詢
                </h3>
                <p className="text-sm text-[#E8DCC8]/80 leading-relaxed">
                  企業不缺工具，缺的是有人幫你判斷該用什麼、怎麼接起來。請留下基本資訊，螺絲帽先生將於 24 小時內親自與您聯繫。
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C6A75E] tracking-wider mb-2">
                      您的稱呼 / 姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例如：林經理 / David"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111827]/60 border border-[#E8DCC8]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#E8DCC8]/30 focus:outline-none focus:border-[#C6A75E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C6A75E] tracking-wider mb-2">
                      公司 / 組織名稱
                    </label>
                    <input
                      type="text"
                      placeholder="例如：知行實業有限公司"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#111827]/60 border border-[#E8DCC8]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#E8DCC8]/30 focus:outline-none focus:border-[#C6A75E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C6A75E] tracking-wider mb-2">
                      產業類別 *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-[#111827]/60 border border-[#E8DCC8]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A75E] transition-colors"
                    >
                      {industries.map((item) => (
                        <option key={item} value={item} className="bg-[#1F2A44] text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C6A75E] tracking-wider mb-2">
                      聯絡方式（Email 或 LINE ID） *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例如：john@example.com 或 @line_id"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-[#111827]/60 border border-[#E8DCC8]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#E8DCC8]/30 focus:outline-none focus:border-[#C6A75E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#C6A75E] tracking-wider mb-2">
                    目前最希望優先處理的核心模組
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-[#111827]/60 border border-[#E8DCC8]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A75E] transition-colors"
                  >
                    {categories.map((item) => (
                      <option key={item} value={item} className="bg-[#1F2A44] text-white">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#C6A75E] tracking-wider mb-2">
                    目前遇到的主要卡點或諮詢內容簡述
                  </label>
                  <textarea
                    rows={4}
                    placeholder="例如：目前團隊有用 ChatGPT 但很散，另外官網是老舊模板，廣告成效不佳，希望能整體評估該怎麼接成自動化流程..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#111827]/60 border border-[#E8DCC8]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#E8DCC8]/30 focus:outline-none focus:border-[#C6A75E] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <LiquidGlassButton 
                    type="submit" 
                    variant="primary" 
                    fullWidthMobile={true}
                    className="!w-full !py-4 text-base"
                    icon={<Send className="w-4 h-4 ml-1" />}
                  >
                    送出諮詢申請
                  </LiquidGlassButton>
                  <p className="text-center text-xs text-[#E8DCC8]/50 mt-3">
                    🔒 我們承諾嚴格保密所有企業商業與聯絡資訊
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="py-12 px-4 text-center">
              <div className="w-16 h-16 bg-[#C6A75E]/20 border border-[#C6A75E] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C6A75E] animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                諮詢需求已成功送出！
              </h3>
              <p className="text-sm sm:text-base text-[#E8DCC8]/80 max-w-md mx-auto leading-relaxed mb-8">
                感謝 {formData.name} 的諮詢預約。螺絲帽先生已收到您的訊息，我們將於 24 小時內為您初步盤點問題並透過 {formData.contact} 與您聯繫。
              </p>
              <LiquidGlassButton variant="secondary" onClick={onClose}>
                返回官方網站
              </LiquidGlassButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
