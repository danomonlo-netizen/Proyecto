import React from 'react';
import { BlockData } from '../types/powertrain';
import { POWERTRAIN_BLOCKS } from '../data/powertrainData';
import { BlockIcon } from './SvgIcons';
import { X, ExternalLink } from 'lucide-react';

interface BlockListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBlock: (block: BlockData) => void;
}

export const BlockListModal: React.FC<BlockListModalProps> = ({ isOpen, onClose, onSelectBlock }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Componentes del Tren Motriz VHE (1 al 14)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Listado completo de bloques funcionales del vehículo eléctrico urbano con arquitectura skateboard
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Grid of 14 blocks */}
        <div className="p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {POWERTRAIN_BLOCKS.sort((a, b) => a.number - b.number).map((block) => (
            <div
              key={block.id}
              onClick={() => {
                onSelectBlock(block);
                onClose();
              }}
              className="p-3.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer flex items-start gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-800 shrink-0 font-mono group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {block.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 truncate">
                    {block.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 shrink-0 ml-1" />
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {block.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                  {block.specs.slice(0, 2).map((s, idx) => (
                    <span key={idx}>
                      <span className="font-medium text-slate-400">{s.label}:</span>{' '}
                      <span className="font-semibold">{s.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Haz clic en cualquier bloque para ver su ficha técnica completa</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
