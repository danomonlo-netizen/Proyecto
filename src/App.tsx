/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChassisDiagram } from './components/ChassisDiagram';
import { TopBar } from './components/TopBar';
import { DiagramToolbar } from './components/DiagramToolbar';
import { BlockDetailDrawer } from './components/BlockDetailDrawer';
import { exportSvg, exportPng } from './utils/exportUtils';
import { Maximize2, Minimize2 } from 'lucide-react';

export default function App() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  // Fullscreen management
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mainContainerRef.current?.requestFullscreen().catch((err) => {
        console.error('Error al entrar en pantalla completa:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const handleExportSvg = () => {
    if (svgRef.current) {
      exportSvg(svgRef.current, 'gestion-alta-tension-hv-16-9.svg');
    }
  };

  const handleExportPng = () => {
    if (svgRef.current) {
      exportPng(svgRef.current, 'gestion-alta-tension-hv-16-9.png', 2);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      ref={mainContainerRef}
      className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased font-sans selection:bg-orange-100"
    >
      {/* Top Bar */}
      <TopBar
        onExportSvg={handleExportSvg}
        onExportPng={handleExportPng}
        onPrint={handlePrint}
      />

      {/* Toolbar */}
      <DiagramToolbar
        onExportSvg={handleExportSvg}
        onExportPng={handleExportPng}
        onPrint={handlePrint}
      />

      {/* Main Diagram Canvas Area */}
      <main
        id="diagrama"
        className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6 relative overflow-auto"
      >
        <div className="w-full max-w-[1560px] flex flex-col items-center">
          {/* Header Action / Indicator */}
          <div className="w-full flex items-center justify-between px-2 mb-2 text-xs text-slate-500 no-print">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-slate-700">Formato 16:9</span>
              <span>·</span>
              <span className="text-slate-500">Chasis visto desde arriba con cuadrícula técnica</span>
              <span>·</span>
              <span className="text-orange-600 font-semibold">Alta tensión en naranja (400 V)</span>
              <span>·</span>
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                💡 Haz clic en cualquier bloque para ver su ficha técnica
              </span>
            </div>
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-md transition-colors cursor-pointer"
              title={isFullscreen ? 'Salir de pantalla completa' : 'Ver a pantalla completa'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Salir</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Pantalla Completa</span>
                </>
              )}
            </button>
          </div>

          {/* Master 16:9 SVG Diagram */}
          <ChassisDiagram
            svgRef={svgRef}
            selectedPart={selectedPart}
            onSelectPart={(p) => setSelectedPart(p)}
          />
        </div>
      </main>

      {/* Technical Inspector Drawer / Modal */}
      <BlockDetailDrawer
        selectedPartId={selectedPart}
        onClose={() => setSelectedPart(null)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-3 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4 no-print">
        <span className="font-semibold text-slate-700">
          Diagrama de bloques funcional
        </span>
        <span className="text-slate-400">
          Red de alta tensión de 400 V CC aislada del chasis y de la red de baja tensión
        </span>
      </footer>
    </div>
  );
}
