import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  layout?: 'horizontal' | 'stacked';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  layout = 'horizontal',
}) => {
  const sizeConfig = {
    sm: {
      iconSize: 24,
      title: 'text-base sm:text-xl tracking-wider',
      subtitle: 'text-[7.5px] sm:text-[9px] tracking-[0.18em]',
      gap: 'gap-1.5 sm:gap-2',
    },
    md: {
      iconSize: 26, // 26px on ultra-compact mobile, scales cleanly
      title: 'text-lg sm:text-2xl lg:text-3xl tracking-wider',
      subtitle: 'text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.26em]',
      gap: 'gap-2 sm:gap-3',
    },
    lg: {
      iconSize: 38,
      title: 'text-2xl sm:text-4xl lg:text-5xl tracking-wider',
      subtitle: 'text-[10px] sm:text-sm tracking-[0.25em]',
      gap: 'gap-2.5 sm:gap-4',
    },
    xl: {
      iconSize: 52,
      title: 'text-3xl sm:text-5xl lg:text-6xl tracking-wider',
      subtitle: 'text-xs sm:text-base tracking-[0.28em]',
      gap: 'gap-3.5 sm:gap-5',
    },
  }[size];

  return (
    <div
      className={`inline-flex ${
        layout === 'stacked' ? 'flex-col items-center text-center' : 'items-center'
      } ${sizeConfig.gap} select-none ${className}`}
    >
      {/* Geometric Apex Symbol (The Vértice) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={sizeConfig.iconSize}
          height={sizeConfig.iconSize * 1.05}
          viewBox="0 0 36 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(200,240,49,0.3)]"
          aria-hidden="true"
        >
          {/* Left Faceted Wing */}
          <path d="M 18 2 L 3 33 L 11 33 L 18 18 Z" fill="#FFFFFF" />
          {/* Right Faceted Wing with dimensional shading */}
          <path d="M 18 2 L 33 33 L 25 33 L 18 18 Z" fill="#A3A3A3" />
          {/* The Vértice (Sharp Neon Apex Crest) */}
          <path d="M 18 2 L 23 13 L 18 10 L 13 13 Z" fill="#C8F031" />
          {/* Base Foundation Bar */}
          <rect x="6" y="35" width="24" height="2.5" rx="1.25" fill="#C8F031" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`${sizeConfig.title} font-display font-extrabold uppercase text-white leading-none`}
          >
            VÉRTICE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031]" />
        </div>

        {showSubtitle && (
          <span
            className={`${sizeConfig.subtitle} font-mono font-bold text-neutral-400 uppercase pt-0.5 sm:pt-1 block whitespace-nowrap`}
          >
            CENTRO DE TREINAMENTO
          </span>
        )}
      </div>
    </div>
  );
};

export const BrandBadge: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-lg bg-black/90 border border-white/20 flex items-center justify-center shadow-xl backdrop-blur-md ${className}`}
    >
      <svg
        width={size * 0.65}
        height={size * 0.65}
        viewBox="0 0 36 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 18 2 L 3 33 L 11 33 L 18 18 Z" fill="#FFFFFF" />
        <path d="M 18 2 L 33 33 L 25 33 L 18 18 Z" fill="#A3A3A3" />
        <path d="M 18 2 L 23 13 L 18 10 L 13 13 Z" fill="#C8F031" />
        <rect x="6" y="35" width="24" height="2.5" rx="1.25" fill="#C8F031" />
      </svg>
    </div>
  );
};
