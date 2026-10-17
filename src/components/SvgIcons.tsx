import React from 'react';

interface SvgIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const BlockIcon: React.FC<SvgIconProps> = ({ name, size = 28, color = 'currentColor' }) => {
  switch (name) {
    // Battery like in reference picture (3 colorful cells)
    case 'battery-3cells':
    case 'battery':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          {/* Battery housing */}
          <rect x="2" y="7" width="25" height="18" rx="3" stroke="#e11d48" strokeWidth="2.2" fill="#fff" />
          <path d="M27 12h2.5v8H27" fill="#e11d48" />
          {/* 3 internal battery cells */}
          <rect x="5" y="10" width="5.5" height="12" rx="1" fill="#ef4444" />
          <rect x="12" y="10" width="5.5" height="12" rx="1" fill="#f59e0b" />
          <rect x="19" y="10" width="5.5" height="12" rx="1" fill="#10b981" />
        </svg>
      );

    // Motor like in reference picture (green circle with ~ wave)
    case 'motor-ac':
    case 'motor':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="#059669" strokeWidth="2.5" fill="#ecfdf5" />
          <path
            d="M9 16c2-3 4-3 7 0s5 3 7 0"
            stroke="#059669"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );

    // VCU (Central brain icon)
    case 'brain':
    case 'vcu':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      );

    // Supercapacitors
    case 'zap':
    case 'supercapacitores':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4v16" strokeWidth="2.5" />
          <path d="M17 4v16" strokeWidth="2.5" />
          <path d="M2 12h5" />
          <path d="M17 12h5" />
          <path d="M13 8l-2 4h3l-2 4" strokeWidth="1.8" strokeLinejoin="bevel" fill="#fbbf24" />
        </svg>
      );

    // Inverter (DC/AC conversion symbol)
    case 'inverter-wave':
    case 'inversor':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="4" y1="8" x2="8" y2="8" strokeWidth="2" />
          <line x1="4" y1="11" x2="8" y2="11" strokeWidth="2" />
          <line x1="9" y1="17" x2="15" y2="7" strokeWidth="1.5" strokeDasharray="1 1" />
          <path d="M16 13c1-2 2-2 3 0s1 2 2 0" strokeWidth="2" />
        </svg>
      );

    // BMS (Battery Management System chip)
    case 'bms-chip':
    case 'bms':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="5" width="14" height="14" rx="2" fill="#eff6ff" />
          <rect x="9" y="9" width="6" height="6" fill="#2563eb" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );

    // MCU (Motor Control Unit)
    case 'mcu-controller':
    case 'mcu':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="9" x2="17" y2="9" />
          <line x1="7" y1="12" x2="13" y2="12" />
          <line x1="7" y1="15" x2="15" y2="15" />
          <circle cx="16" cy="15" r="1.5" fill="#0284c7" />
        </svg>
      );

    // Gears (Transmission)
    case 'gears':
    case 'transmision':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="4" />
          <path d="M9 3v2M9 13v2M3 9h2M13 9h2" />
          <circle cx="16" cy="16" r="3" />
          <path d="M16 11v2M16 19v2M11 16h2M19 16h2" />
        </svg>
      );

    // Plug like in reference picture (black wall plug with two prongs)
    case 'plug-external':
    case 'enchufe':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          {/* Main plug body */}
          <rect x="10" y="8" width="14" height="16" rx="3" fill="#1e293b" />
          {/* Prongs */}
          <rect x="2" y="11" width="8" height="3" rx="1" fill="#64748b" />
          <rect x="2" y="18" width="8" height="3" rx="1" fill="#64748b" />
          {/* Cable stub */}
          <rect x="24" y="14" width="6" height="4" rx="1" fill="#1e293b" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
};
