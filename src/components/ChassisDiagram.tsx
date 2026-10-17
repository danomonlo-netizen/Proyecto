import React from 'react';

interface ChassisDiagramProps {
  svgRef: React.RefObject<SVGSVGElement | null>;
  selectedPart: string | null;
  onSelectPart: (part: string | null) => void;
}

export const ChassisDiagram: React.FC<ChassisDiagramProps> = ({
  svgRef,
  selectedPart: _selectedPart,
  onSelectPart,
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
            {/* Markers: Orange High Voltage (Thick) */}
            <marker
              id="arrow-orange-end"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#ea580c" />
            </marker>

            <marker
              id="arrow-orange-start"
              viewBox="0 0 12 12"
              refX="2"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 11 2 L 1 6 L 11 10 z" fill="#ea580c" />
            </marker>

            {/* Markers: Blue Control / CAN Bus (Dashed) */}
            <marker
              id="arrow-blue-end"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#2563eb" />
            </marker>

            {/* Markers: Yellow 12V Low Voltage Arrow */}
            <marker
              id="arrow-yellow-end"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#eab308" />
            </marker>

            {/* Markers: Slate Callout Pointer */}
            <marker
              id="arrow-callout"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 1 2 L 11 6 L 1 10 z" fill="#475569" />
            </marker>

            {/* Callout box drop shadow */}
            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Clean White Background */}
          <rect width="1600" height="900" fill="#ffffff" />

          {/* Background Technical Grid (Cuadrícula suave) */}
          <g stroke="#f1f5f9" strokeWidth="1.2">
            {Array.from({ length: 33 }).map((_, i) => (
              <line key={`gv-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="900" />
            ))}
            {Array.from({ length: 19 }).map((_, i) => (
              <line key={`gh-${i}`} x1="0" y1={i * 50} x2="1600" y2={i * 50} />
            ))}
          </g>

          {/* ========================================================================= */}
          {/* HEADER: TÍTULO, SUBTÍTULO Y NOTA DE ECUs CONECTADAS POR BUS CAN           */}
          {/* ========================================================================= */}
          <g transform="translate(60, 48)">
            <text
              x="0"
              y="0"
              fill="#1e293b"
              fontSize="27"
              fontWeight="800"
              letterSpacing="-0.5"
            >
              Diagrama de bloques funcional
            </text>
            <text
              x="0"
              y="25"
              fill="#475569"
              fontSize="14.5"
              fontWeight="500"
            >
              Red de alta tensión de 400 V CC aislada del chasis y de la red de baja tensión
            </text>
            <text
              x="0"
              y="46"
              fill="#2563eb"
              fontSize="13"
              fontWeight="600"
            >
              VCU, MCU y BMS son unidades de control electrónico (ECU) conectadas por bus CAN
            </text>
          </g>

          {/* ========================================================================= */}
          {/* LEYENDA EN LA ESQUINA SUPERIOR DERECHA (DESPEJADA, SIN TAPAR EL AUTO)     */}
          {/* ========================================================================= */}
          <g id="leyenda-esquina" transform="translate(1190, 40)">
            <rect
              x="0"
              y="0"
              width="370"
              height="150"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />

            <text x="16" y="22" fill="#0f172a" fontSize="12" fontWeight="800" letterSpacing="0.4">
              LEYENDA DE LÍNEAS
            </text>
            <line x1="16" y1="28" x2="354" y2="28" stroke="#f1f5f9" strokeWidth="1" />

            {/* 1. Naranja grueso */}
            <g transform="translate(16, 41)">
              <line
                x1="0"
                y1="5"
                x2="35"
                y2="5"
                stroke="#ea580c"
                strokeWidth="5"
                markerStart="url(#arrow-orange-start)"
                markerEnd="url(#arrow-orange-end)"
              />
              <text x="46" y="9" fill="#1e293b" fontSize="11" fontWeight="700">
                Alta tensión 400 V:
              </text>
              <text x="165" y="9" fill="#64748b" fontSize="10.5" fontWeight="500">
                Línea naranja continua (doble sentido)
              </text>
            </g>

            {/* 2. Barra naranja Bus HV */}
            <g transform="translate(16, 63)">
              <rect x="0" y="0" width="35" height="9" rx="4.5" fill="#ea580c" />
              <text x="46" y="9" fill="#1e293b" fontSize="11" fontWeight="700">
                Bus de alta tensión:
              </text>
              <text x="165" y="9" fill="#64748b" fontSize="10.5" fontWeight="500">
                Barra horizontal central (distribución HV)
              </text>
            </g>

            {/* 3. Amarillo delgado */}
            <g transform="translate(16, 85)">
              <line
                x1="0"
                y1="5"
                x2="35"
                y2="5"
                stroke="#eab308"
                strokeWidth="3.2"
                markerEnd="url(#arrow-yellow-end)"
              />
              <text x="46" y="9" fill="#1e293b" fontSize="11" fontWeight="700">
                Baja tensión 12 V:
              </text>
              <text x="165" y="9" fill="#64748b" fontSize="10.5" fontWeight="500">
                Línea amarilla delgada (auxiliares)
              </text>
            </g>

            {/* 4. Azul punteado (Bus CAN) */}
            <g transform="translate(16, 107)">
              <line
                x1="0"
                y1="5"
                x2="35"
                y2="5"
                stroke="#2563eb"
                strokeWidth="2.8"
                strokeDasharray="6 4"
                markerEnd="url(#arrow-blue-end)"
              />
              <text x="46" y="9" fill="#1e293b" fontSize="11" fontWeight="700">
                Bus CAN:
              </text>
              <text x="106" y="9" fill="#64748b" fontSize="10.5" fontWeight="500">
                Línea azul punteada (conecta VCU, MCU y BMS)
              </text>
            </g>

            {/* 5. Gris continuo */}
            <g transform="translate(16, 129)">
              <line
                x1="0"
                y1="5"
                x2="35"
                y2="5"
                stroke="#475569"
                strokeWidth="5"
              />
              <text x="46" y="9" fill="#1e293b" fontSize="11" fontWeight="700">
                Unión mecánica:
              </text>
              <text x="150" y="9" fill="#64748b" fontSize="10.5" fontWeight="500">
                Línea gris corta (transmisión a ruedas)
              </text>
            </g>
          </g>

          {/* ========================================================================= */}
          {/* CHASIS VISTO DESDE ARRIBA                                                 */}
          {/* ========================================================================= */}
          <g id="chassis-assembly" transform="translate(0, 10)">
            {/* Silhouette frame perimeter (alargado hacia adelante hasta x=1565) */}
            <path
              d="
                M 340 470
                C 320 370, 340 270, 420 240
                C 500 215, 850 210, 1280 210
                C 1440 210, 1515 245, 1540 320
                C 1560 380, 1565 430, 1565 470
                C 1565 510, 1560 560, 1540 620
                C 1515 695, 1440 730, 1280 730
                C 850 730, 500 725, 420 700
                C 340 670, 320 570, 340 470
                Z
              "
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              opacity="0.8"
            />

            {/* Rear Subframe structure (Eje Trasero en x=420) */}
            <rect x="375" y="360" width="90" height="220" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

            {/* Rear Suspension Arms */}
            <path d="M 400 360 L 395 286 M 440 360 L 445 286" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
            <line x1="385" y1="286" x2="455" y2="286" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
            <path d="M 400 580 L 395 655 M 440 580 L 445 655" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
            <line x1="385" y1="655" x2="455" y2="655" stroke="#475569" strokeWidth="8" strokeLinecap="round" />

            {/* REAR WHEELS: Gris (sin tracción) en el Eje Trasero (x=420) */}
            {/* Top Rear Wheel */}
            <g transform="translate(375, 230)">
              <rect x="0" y="0" width="90" height="56" rx="10" fill="#475569" stroke="#334155" strokeWidth="2.5" />
              <line x1="18" y1="0" x2="18" y2="56" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="72" y1="0" x2="72" y2="56" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="30" y="10" width="30" height="36" rx="4" fill="#64748b" />
            </g>
            {/* Bottom Rear Wheel */}
            <g transform="translate(375, 655)">
              <rect x="0" y="0" width="90" height="56" rx="10" fill="#475569" stroke="#334155" strokeWidth="2.5" />
              <line x1="18" y1="0" x2="18" y2="56" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="72" y1="0" x2="72" y2="56" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="30" y="10" width="30" height="36" rx="4" fill="#64748b" />
            </g>

            {/* Front Subframe structure */}
            <rect x="1300" y="350" width="230" height="240" rx="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

            {/* Front Suspension Arms */}
            <path d="M 1420 350 L 1460 286 M 1510 350 L 1510 286" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
            <line x1="1450" y1="286" x2="1520" y2="286" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
            <path d="M 1420 590 L 1460 655 M 1510 590 L 1510 655" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
            <line x1="1450" y1="655" x2="1520" y2="655" stroke="#475569" strokeWidth="8" strokeLinecap="round" />

            {/* FRONT WHEELS: Ruedas Delanteras Motrices centradas en x=1485 */}
            {/* Top Front Wheel */}
            <g transform="translate(1440, 230)">
              <rect x="0" y="0" width="90" height="56" rx="10" fill="#334155" stroke="#1e293b" strokeWidth="2.5" />
              <line x1="18" y1="0" x2="18" y2="56" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="72" y1="0" x2="72" y2="56" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="30" y="10" width="30" height="36" rx="4" fill="#94a3b8" />
              <circle cx="45" cy="28" r="6" fill="#ea580c" />
            </g>
            {/* Bottom Front Wheel */}
            <g transform="translate(1440, 655)">
              <rect x="0" y="0" width="90" height="56" rx="10" fill="#334155" stroke="#1e293b" strokeWidth="2.5" />
              <line x1="18" y1="0" x2="18" y2="56" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="72" y1="0" x2="72" y2="56" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="30" y="10" width="30" height="36" rx="4" fill="#94a3b8" />
              <circle cx="45" cy="28" r="6" fill="#ea580c" />
            </g>

            {/* ========================================================================= */}
            {/* 1. BATERÍA: DESPLAZADA HACIA ADELANTE (centro en x=860, cerca de la mitad) */}
            {/*    Ocupa de x=705 a x=1015 (ancho 310 px)                                 */}
            {/* ========================================================================= */}
            <g
              id="battery-pack"
              className="cursor-pointer"
              onClick={() => onSelectPart('bateria')}
            >
              {/* Outer structural casing */}
              <rect
                x="705"
                y="365"
                width="310"
                height="210"
                rx="14"
                fill="#f8fafc"
                stroke="#64748b"
                strokeWidth="3"
                filter="url(#cardShadow)"
              />

              {/* Cell matrix (Cuadrícula visible de celdas) */}
              <g stroke="#cbd5e1" strokeWidth="1.4" fill="#ffffff">
                {[0, 1, 2].map((row) =>
                  [0, 1, 2, 3].map((col) => (
                    <rect
                      key={`cell-${row}-${col}`}
                      x={719 + col * 71}
                      y={380 + row * 60}
                      width="63"
                      height="50"
                      rx="4"
                      stroke="#94a3b8"
                      strokeWidth="1.2"
                    />
                  ))
                )}
              </g>

              {/* Internal busbars */}
              <line x1="715" y1="435" x2="1005" y2="435" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="715" y1="495" x2="1005" y2="495" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="860" y1="375" x2="860" y2="565" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Label inside battery */}
              <rect x="795" y="452" width="130" height="36" rx="6" fill="#0f172a" opacity="0.9" />
              <text x="860" y="475" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">
                BATERÍA
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 2. BMS: DESPLAZADO CON LA BATERÍA, PEGADO ABAJO Y CENTRADO EN x=860       */}
            {/* ========================================================================= */}
            <g
              id="bms-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('bms')}
            >
              <rect
                x="780"
                y="575"
                width="160"
                height="45"
                rx="6"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              {/* Connector lines to battery bottom */}
              <line x1="812" y1="575" x2="812" y2="570" stroke="#0284c7" strokeWidth="3" />
              <line x1="908" y1="575" x2="908" y2="570" stroke="#0284c7" strokeWidth="3" />
              <text x="860" y="603" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="800">
                BMS
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 3. ATRÁS DE LA BATERÍA: CARGADOR DE A BORDO, ENCHUFE Y VCU                */}
            {/*    El enchufe está FUERA del chasis y con texto CARGA nítido              */}
            {/* ========================================================================= */}

            {/* Cargador de a bordo (x: 530 a 640) */}
            <g
              id="obc-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('cargador')}
            >
              <rect
                x="530"
                y="368"
                width="110"
                height="65"
                rx="8"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              <text x="585" y="396" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="800">
                Cargador
              </text>
              <text x="585" y="416" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="800">
                de a bordo
              </text>
            </g>

            {/* Enchufe de Carga: FUERA DEL CHASIS a la izquierda con texto CARGA nítido  */}
            <g
              id="charge-plug"
              className="cursor-pointer"
              onClick={() => onSelectPart('cargador')}
            >
              <g transform="translate(235, 374)">
                {/* Plug housing with crisp contrast */}
                <rect x="0" y="0" width="62" height="52" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                {/* Silver terminal prongs */}
                <rect x="-10" y="10" width="10" height="8" rx="2" fill="#94a3b8" />
                <rect x="-10" y="34" width="10" height="8" rx="2" fill="#94a3b8" />
                {/* Yellow power indicator dot */}
                <circle cx="14" cy="26" r="3" fill="#eab308" />
                {/* High contrast bold CARGA text */}
                <text x="36" y="30" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" letterSpacing="0.8">
                  CARGA
                </text>
              </g>

              {/* Cable negro del enchufe exterior cruzando al Cargador de a bordo */}
              <line x1="297" y1="400" x2="530" y2="400" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* VCU (x: 530 a 640) */}
            <g
              id="vcu-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('vcu')}
            >
              <rect
                x="530"
                y="470"
                width="110"
                height="68"
                rx="8"
                fill="#ffffff"
                stroke="#2563eb"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              <text x="585" y="503" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="800">
                VCU
              </text>
              <text x="585" y="521" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="700">
                El Cerebro
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 4. ELECTRÓNICA INTERMEDIA: DC/DC 12V, AUXILIARES, DC/DC BIDI, SUPERCAPS   */}
            {/* ========================================================================= */}

            {/* Convertidor DC/DC 400 V a 12 V (x: 1030 a 1115) */}
            <g
              id="dcdc-12v-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('dcdc_12v')}
            >
              <rect
                x="1030"
                y="368"
                width="85"
                height="54"
                rx="6"
                fill="#ffffff"
                stroke="#ca8a04"
                strokeWidth="2"
                filter="url(#cardShadow)"
              />
              <text x="1072" y="391" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
                DC/DC
              </text>
              <text x="1072" y="408" textAnchor="middle" fill="#a16207" fontSize="9.5" fontWeight="700">
                400 V → 12 V
              </text>
            </g>

            {/* Batería auxiliar 12 V y auxiliares (LETRA MÁS GRANDE Y CLARA) */}
            <g
              id="auxiliares-12v-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('auxiliares_12v')}
            >
              <rect
                x="1030"
                y="460"
                width="85"
                height="70"
                rx="8"
                fill="#fefce8"
                stroke="#ca8a04"
                strokeWidth="2"
                filter="url(#cardShadow)"
              />
              <text x="1072" y="482" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
                Batería 12 V
              </text>
              <text x="1072" y="498" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
                y auxiliares
              </text>
              <text x="1072" y="514" textAnchor="middle" fill="#854d0e" fontSize="9.5" fontWeight="700">
                de baja tensión
              </text>
            </g>

            {/* Convertidor DC/DC bidireccional (x: 1130 a 1220) */}
            <g
              id="dcdc-bidirectional-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('dcdc_bidireccional')}
            >
              <rect
                x="1130"
                y="368"
                width="90"
                height="54"
                rx="6"
                fill="#ffffff"
                stroke="#d97706"
                strokeWidth="2.2"
                filter="url(#cardShadow)"
              />
              <text x="1175" y="391" textAnchor="middle" fill="#0f172a" fontSize="11.5" fontWeight="800">
                DC/DC
              </text>
              <text x="1175" y="408" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="700">
                Bidireccional
              </text>
            </g>

            {/* Banco de supercapacitores (x: 1130 a 1220, SIN GUION Y CON LETRA MÁS GRANDE) */}
            <g
              id="supercapacitors-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('supercapacitores')}
            >
              <rect
                x="1130"
                y="460"
                width="90"
                height="70"
                rx="8"
                fill="#ffffff"
                stroke="#b45309"
                strokeWidth="2.2"
                filter="url(#cardShadow)"
              />
              <text x="1175" y="489" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="800">
                Banco de
              </text>
              <text x="1175" y="508" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="800">
                supercapacitores
              </text>
            </g>

            {/* ========================================================================= */}
            {/* 5. TREN DELANTERO: DE IZQUIERDA A DERECHA -> INVERSOR, MOTOR Y TRANSMISIÓN */}
            {/*    SOBRE EL EJE DELANTERO, Y MCU JUSTO DEBAJO DEL INVERSOR.               */}
            {/* ========================================================================= */}

            {/* Inversor (x: 1240 a 1330, arriba) */}
            <g
              id="inverter-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('inversor')}
            >
              <rect
                x="1240"
                y="370"
                width="90"
                height="68"
                rx="8"
                fill="#ffffff"
                stroke="#7c3aed"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              <text x="1285" y="411" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="800">
                Inversor
              </text>
            </g>

            {/* MCU: JUSTO DEBAJO DEL INVERSOR (x: 1240 a 1330, y: 472 a 540) */}
            <g
              id="mcu-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('mcu')}
            >
              <rect
                x="1240"
                y="472"
                width="90"
                height="68"
                rx="8"
                fill="#ffffff"
                stroke="#2563eb"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              <text x="1285" y="503" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="800">
                MCU
              </text>
              <text x="1285" y="521" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="700">
                El Músculo
              </text>
            </g>

            {/* Conexión directa de control Inversor y MCU */}
            <line x1="1285" y1="438" x2="1285" y2="472" stroke="#64748b" strokeWidth="2.5" strokeDasharray="3 3" />

            {/* Motor Eléctrico PMSM (x: 1350 a 1435): A la derecha del inversor */}
            <g
              id="motor-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('motor')}
            >
              <rect
                x="1350"
                y="425"
                width="85"
                height="80"
                rx="8"
                fill="#ffffff"
                stroke="#059669"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              <circle cx="1392" cy="454" r="14" fill="#ecfdf5" stroke="#059669" strokeWidth="1.8" />
              <path d="M 1385 454 c 2 -3 4 -3 7 0 s 5 3 7 0" stroke="#059669" strokeWidth="2" fill="none" />
              <text x="1392" y="484" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="800">
                Motor
              </text>
              <text x="1392" y="497" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="700">
                (PMSM)
              </text>
            </g>

            {/* Transmisión (x: 1445 a 1530): A la derecha del motor sobre el eje delantero */}
            <g
              id="transmission-unit"
              className="cursor-pointer"
              onClick={() => onSelectPart('transmision')}
            >
              <rect
                x="1445"
                y="425"
                width="85"
                height="80"
                rx="8"
                fill="#ffffff"
                stroke="#475569"
                strokeWidth="2.5"
                filter="url(#cardShadow)"
              />
              <circle cx="1487" cy="454" r="14" fill="#f1f5f9" stroke="#475569" strokeWidth="1.8" />
              <path d="M 1481 454 h 12 M 1487 448 v 12" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
              <text x="1487" y="484" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
                Transmisión
              </text>
              <text x="1487" y="497" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="700">
                (Reductor)
              </text>
            </g>

            {/* Conexión mecánica motor a transmisión */}
            <line x1="1435" y1="465" x2="1445" y2="465" stroke="#475569" strokeWidth="6" strokeLinecap="round" />

            {/* LÍNEAS GRISES CORTAS: Salen de la transmisión hacia las ruedas           */}
            {/* delanteras izquierda y derecha directamente en el eje x=1485             */}
            {/* 1. Hacia rueda delantera izquierda (superior) */}
            <line
              x1="1485"
              y1="425"
              x2="1485"
              y2="286"
              stroke="#475569"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* 2. Hacia rueda delantera derecha (inferior) */}
            <line
              x1="1485"
              y1="505"
              x2="1485"
              y2="655"
              stroke="#475569"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* ========================================================================= */}
            {/* BUS DE ALTA TENSIÓN 400 V (BARRA NARANJA HORIZONTAL GRUESA)               */}
            {/* ========================================================================= */}
            <g
              id="hv-busbar"
              className="cursor-pointer"
              onClick={() => onSelectPart('bus_alta_tension')}
            >
              {/* Barra horizontal naranja gruesa */}
              <rect
                x="820"
                y="330"
                width="480"
                height="15"
                rx="7.5"
                fill="#ea580c"
                stroke="#c2410c"
                strokeWidth="1.5"
              />
              {/* Etiqueta del Bus de Alta Tensión */}
              <text
                x="1060"
                y="323"
                textAnchor="middle"
                fill="#c2410c"
                fontSize="12.5"
                fontWeight="800"
                letterSpacing="0.2"
              >
                Bus de alta tensión 400 V
              </text>
            </g>

            {/* ========================================================================= */}
            {/* CONEXIONES DE ALTA TENSIÓN: CABLES NARANJAS CORTOS AL BUS Y ENTRE BLOQUES */}
            {/* ========================================================================= */}
            <g id="hv-cables">
              {/* 1. Cargador de a bordo a Batería (flecha de un solo sentido hacia la batería) */}
              <line
                x1="640"
                y1="400"
                x2="705"
                y2="400"
                stroke="#ea580c"
                strokeWidth="5.5"
                markerEnd="url(#arrow-orange-end)"
              />

              {/* 2. Batería al Bus de Alta Tensión (línea corta, doble sentido) */}
              <line
                x1="860"
                y1="365"
                x2="860"
                y2="345"
                stroke="#ea580c"
                strokeWidth="5.5"
                markerStart="url(#arrow-orange-start)"
                markerEnd="url(#arrow-orange-end)"
              />

              {/* 3. Bus al Convertidor DC/DC 400 V a 12 V (flecha de un solo sentido hacia él) */}
              <line
                x1="1072"
                y1="345"
                x2="1072"
                y2="368"
                stroke="#ea580c"
                strokeWidth="5"
                markerEnd="url(#arrow-orange-end)"
              />

              {/* 4. Bus al Convertidor DC/DC bidireccional (línea corta, doble sentido) */}
              <line
                x1="1175"
                y1="345"
                x2="1175"
                y2="368"
                stroke="#ea580c"
                strokeWidth="5"
                markerStart="url(#arrow-orange-start)"
                markerEnd="url(#arrow-orange-end)"
              />

              {/* 5. Convertidor DC/DC bidireccional a Supercapacitores (línea corta, doble sentido) */}
              <line
                x1="1175"
                y1="422"
                x2="1175"
                y2="460"
                stroke="#ea580c"
                strokeWidth="5"
                markerStart="url(#arrow-orange-start)"
                markerEnd="url(#arrow-orange-end)"
              />

              {/* 6. Bus al Inversor (línea corta, doble sentido) */}
              <line
                x1="1285"
                y1="345"
                x2="1285"
                y2="370"
                stroke="#ea580c"
                strokeWidth="5.5"
                markerStart="url(#arrow-orange-start)"
                markerEnd="url(#arrow-orange-end)"
              />

              {/* 7. Inversor al Motor PMSM (doble sentido para regeneración) */}
              <path
                d="M 1330 405 L 1350 440"
                fill="none"
                stroke="#ea580c"
                strokeWidth="5.5"
                markerStart="url(#arrow-orange-start)"
                markerEnd="url(#arrow-orange-end)"
              />
            </g>

            {/* ========================================================================= */}
            {/* LÍNEA AMARILLA DELGADA: BAJA TENSIÓN 12 V                                 */}
            {/* ========================================================================= */}
            <g id="lv-12v-cables">
              <line
                x1="1072"
                y1="422"
                x2="1072"
                y2="460"
                stroke="#eab308"
                strokeWidth="3.5"
                markerEnd="url(#arrow-yellow-end)"
              />
            </g>

            {/* ========================================================================= */}
            {/* BUS CAN: LÍNEA AZUL PUNTEADA QUE UNE VCU, MCU Y BMS                       */}
            {/* Etiqueta Bus CAN ubicada en zona despejada sin tapar celdas de batería    */}
            {/* ========================================================================= */}
            <g id="can-bus-network">
              {/* Línea principal Bus CAN entre VCU, BMS y MCU */}
              <path
                d="M 640 510 L 690 510 L 690 598 L 780 598 M 940 598 L 1020 598 L 1020 540 L 1240 510"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeDasharray="6 4"
              />

              {/* Puntos de conexión (nodos de bus CAN) */}
              <circle cx="640" cy="510" r="4.5" fill="#2563eb" />
              <circle cx="780" cy="598" r="4.5" fill="#2563eb" />
              <circle cx="940" cy="598" r="4.5" fill="#2563eb" />
              <circle cx="1240" cy="510" r="4.5" fill="#2563eb" />

              {/* Etiqueta Bus CAN (en espacio libre entre VCU y Batería, SIN tapar celdas) */}
              <g transform="translate(648, 510)">
                <rect x="0" y="-10" width="46" height="20" rx="4" fill="#2563eb" />
                <text x="23" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="800">
                  CAN
                </text>
              </g>
            </g>
          </g>

          {/* ========================================================================= */}
          {/* CUADROS DE TEXTO: TODAS LAS FLECHAS SON CORTAS Y RECTAS, APUNTANDO         */}
          {/* DIRECTO A SU BLOQUE SIN CRUZAR EL DIAGRAMA NI TAPAR RUEDAS                */}
          {/* ========================================================================= */}

          {/* 1. Cargador de a bordo Callout (desplazado a la derecha de la rueda trasera) */}
          <g
            transform="translate(515, 230)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('cargador')}
          >
            <rect
              x="0"
              y="0"
              width="230"
              height="64"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="24" fill="#0f172a" fontSize="13" fontWeight="800">
              Cargador de a bordo
            </text>
            <text x="14" y="42" fill="#475569" fontSize="11" fontWeight="500">
              convierte CA de la red en CC de alta
            </text>
            <text x="14" y="55" fill="#475569" fontSize="11" fontWeight="500">
              tensión para recargar la batería.
            </text>
            {/* Flecha corta y recta vertical hacia Cargador de a bordo */}
            <line
              x1="70"
              y1="64"
              x2="70"
              y2="148"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 2. Enchufe de Carga Callout */}
          <g
            transform="translate(40, 385)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('cargador')}
          >
            <rect
              x="0"
              y="0"
              width="165"
              height="48"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="21" fill="#0f172a" fontSize="12.5" fontWeight="800">
              Enchufe de carga
            </text>
            <text x="14" y="36" fill="#475569" fontSize="10.5" fontWeight="500">
              conecta al cargador de a bordo
            </text>
            {/* Flecha corta y recta horizontal hacia el enchufe exterior */}
            <line
              x1="165"
              y1="25"
              x2="230"
              y2="25"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 3. VCU - El Cerebro Callout */}
          <g
            transform="translate(40, 485)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('vcu')}
          >
            <rect
              x="0"
              y="0"
              width="265"
              height="66"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="24" fill="#0f172a" fontSize="13.5" fontWeight="800">
              VCU - El Cerebro
            </text>
            <text x="14" y="43" fill="#475569" fontSize="11" fontWeight="500">
              Unidad de Control del Vehículo. Coordina
            </text>
            <text x="14" y="57" fill="#475569" fontSize="11" fontWeight="500">
              el par y el reparto de energía.
            </text>
            {/* Flecha corta y recta horizontal hacia VCU */}
            <line
              x1="265"
              y1="33"
              x2="525"
              y2="33"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 4. Batería Callout (alineado con la nueva posición adelantada de la batería) */}
          <g
            transform="translate(760, 140)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('bateria')}
          >
            <rect
              x="0"
              y="0"
              width="230"
              height="58"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="24" fill="#0f172a" fontSize="14" fontWeight="800">
              Batería
            </text>
            <text x="14" y="44" fill="#475569" fontSize="11.5" fontWeight="500">
              almacena la energía del vehículo.
            </text>
            {/* Flecha corta y recta vertical hacia la Batería */}
            <line
              x1="100"
              y1="58"
              x2="100"
              y2="235"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 5. Baja Tensión (12 V) Callout (FLECHA DIRECTA AL CONVERTIDOR DC/DC 400V->12V) */}
          <g
            transform="translate(970, 230)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('dcdc_12v')}
          >
            <rect
              x="0"
              y="0"
              width="230"
              height="64"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="24" fill="#0f172a" fontSize="13" fontWeight="800">
              Baja Tensión (12 V)
            </text>
            <text x="14" y="42" fill="#475569" fontSize="11" fontWeight="500">
              Convertidor DC/DC alimenta la batería
            </text>
            <text x="14" y="55" fill="#475569" fontSize="11" fontWeight="500">
              auxiliar y redes de 12 V de a bordo.
            </text>
            {/* Flecha corta y recta vertical DIRECTA al Convertidor DC/DC 400 V a 12 V */}
            <line
              x1="102"
              y1="64"
              x2="102"
              y2="148"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 6. Inversor Callout */}
          <g
            transform="translate(1220, 230)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('inversor')}
          >
            <rect
              x="0"
              y="0"
              width="210"
              height="60"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="23" fill="#0f172a" fontSize="13.5" fontWeight="800">
              Inversor
            </text>
            <text x="14" y="41" fill="#475569" fontSize="11" fontWeight="500">
              convierte la corriente continua en alterna
            </text>
            <text x="14" y="53" fill="#475569" fontSize="11" fontWeight="500">
              para el motor.
            </text>
            {/* Flecha corta y recta vertical hacia Inversor */}
            <line
              x1="65"
              y1="60"
              x2="65"
              y2="150"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 7. BMS - La Salud Callout (flecha corta y recta hacia arriba) */}
          <g
            transform="translate(710, 680)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('bms')}
          >
            <rect
              x="0"
              y="0"
              width="210"
              height="65"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="23" fill="#0f172a" fontSize="13.5" fontWeight="800">
              BMS - La Salud
            </text>
            <text x="14" y="42" fill="#475569" fontSize="11" fontWeight="500">
              vigila celdas, temperatura y seguridad
            </text>
            <text x="14" y="56" fill="#475569" fontSize="11" fontWeight="500">
              de la batería.
            </text>
            {/* Flecha corta y recta vertical hacia BMS */}
            <line
              x1="150"
              y1="0"
              x2="150"
              y2="-50"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 8. Banco de supercapacitores Callout (flecha directa al borde del bloque, sin pasar sobre el texto) */}
          <g
            transform="translate(945, 680)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('supercapacitores')}
          >
            <rect
              x="0"
              y="0"
              width="235"
              height="65"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="23" fill="#0f172a" fontSize="13.5" fontWeight="800">
              Banco de supercapacitores
            </text>
            <text x="14" y="42" fill="#475569" fontSize="11" fontWeight="500">
              absorbe los picos de potencia y el
            </text>
            <text x="14" y="56" fill="#475569" fontSize="11" fontWeight="500">
              frenado regenerativo.
            </text>
            {/* Flecha corta y recta vertical que llega exactamente al borde inferior del bloque */}
            <line
              x1="230"
              y1="0"
              x2="230"
              y2="-140"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 9. MCU - El Músculo Callout (flecha corta y recta vertical hacia arriba) */}
          <g
            transform="translate(1200, 680)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('mcu')}
          >
            <rect
              x="0"
              y="0"
              width="210"
              height="65"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="24" fill="#0f172a" fontSize="13.5" fontWeight="800">
              MCU - El Músculo
            </text>
            <text x="14" y="43" fill="#475569" fontSize="11" fontWeight="500">
              controla el inversor y ejecuta las órdenes
            </text>
            <text x="14" y="56" fill="#475569" fontSize="11" fontWeight="500">
              de par del motor.
            </text>
            {/* Flecha corta y recta vertical hacia MCU */}
            <line
              x1="85"
              y1="0"
              x2="85"
              y2="-130"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>

          {/* 10. Motor y Transmisión Callout (ELEVADO: no tapa la rueda delantera derecha ni se corta) */}
          <g
            transform="translate(1335, 565)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectPart('motor')}
          >
            <rect
              x="0"
              y="0"
              width="230"
              height="64"
              rx="8"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              filter="url(#cardShadow)"
            />
            <text x="14" y="24" fill="#0f172a" fontSize="13" fontWeight="800">
              Motor y Transmisión
            </text>
            <text x="14" y="42" fill="#475569" fontSize="11" fontWeight="500">
              mueven las dos ruedas delanteras
            </text>
            <text x="14" y="55" fill="#475569" fontSize="11" fontWeight="500">
              sobre el eje de tracción.
            </text>
            {/* Flecha corta y recta vertical hacia la transmisión y motor */}
            <line
              x1="120"
              y1="0"
              x2="120"
              y2="-50"
              stroke="#475569"
              strokeWidth="1.8"
              markerEnd="url(#arrow-callout)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
