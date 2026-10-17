import React from 'react';
import { Download, Printer, FileCode, CheckCircle2 } from 'lucide-react';

interface DiagramToolbarProps {
  onExportSvg: () => void;
  onExportPng: () => void;
  onPrint: () => void;
}

export const DiagramToolbar: React.FC<DiagramToolbarProps> = ({
  onExportSvg,
  onExportPng,
  onPrint,
}) => {
  return (
    <div className="w-full bg-white border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 no-print shadow-xs">
      {/* Visual format hint */}
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span className="font-semibold text-slate-800">
          Ilustración Funcional Simplificada
        </span>
        <span className="text-slate-300">·</span>
        <span>Formato Widescreen 16:9</span>
        <span className="text-slate-300">·</span>
        <span>Vista superior con silueta en gris claro</span>
      </div>

      {/* Export & Print Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onExportSvg}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          title="Exportar archivo vectorial SVG puro sin pérdida de calidad"
        >
          <FileCode className="w-3.5 h-3.5 text-blue-600" />
          <span>Descargar SVG</span>
        </button>
        <button
          onClick={onExportPng}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          title="Exportar imagen PNG de alta definición en formato horizontal 16:9"
        >
          <Download className="w-3.5 h-3.5 text-emerald-600" />
          <span>Descargar PNG (16:9 HD)</span>
        </button>
        <button
          onClick={onPrint}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          title="Imprimir o guardar en PDF"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" />
          <span>Imprimir</span>
        </button>
      </div>
    </div>
  );
};
