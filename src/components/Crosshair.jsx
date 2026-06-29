import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Crosshair({ color = '#C6A75E', opacity = 0.45 }) {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const verticalRef = useRef(null);
  const ringRef = useRef(null);
  const coordsRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop screens (>= 1024px) and non-touch primary input
    const checkDesktop = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsEnabled(isLargeScreen && !isTouchOnly);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(horizontalRef.current, {
        y: clientY,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      gsap.to(verticalRef.current, {
        x: clientX,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      gsap.to(ringRef.current, {
        x: clientX - 16,
        y: clientY - 16,
        duration: 0.25,
        ease: 'power3.out',
        overwrite: 'auto'
      });

      if (coordsRef.current) {
        gsap.to(coordsRef.current, {
          x: clientX + 24,
          y: clientY + 24,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        coordsRef.current.innerText = `X:${clientX} Y:${clientY}`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-[40]"
      style={{ mixBlendMode: 'normal' }}
    >
      {/* Vertical line */}
      <div
        ref={verticalRef}
        className="absolute top-0 bottom-0 w-[1px] -translate-x-1/2 will-change-transform"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${color} 20%, ${color} 80%, transparent 100%)`,
          opacity: opacity
        }}
      />
      {/* Horizontal line */}
      <div
        ref={horizontalRef}
        className="absolute left-0 right-0 h-[1px] -translate-y-1/2 will-change-transform"
        style={{
          background: `linear-gradient(to right, transparent 0%, ${color} 20%, ${color} 80%, transparent 100%)`,
          opacity: opacity
        }}
      />
      {/* Target focus ring */}
      <div
        ref={ringRef}
        className="absolute w-8 h-8 rounded-full border border-[#C6A75E]/60 will-change-transform transition-opacity duration-300"
        style={{ opacity: 0.6 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#C6A75E] rounded-full opacity-80" />
      </div>
      {/* Coordinates display (subtle tech consultant feel) */}
      <div
        ref={coordsRef}
        className="absolute font-mono text-[10px] tracking-widest uppercase text-[#C6A75E]/70 select-none will-change-transform bg-[#1F2A44]/80 px-1.5 py-0.5 rounded border border-[#C6A75E]/20 backdrop-blur-xs hidden xl:block"
      >
        X:0 Y:0
      </div>
    </div>
  );
}
