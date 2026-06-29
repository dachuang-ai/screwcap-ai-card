import React from 'react';

export default function LiquidGlassButton({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary'
  className = '',
  type = 'button',
  fullWidthMobile = true,
  icon = null
}) {
  const isPrimary = variant === 'primary';

  // Base styles: capsule, glass blur, high quality border refraction, smooth transitions
  const baseStyles = `
    relative group inline-flex items-center justify-center gap-3 px-8 py-4 
    rounded-full font-medium text-sm tracking-wider transition-all duration-300 
    select-none backdrop-blur-md overflow-hidden cursor-pointer
    active:scale-[0.98] active:translate-y-0
    ${fullWidthMobile ? 'w-full sm:w-auto' : ''}
  `;

  // Primary variant
  const primaryStyles = `
    bg-[rgba(198,167,94,0.22)] 
    border border-[rgba(198,167,94,0.45)] 
    text-[#FFFFFF] shadow-[0_8px_32px_0_rgba(31,42,68,0.37)]
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(198,167,94,0.2)]
    hover:bg-[rgba(198,167,94,0.32)]
    hover:border-[#C6A75E]
    hover:shadow-[0_12px_40px_rgba(198,167,94,0.35),inset_0_1px_3px_rgba(255,255,255,0.6)]
    hover:-translate-y-0.5
  `;

  // Secondary variant
  const secondaryStyles = `
    bg-[rgba(232,220,200,0.08)] 
    border border-[rgba(232,220,200,0.22)] 
    text-[#E8DCC8] shadow-[0_4px_24px_0_rgba(31,42,68,0.2)]
    shadow-[inset_0_1px_1px_rgba(232,220,200,0.15)]
    hover:bg-[rgba(232,220,200,0.15)]
    hover:border-[rgba(232,220,200,0.45)]
    hover:text-white
    hover:shadow-[0_8px_32px_rgba(232,220,200,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)]
    hover:-translate-y-0.5
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${isPrimary ? primaryStyles : secondaryStyles} ${className}`}
    >
      {/* Liquid glass top light reflection */}
      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Flowing soft gold shimmer effect on hover */}
      <span className={`absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent ${isPrimary ? 'via-[#C6A75E]/30' : 'via-[#E8DCC8]/20'} to-transparent transform skew-x-12 pointer-events-none transition-transform ease-out`} />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 font-sans tracking-widest text-sm font-semibold">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>

      {/* Bottom inner shadow refraction */}
      <span className="absolute inset-x-4 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
