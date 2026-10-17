import React from 'react';
import { SimpleBlock, SIMPLE_BLOCKS } from '../data/simplePowertrainData';
import { BlockIcon } from './SvgIcons';

interface PowertrainDiagramProps {
  selectedBlockId: string | null;
  onSelectBlock: (block: SimpleBlock | null) => void;
  svgRef: React.RefObject<SVGSVGElement | null>;
}

export const PowertrainDiagram: React.FC<PowertrainDiagramProps> = ({
  selectedBlockId,
  onSelectBlock,
  svgRef,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 select-none">
      <div className="w-full max-w-[1520px] aspect-video relative bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <svg
          ref={svgRef}
          viewBox="0 0 1600 900"
          className="w-full h-full block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Markers: Red Energy Arrows (Thick) */}
            <marker
              id="arrow-red-end"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#dc2626" />
            </marker>

            <marker
              id="arrow-red-start"
              viewBox="0 0 12 12"
              refX="2"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 11 2 L 1 6 L 11 10 z" fill="#dc2626" />
            </marker>

            {/* Markers: Blue Control Arrows (Dashed) */}
            <marker
              id="arrow-blue-end"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#2563eb" />
            </marker>

            {/* Marker: Pink Brake Energy Recovery */}
            <marker
              id="arrow-pink-end"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#e11d48" />
            </marker>

            <marker
              id="arrow-pink-start"
              viewBox="0 0 12 12"
              refX="2"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 11 2 L 1 6 L 11 10 z" fill="#e11d48" />
            </marker>

            {/* Box shadow filter */}
            <filter id="cleanShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.06" />
            </filter>
          </defs>

          {/* Clean White Background */}
          <rect width="1600" height="900" fill="#ffffff" />

          {/* ========================================================================= */}
          {/* TÍTULO SUPERIOR (SIN LOGOTIPOS NI MARCAS)                                 */}
          {/* ========================================================================= */}
          <text
            x="800"
            y="62"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.3"
          >
            Diagrama de bloques funcional del tren motriz VHE
          </text>

          {/* ========================================================================= */}
          {/* SILUETA DEL AUTO EN GRIS CLARO VISTA DESDE ARRIBA                         */}
          {/* ========================================================================= */}
          <g id="car-silhouette">
            {/* Outer body outline of the vehicle viewed from above */}
            {/* Rear at X = 290, Front at X = 1390, Center Y = 490 */}
            <path
              d="
                M 310 490
                C 300 420, 310 320, 370 280
                C 420 250, 600 240, 840 240
                C 1080 240, 1260 255, 1340 310
                C 1375 335, 1395 400, 1395 490
                C 1395 580, 1375 645, 1340 670
                C 1260 725, 1080 740, 840 740
                C 600 740, 420 730, 370 700
                C 310 660, 300 560, 310 490
                Z
              "
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="2.5"
            />

            {/* Windshield & rear contours */}
            <path
              d="M 1200 280 C 1260 350, 1260 630, 1200 700"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            {/* Front windshield */}
            <path
              d="M 1060 285 C 1090 380, 1090 600, 1060 695 L 1010 680 C 1030 590, 1030 390, 1010 300 Z"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            {/* Rear window */}
            <path
              d="M 470 300 C 450 380, 450 600, 470 680 L 515 670 C 495 590, 495 390, 515 310 Z"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />

            {/* Rear Axle Bar */}
            <line x1="435" y1="265" x2="435" y2="715" stroke="#94a3b8" strokeWidth="5" />

            {/* Front Axle Bar */}
            <line x1="1260" y1="265" x2="1260" y2="715" stroke="#94a3b8" strokeWidth="6" />

            {/* REAR WHEELS: Gris (sin tracción) */}
            <rect x="395" y="215" width="80" height="52" rx="8" fill="#64748b" stroke="#475569" strokeWidth="2" />
            <rect x="395" y="713" width="80" height="52" rx="8" fill="#64748b" stroke="#475569" strokeWidth="2" />

            {/* FRONT WHEELS: Rojo (ruedas motrices delanteras) */}
            <rect x="1220" y="215" width="80" height="52" rx="8" fill="#e11d48" stroke="#be185d" strokeWidth="2.5" />
            <rect x="1220" y="713" width="80" height="52" rx="8" fill="#e11d48" stroke="#be185d" strokeWidth="2.5" />
          </g>

          {/* ========================================================================= */}
          {/* 1. BASE DEL SKATEBOARD (RECTÁNGULO GRIS CLARO PLANO ENTRE LOS EJES)      */}
          {/* ========================================================================= */}
          <g id="skateboard-base">
            {/* Flat light gray rectangle between rear axle (X=435) and front axle (X=1260) */}
            <rect
              x="460"
              y="395"
              width="600"
              height="245"
              rx="12"
              fill="#e2e8f0"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            {/* Subtle base label */}
            <text
              x="475"
              y="415"
              fill="#64748b"
              fontSize="12"
              fontWeight="700"
              letterSpacing="0.8"
            >
              BASE SKATEBOARD (CHASIS PLANO)
            </text>
          </g>

          {/* ========================================================================= */}
          {/* ENCHUFE DE CARGA EN LA PARTE TRASERA + CABLE NEGRO A BATERÍA              */}
          {/* ========================================================================= */}
          <g id="conn-enchufe">
            {/* Black clean cable from plug to battery entering car flank */}
            <line
              x1="275"
              y1="485"
              x2="480"
              y2="485"
              stroke="#0f172a"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          {/* ========================================================================= */}
          {/* FLECHAS ROJAS GRUESAS DE ENERGÍA (NO PASAN POR LA VCU)                     */}
          {/* ========================================================================= */}
          <g id="lineas-energia-rojas">
            {/* 1. De Batería directo al Inversor (flecha de doble sentido) */}
            {/* Sube ligeramente hacia el inversor sin tocar la VCU */}
            <path
              d="M 770 470 L 825 470 L 1030 470 L 1055 470 L 1055 387 L 1085 387"
              fill="none"
              stroke="#dc2626"
              strokeWidth="5.5"
              markerStart="url(#arrow-red-start)"
              markerEnd="url(#arrow-red-end)"
            />

            {/* 2. De Supercapacitores hacia el Inversor (flecha de doble sentido) */}
            <path
              d="M 1040 487 L 1085 487"
              fill="none"
              stroke="#dc2626"
              strokeWidth="5.5"
              markerStart="url(#arrow-red-start)"
              markerEnd="url(#arrow-red-end)"
            />

            {/* 3. Del Inversor al Motor (flecha de doble sentido en el conjunto delantero) */}
            <line
              x1="1165"
              y1="425"
              x2="1165"
              y2="445"
              stroke="#dc2626"
              strokeWidth="5.5"
              markerStart="url(#arrow-red-start)"
              markerEnd="url(#arrow-red-end)"
            />

            {/* 4. Del Motor a la Transmisión (pegada al motor) */}
            <line
              x1="1280"
              y1="487"
              x2="1290"
              y2="487"
              stroke="#dc2626"
              strokeWidth="5.5"
              markerEnd="url(#arrow-red-end)"
            />

            {/* 5. De la Transmisión a las dos ruedas delanteras (arriba y abajo por la línea del eje) */}
            <line
              x1="1355"
              y1="445"
              x2="1355"
              y2="300"
              stroke="#dc2626"
              strokeWidth="5.5"
            />
            <line
              x1="1355"
              y1="300"
              x2="1265"
              y2="300"
              stroke="#dc2626"
              strokeWidth="5.5"
            />
            <line
              x1="1265"
              y1="300"
              x2="1265"
              y2="267"
              stroke="#dc2626"
              strokeWidth="5.5"
              markerEnd="url(#arrow-red-end)"
            />

            <line
              x1="1355"
              y1="530"
              x2="1355"
              y2="675"
              stroke="#dc2626"
              strokeWidth="5.5"
            />
            <line
              x1="1355"
              y1="675"
              x2="1265"
              y2="675"
              stroke="#dc2626"
              strokeWidth="5.5"
            />
            <line
              x1="1265"
              y1="675"
              x2="1265"
              y2="713"
              stroke="#dc2626"
              strokeWidth="5.5"
              markerEnd="url(#arrow-red-end)"
            />
          </g>

          {/* ========================================================================= */}
          {/* FLECHAS AZULES PUNTEADAS (CONTROL DESDE LA VCU)                           */}
          {/* VCU en el centro, encima de la base:                                       */}
          {/* Se conecta SOLO al MCU, al BMS y a los Supercapacitores                   */}
          {/* ========================================================================= */}
          <g id="lineas-control-azules">
            {/* 1. De VCU hacia BMS */}
            <path
              d="M 640 320 L 450 320 L 450 600 L 480 600"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3.2"
              strokeDasharray="6 4"
              markerEnd="url(#arrow-blue-end)"
            />

            {/* 2. De VCU hacia Banco de supercapacitores */}
            <path
              d="M 815 320 L 890 320 L 890 435"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3.2"
              strokeDasharray="6 4"
              markerEnd="url(#arrow-blue-end)"
            />

            {/* 3. De VCU hacia MCU (Controlador del motor) */}
            <path
              d="M 725 355 L 725 375 L 1050 375 L 1050 597 L 1085 597"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3.2"
              strokeDasharray="6 4"
              markerEnd="url(#arrow-blue-end)"
            />
          </g>

          {/* ========================================================================= */}
          {/* LEYENDA EN ROSA: "Recuperación de energía en la frenada" (COMO EN LA FOTO) */}
          {/* ========================================================================= */}
          <g id="recuperacion-frenada">
            <text
              x="1260"
              y="145"
              textAnchor="middle"
              fill="#e11d48"
              fontSize="19"
              fontWeight="800"
              letterSpacing="-0.2"
            >
              Recuperación de energía en la frenada
            </text>

            <line
              x1="1260"
              y1="158"
              x2="1260"
              y2="205"
              stroke="#e11d48"
              strokeWidth="3.5"
              markerEnd="url(#arrow-pink-end)"
            />

            <line
              x1="1170"
              y1="395"
              x2="1235"
              y2="395"
              stroke="#e11d48"
              strokeWidth="3"
              markerStart="url(#arrow-pink-start)"
              markerEnd="url(#arrow-pink-end)"
            />
          </g>

          {/* Etiqueta de Ruedas Delanteras */}
          <g id="ruedas-delanteras-tag">
            <rect
              x="1335"
              y="180"
              width="170"
              height="38"
              rx="6"
              fill="#ffffff"
              stroke="#e11d48"
              strokeWidth="1.8"
              filter="url(#cleanShadow)"
            />
            <text
              x="1420"
              y="204"
              textAnchor="middle"
              fill="#be185d"
              fontSize="15"
              fontWeight="800"
            >
              Ruedas delanteras
            </text>
            <path d="M 1335 205 L 1300 230" fill="none" stroke="#e11d48" strokeWidth="2" />
          </g>

          {/* ========================================================================= */}
          {/* BLOQUES FUNCIONALES: CAJAS SIMPLES CON ÍCONO Y SOLO NOMBRE DE BLOQUE      */}
          {/* ========================================================================= */}
          {SIMPLE_BLOCKS.map((block) => {
            const isSelected = selectedBlockId === block.id;

            let borderColor = '#94a3b8';
            let iconColor = '#0f172a';
            let bgColor = '#ffffff';

            if (block.id === 'bateria') {
              borderColor = '#e11d48';
              iconColor = '#e11d48';
            } else if (block.id === 'vcu') {
              borderColor = '#2563eb';
              iconColor = '#2563eb';
              bgColor = '#f8fafc';
            } else if (block.id === 'supercapacitores') {
              borderColor = '#d97706';
              iconColor = '#d97706';
            } else if (block.id === 'inversor') {
              borderColor = '#7c3aed';
              iconColor = '#7c3aed';
            } else if (block.id === 'motor') {
              borderColor = '#059669';
              iconColor = '#059669';
            } else if (block.id === 'transmision') {
              borderColor = '#475569';
              iconColor = '#475569';
            } else if (block.id === 'bms' || block.id === 'mcu') {
              borderColor = '#0284c7';
              iconColor = '#0284c7';
            } else if (block.id === 'enchufe') {
              borderColor = '#1e293b';
              iconColor = '#1e293b';
            }

            return (
              <g
                key={block.id}
                id={`block-${block.id}`}
                transform={`translate(${block.x}, ${block.y})`}
                onClick={() => onSelectBlock(block)}
                className="cursor-pointer group"
              >
                {/* Highlight outline if selected */}
                {isSelected && (
                  <rect
                    x="-4"
                    y="-4"
                    width={block.width + 8}
                    height={block.height + 8}
                    rx="12"
                    fill="none"
                    stroke={borderColor}
                    strokeWidth="3"
                  />
                )}

                {/* Box container */}
                <rect
                  x="0"
                  y="0"
                  width={block.width}
                  height={block.height}
                  rx="10"
                  fill={bgColor}
                  stroke={isSelected ? borderColor : borderColor}
                  strokeWidth="2"
                  filter="url(#cleanShadow)"
                  className="transition-all duration-150 group-hover:stroke-slate-900"
                />

                {/* Content layout according to block */}
                {block.id === 'bateria' ? (
                  // Batería: Bloque grande y plano
                  <>
                    <g transform="translate(24, 22)">
                      <BlockIcon name={block.icon} size={36} color={iconColor} />
                    </g>
                    <text
                      x="78"
                      y="48"
                      fill="#0f172a"
                      fontSize="22"
                      fontWeight="800"
                    >
                      {block.name}
                    </text>
                    {/* Visual battery internal floor modules */}
                    <g opacity="0.6">
                      <rect x="24" y="70" width="70" height="65" rx="6" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" />
                      <rect x="110" y="70" width="70" height="65" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                      <rect x="196" y="70" width="70" height="65" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                    </g>
                  </>
                ) : block.id === 'bms' ? (
                  // BMS: Pegado a la batería
                  <>
                    <g transform="translate(14, 10)">
                      <BlockIcon name={block.icon} size={28} color={iconColor} />
                    </g>
                    <text
                      x="56"
                      y="31"
                      fill="#0f172a"
                      fontSize="18"
                      fontWeight="800"
                    >
                      BMS
                    </text>
                  </>
                ) : block.id === 'supercapacitores' ? (
                  // Banco de supercapacitores
                  <>
                    <g transform="translate(14, 18)">
                      <BlockIcon name={block.icon} size={30} color={iconColor} />
                    </g>
                    <text
                      x="54"
                      y="38"
                      fill="#0f172a"
                      fontSize="17"
                      fontWeight="800"
                    >
                      Banco de
                    </text>
                    <text
                      x="54"
                      y="62"
                      fill="#0f172a"
                      fontSize="17"
                      fontWeight="800"
                    >
                      supercapacitores
                    </text>
                  </>
                ) : block.id === 'vcu' ? (
                  // VCU: En el centro, encima de la base
                  <>
                    <g transform="translate(14, 16)">
                      <BlockIcon name={block.icon} size={32} color="#2563eb" />
                    </g>
                    <text
                      x="56"
                      y="36"
                      fill="#0f172a"
                      fontSize="20"
                      fontWeight="800"
                    >
                      VCU
                    </text>
                    <text
                      x="56"
                      y="54"
                      fill="#2563eb"
                      fontSize="12"
                      fontWeight="700"
                    >
                      (Cerebro del sistema)
                    </text>
                  </>
                ) : block.id === 'mcu' ? (
                  // MCU: Grupo delantero
                  <>
                    <g transform="translate(14, 16)">
                      <BlockIcon name={block.icon} size={28} color={iconColor} />
                    </g>
                    <text
                      x="54"
                      y="32"
                      fill="#0f172a"
                      fontSize="17"
                      fontWeight="800"
                    >
                      MCU
                    </text>
                    <text
                      x="54"
                      y="50"
                      fill="#475569"
                      fontSize="12"
                      fontWeight="600"
                    >
                      (Controlador del motor)
                    </text>
                  </>
                ) : block.id === 'motor' ? (
                  // Motor eléctrico (PMSM)
                  <>
                    <g transform="translate(14, 22)">
                      <BlockIcon name={block.icon} size={34} color={iconColor} />
                    </g>
                    <text
                      x="56"
                      y="38"
                      fill="#0f172a"
                      fontSize="16"
                      fontWeight="800"
                    >
                      Motor eléctrico
                    </text>
                    <text
                      x="56"
                      y="60"
                      fill="#059669"
                      fontSize="15"
                      fontWeight="700"
                    >
                      (PMSM)
                    </text>
                  </>
                ) : block.id === 'enchufe' ? (
                  // Enchufe de carga: Parte trasera, texto completamente limpio y sin solapar
                  <>
                    <g transform="translate(12, 18)">
                      <BlockIcon name={block.icon} size={32} color="#0f172a" />
                    </g>
                    <text
                      x="52"
                      y="34"
                      fill="#0f172a"
                      fontSize="16"
                      fontWeight="800"
                    >
                      Enchufe
                    </text>
                    <text
                      x="52"
                      y="54"
                      fill="#0f172a"
                      fontSize="16"
                      fontWeight="800"
                    >
                      de carga
                    </text>
                  </>
                ) : (
                  // Inversor, Transmisión
                  <>
                    <g transform="translate(14, 20)">
                      <BlockIcon name={block.icon} size={30} color={iconColor} />
                    </g>
                    <text
                      x="54"
                      y={block.height / 2 + 7}
                      fill="#0f172a"
                      fontSize="18"
                      fontWeight="800"
                    >
                      {block.name}
                    </text>
                  </>
                )}
              </g>
            );
          })}

          {/* ========================================================================= */}
          {/* LEYENDA EN LA ESQUINA INFERIOR IZQUIERDA                                  */}
          {/* ========================================================================= */}
          <g id="leyenda-esquina" transform="translate(60, 755)">
            <rect
              x="0"
              y="0"
              width="430"
              height="105"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cleanShadow)"
            />

            <text x="16" y="24" fill="#0f172a" fontSize="13" fontWeight="800" letterSpacing="0.4">
              LEYENDA
            </text>
            <line x1="16" y1="31" x2="414" y2="31" stroke="#f1f5f9" strokeWidth="1" />

            {/* 1. Flecha roja de energía */}
            <g transform="translate(16, 48)">
              <line
                x1="0"
                y1="5"
                x2="35"
                y2="5"
                stroke="#dc2626"
                strokeWidth="5"
                markerStart="url(#arrow-red-start)"
                markerEnd="url(#arrow-red-end)"
              />
              <text x="46" y="9" fill="#1e293b" fontSize="13" fontWeight="700">
                Flujo de energía
              </text>
              <text x="162" y="9" fill="#64748b" fontSize="12" fontWeight="500">
                (batería, supercapacitores, motor, ruedas)
              </text>
            </g>

            {/* 2. Flecha azul de control */}
            <g transform="translate(16, 74)">
              <line
                x1="0"
                y1="5"
                x2="35"
                y2="5"
                stroke="#2563eb"
                strokeWidth="3"
                strokeDasharray="6 4"
                markerEnd="url(#arrow-blue-end)"
              />
              <text x="46" y="9" fill="#1e293b" fontSize="13" fontWeight="700">
                Señales de control
              </text>
              <text x="172" y="9" fill="#64748b" fontSize="12" fontWeight="500">
                (desde la VCU a los componentes)
              </text>
            </g>
          </g>

          {/* Subtítulo discreto al pie del auto */}
          <text
            x="840"
            y="805"
            textAnchor="middle"
            fill="#64748b"
            fontSize="14"
            fontWeight="600"
          >
            Vehículo eléctrico urbano (vista superior) · Arquitectura skateboard con batería y supercapacitores
          </text>
        </svg>
      </div>
    </div>
  );
};
