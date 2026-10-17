import React from 'react';
import { X, Layers, Cpu, Compass, Car } from 'lucide-react';

interface SkateboardSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkateboardSpecsModal: React.FC<SkateboardSpecsModalProps> = ({ isOpen, onClose }) => {
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
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
              <Layers className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Ficha Técnica: Vehículo Eléctrico Urbano
              </h2>
              <p className="text-xs text-slate-500">
                Segmento B Hatchback · Plataforma Skateboard Dedicada
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
          <p>
            La arquitectura <strong>skateboard</strong> integra el tren motriz completo (batería, electrónica de potencia, motor, suspensión y dirección) en una plataforma plana autoportante. Al colocar el paquete de baterías LFP y los supercapacitores en el piso entre los dos ejes, se logra un centro de gravedad extremadamente bajo, una distribución de pesos cercana a 50:50 y un habitáculo espacioso con suelo plano para un vehículo urbano compacto de cinco puertas.
          </p>

          <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100">
            <div className="p-2.5 bg-slate-100 font-bold text-slate-800 text-xs">
              Dimensiones y Configuración de Chasis
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Tipo de Carrocería</span>
              <span className="font-semibold text-slate-900 font-mono">Hatchback 5 puertas (Segmento B)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Tracción</span>
              <span className="font-semibold text-slate-900 font-mono">Delantera (FWD - Front Wheel Drive)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Módulo e-Axle Delantero</span>
              <span className="font-semibold text-slate-900 font-mono">3 en 1 (Inversor + PMSM + Reductor)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Tensión del Sistema</span>
              <span className="font-semibold text-slate-900 font-mono">400 V nominal CC</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Capacidad Batería Principal</span>
              <span className="font-semibold text-slate-900 font-mono">30 kWh (Química LFP LiFePO4)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Búfer de Supercapacitores</span>
              <span className="font-semibold text-slate-900 font-mono">165 F / 48-120 V (con DC/DC SiC 35 kW)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Potencia de Motor PMSM</span>
              <span className="font-semibold text-slate-900 font-mono">55 kW (75 CV) continuo / 70 kW pico</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Par Motor Máximo</span>
              <span className="font-semibold text-slate-900 font-mono">180 Nm (desde 0 RPM)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Cargador de a Bordo (OBC)</span>
              <span className="font-semibold text-slate-900 font-mono">7,4 kW CA monofásico (SAE J1772 / IEC 61851)</span>
            </div>
            <div className="grid grid-cols-2 p-2.5">
              <span className="text-slate-500">Consumo Estimado (WLTP Urbano)</span>
              <span className="font-semibold text-slate-900 font-mono">12,8 kWh / 100 km (~230 km de autonomía)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
