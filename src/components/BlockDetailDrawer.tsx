import React, { useEffect } from 'react';
import { COMPONENT_DETAILS } from '../data/componentDetails';
import {
  X,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Radio,
  Sliders,
  Battery,
  Activity,
  Repeat,
  Plug,
} from 'lucide-react';

interface BlockDetailDrawerProps {
  selectedPartId: string | null;
  onClose: () => void;
}

export const BlockDetailDrawer: React.FC<BlockDetailDrawerProps> = ({
  selectedPartId,
  onClose,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (selectedPartId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPartId, onClose]);

  if (!selectedPartId) return null;

  // Retrieve details
  const details = COMPONENT_DETAILS[selectedPartId] || COMPONENT_DETAILS.bateria;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'battery-charging':
        return <Battery className="w-6 h-6 text-orange-600" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-amber-600" />;
      case 'repeat':
        return <Repeat className="w-6 h-6 text-orange-600" />;
      case 'activity':
        return <Activity className="w-6 h-6 text-orange-600" />;
      case 'inverter-wave':
        return <Sliders className="w-6 h-6 text-purple-600" />;
      case 'mcu-controller':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'motor-rotor':
        return <Radio className="w-6 h-6 text-emerald-600" />;
      case 'gear-box':
        return <Sliders className="w-6 h-6 text-slate-700" />;
      case 'brain':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'plug':
        return <Plug className="w-6 h-6 text-blue-600" />;
      default:
        return <Zap className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Modal / Slide-over Drawer on the right */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-white shadow-2xl border-l border-slate-200 flex flex-col transform transition-transform animate-in slide-in-from-right duration-250 ease-out">
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/80 flex items-start justify-between">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                {renderIcon(details.iconName)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black px-2 py-0.5 rounded-full bg-slate-800 text-white tracking-wide">
                    BLOQUE #{details.number}
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${details.domainColor}`}
                  >
                    {details.domainLabel}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {details.name}
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {details.category}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer shrink-0"
              title="Cerrar panel (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6 text-slate-800">
            {/* Headline Callout */}
            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium leading-relaxed flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
              <span>{details.headline}</span>
            </div>

            {/* Technical Specs Grid */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                Especificaciones Técnicas
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {details.specs.map((spec, i) => (
                  <div
                    key={`spec-${i}`}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <span className="text-slate-400 font-semibold mb-1 text-[11px]">
                      {spec.label}
                    </span>
                    <span className="font-bold text-slate-900 leading-snug">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Functional Description */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-slate-500" />
                Función en el Tren Motriz
              </h3>
              <p className="text-xs leading-relaxed text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200">
                {details.description}
              </p>
            </div>

            {/* Role in Skateboard Architecture */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-500" />
                Rol en la Arquitectura Skateboard
              </h3>
              <p className="text-xs leading-relaxed text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                {details.roleInSkateboard}
              </p>
            </div>

            {/* Inputs & Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Inputs */}
              <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                  Entradas (Inputs)
                </span>
                <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                  {details.inputs.map((inp, idx) => (
                    <li key={`in-${idx}`} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outputs */}
              <div className="p-3.5 rounded-lg bg-orange-50/70 border border-orange-200">
                <span className="text-xs font-bold text-orange-800 flex items-center gap-1.5 mb-2">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                  Salidas (Outputs)
                </span>
                <ul className="space-y-1.5 text-xs text-orange-950 font-medium">
                  {details.outputs.map((out, idx) => (
                    <li key={`out-${idx}`} className="flex items-start gap-1.5">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Operating Mode Behavior: Traction vs Regen */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                Comportamiento en Tracción y Frenado
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200">
                  <span className="font-bold text-amber-900 block mb-0.5">
                    Modo Tracción (Aceleración urbana):
                  </span>
                  <span className="text-amber-800">{details.tractionBehavior}</span>
                </div>
                <div className="p-3 rounded-lg bg-cyan-50/60 border border-cyan-200">
                  <span className="font-bold text-cyan-900 block mb-0.5">
                    Modo Frenado Regenerativo:
                  </span>
                  <span className="text-cyan-800">{details.regenBehavior}</span>
                </div>
              </div>
            </div>

            {/* Protocols & Safety */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                Protocolos y Seguridad Funcional (ISO 26262)
              </h3>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                {details.protocols && details.protocols.length > 0 && (
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      Comunicaciones y Monitoreo:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      {details.protocols.map((prot, i) => (
                        <li key={`prot-${i}`}>{prot}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {details.safetyFeatures && details.safetyFeatures.length > 0 && (
                  <div className="pt-1.5 border-t border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      Mecanismos de Protección:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      {details.safetyFeatures.map((saf, i) => (
                        <li key={`saf-${i}`}>{saf}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Presione <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded-sm font-mono text-[10px]">ESC</kbd> para cerrar
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              Cerrar Ficha Técnica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
