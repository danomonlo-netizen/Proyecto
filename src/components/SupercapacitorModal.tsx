import React from 'react';
import { X, Zap, ShieldCheck, BatteryCharging, ArrowUpRight } from 'lucide-react';

interface SupercapacitorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupercapacitorModal: React.FC<SupercapacitorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Sistema Híbrido de Almacenamiento (HESS)
              </h2>
              <p className="text-xs text-slate-500">
                Batería LFP (Alta Densidad Energética) + Supercapacitores (Alta Densidad de Potencia)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed">
          {/* Motivation section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              ¿Por qué un banco de supercapacitores en un vehículo eléctrico urbano?
            </h3>
            <p>
              El tráfico urbano se caracteriza por frecuentes ciclos de arrancada y parada (<em>stop-and-go</em>), semáforos y rotondas. En un vehículo eléctrico tradicional, cada aceleración súbita exige altas tasas de descarga (C-rate) a la batería química, elevando la temperatura interna y acelerando la degradación. De igual modo, en las frenadas intensas, la batería no puede aceptar corrientes de carga regenerativa instantánea muy altas sin riesgo de deposición de litio metálico (<em>lithium plating</em>).
            </p>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Protección de la Batería LFP
              </div>
              <p className="text-slate-600">
                Reduce el estrés térmico y la corriente RMS en las celdas químicas LFP, prolongando su vida útil en más de un 60% en ciclo urbano severo.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-1.5">
                <Zap className="w-4 h-4 text-amber-600" />
                Absorción Regenerativa del 95%
              </div>
              <p className="text-slate-600">
                Los supercapacitores presentan una resistencia serie interna (ESR) inferior a 5 mΩ, absorbiendo picos de corriente regenerativa de hasta 150 A sin calentar el sistema.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-1.5">
                <BatteryCharging className="w-4 h-4 text-blue-600" />
                Ciclabilidad Prácticamente Infinita
              </div>
              <p className="text-slate-600">
                Soportan más de 1.000.000 de ciclos completos de carga/descarga rápida sin pérdida apreciable de capacidad, superando la vida útil del vehículo.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-1.5">
                <ArrowUpRight className="w-4 h-4 text-purple-600" />
                Aceleración Urbana Instantánea
              </div>
              <p className="text-slate-600">
                Respuesta en milisegundos para adelantamientos e incorporaciones ágiles de 0 a 50 km/h típicas de la conducción en ciudad.
              </p>
            </div>
          </div>

          {/* Operation Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Estrategia de Control de la VCU
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100 text-xs">
              <div className="grid grid-cols-3 p-2.5 bg-slate-100 font-bold text-slate-800">
                <div>Fase de Conducción</div>
                <div>Batería LFP (400 V)</div>
                <div>Supercapacitores + DC/DC</div>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <div className="font-semibold text-slate-900">Arranque / Aceleración fuerte</div>
                <div className="text-slate-600">Entrega corriente de base suave</div>
                <div className="text-blue-700 font-semibold">Entrega el pico de par instantáneo</div>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <div className="font-semibold text-slate-900">Velocidad de crucero</div>
                <div className="text-slate-900 font-semibold">Suministra el 100% de potencia</div>
                <div className="text-slate-500">Recarga lenta de compensación</div>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <div className="font-semibold text-slate-900">Frenado regenerativo</div>
                <div className="text-slate-500">Absorbe baja corriente residual</div>
                <div className="text-emerald-700 font-semibold">Absorbe el 85-90% del pico cinético</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
