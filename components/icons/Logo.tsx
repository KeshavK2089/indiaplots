"use client";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C805" />
            <stop offset="50%" stopColor="#006AFF" />
            <stop offset="100%" stopColor="#00C805" />
          </linearGradient>
          <linearGradient id="plotGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#006AFF" />
            <stop offset="100%" stopColor="#00C805" />
          </linearGradient>
          <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>
        
        {/* Rounded square background */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="url(#logoGradient)"
          filter="url(#logoShadow)"
        />
        
        {/* Plot/Land icon - stylized grid representing land parcels */}
        <g transform="translate(10, 10)">
          {/* Main plot outline */}
          <path
            d="M14 4L24 9V19L14 24L4 19V9L14 4Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Inner detail - plot division */}
          <path
            d="M14 4V24M4 9L24 19M24 9L4 19"
            stroke="url(#plotGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          {/* Location pin dot */}
          <circle cx="14" cy="12" r="3" fill="url(#plotGradient)" />
        </g>
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-tight text-gray-900">
            India<span className="text-aurora">Plots</span>
          </span>
          <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
            AI Real Estate
          </span>
        </div>
      )}
    </div>
  );
}