import React, { useState, useEffect } from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { Menu, X, Hexagon } from 'lucide-react';

export default function Header({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '品牌定位', href: '#positioning' },
    { name: '六大服務', href: '#services' },
    { name: '適合企業', href: '#suitable' },
    { name: '工作方式', href: '#workflow' },
    { name: '品牌故事', href: '#story' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#1F2A44]/85 backdrop-blur-xl border-b border-[#C6A75E]/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Header 左上角 */}
        <a href="#" className="group flex items-center gap-3 focus:outline-none select-none">
          {/* 六角形 placeholder icon */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F2A44] to-[#111827] border border-[#C6A75E]/50 shadow-[inset_0_1px_2px_rgba(198,167,94,0.3)] transition-transform duration-300 group-hover:scale-105">
            <Hexagon className="w-5 h-5 text-[#C6A75E] transition-transform duration-500 group-hover:rotate-6" />
            <div className="absolute w-2 h-2 rounded-full bg-[#C6A75E]/80" />
          </div>

          {/* 旁邊顯示：螺絲帽先生 AI 跨媒體整合顧問 */}
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#E8DCC8] group-hover:text-white transition-colors">
              螺絲帽先生
            </span>
            {/* 桌機版完整顯示，手機版隱藏避免擁擠 */}
            <span className="hidden md:block font-mono text-xs text-[#C6A75E] tracking-wider uppercase opacity-90">
              AI 跨媒體整合顧問
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#E8DCC8]/80 hover:text-[#C6A75E] tracking-wider transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A75E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <LiquidGlassButton 
            variant="primary" 
            onClick={onOpenConsultation}
            fullWidthMobile={false}
            className="!px-6 !py-2.5 text-xs"
          >
            預約整合諮詢
          </LiquidGlassButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#E8DCC8]/5 border border-[#E8DCC8]/15 text-[#E8DCC8] hover:text-[#C6A75E] focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C6A75E]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-[#1F2A44]/95 backdrop-blur-2xl border-b border-[#C6A75E]/30 px-6 py-8 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-[#E8DCC8]/10">
              <p className="font-mono text-xs text-[#C6A75E] uppercase tracking-widest mb-1">定位與願景</p>
              <p className="text-sm text-[#E8DCC8]/80">螺絲帽先生｜AI 跨媒體整合顧問</p>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#E8DCC8] hover:text-[#C6A75E] flex items-center justify-between transition-colors py-1"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#C6A75E]/60">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <LiquidGlassButton 
                variant="primary" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                fullWidthMobile={true}
              >
                預約整合諮詢
              </LiquidGlassButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
