import React from 'react';

interface TopBarProps {
  onExportSvg: () => void;
  onExportPng: () => void;
  onPrint: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onExportSvg,
  onExportPng,
  onPrint,
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-3.5 bg-white border-b border-slate-200 no-print">
      {/* Zone 1: Single text element wordmark */}
      <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
        Gestión de Alta Tensión (HV)
      </span>

      {/* Zone 2: clean single-line metadata text */}
      <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
        <span className="text-slate-900 font-bold whitespace-nowrap shrink-0">
          El Cerebro y el Músculo
        </span>
        <span className="text-slate-300">·</span>
        <span className="text-slate-600 whitespace-nowrap shrink-0">
          Red 400 V CC Aislada del Chasis
        </span>
        <span className="text-slate-300">·</span>
        <span className="text-orange-600 font-bold whitespace-nowrap shrink-0">
          Cables HV Naranja
        </span>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          onClick={onExportSvg}
          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
        >
          Descargar SVG
        </button>
      </div>
    </header>
  );
};
