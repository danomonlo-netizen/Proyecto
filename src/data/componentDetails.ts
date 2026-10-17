export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface DetailedComponentInfo {
  id: string;
  number: number;
  name: string;
  shortName: string;
  category: string;
  domain: 'alta_tension' | 'baja_tension' | 'mecanica' | 'control_can' | 'traccion' | 'carga';
  domainLabel: string;
  domainColor: string;
  iconName: string;
  headline: string;
  description: string;
  roleInSkateboard: string;
  specs: TechnicalSpec[];
  inputs: string[];
  outputs: string[];
  protocols: string[];
  safetyFeatures: string[];
  regenBehavior: string;
  tractionBehavior: string;
}

export const COMPONENT_DETAILS: Record<string, DetailedComponentInfo> = {
  bateria: {
    id: 'bateria',
    number: 1,
    name: 'Batería de Alta Tensión (LFP)',
    shortName: 'Batería LFP (400 V)',
    category: 'Almacenamiento electroquímico continuo',
    domain: 'alta_tension',
    domainLabel: 'Alta Tensión 400 V CC',
    domainColor: 'text-orange-600 bg-orange-50 border-orange-200',
    iconName: 'battery-charging',
    headline: 'Paquete de celdas prismáticas LFP de 400 V CC y 30 kWh de capacidad',
    description: 'Constituye la fuente primaria de almacenamiento electroquímico continuo del vehículo eléctrico. Su química de fosfato de hierro y litio (LiFePO4) proporciona extraordinaria estabilidad térmica (no propensa al embalamiento térmico), seguridad pasiva y una vida útil superior a 3.500 ciclos completos de carga/descarga.',
    roleInSkateboard: 'Ubicada en el piso plano central del chasis skateboard, entre el 25 % y 67 % de la batalla, concentrando la masa suspendida en el punto más bajo para optimizar el centro de gravedad, el espacio interior del habitáculo y la rigidez torsional.',
    specs: [
      { label: 'Química de celda', value: 'LFP (LiFePO4 / Grafito)' },
      { label: 'Tensión nominal', value: '400 V CC (rango útil 320 V - 438 V)' },
      { label: 'Capacidad energética', value: '30 kWh nominales' },
      { label: 'Corriente continua', value: '150 A (pico 250 A en descarga)' },
      { label: 'Ciclos de vida', value: '> 3.500 ciclos al 80 % SOH' },
      { label: 'Refrigeración', value: 'Placa de enfriamiento líquido inferior (glicol-agua)' },
    ],
    inputs: [
      'Corriente de recarga desde el Cargador de a bordo (OBC) a través del cable naranja HV',
      'Corriente de recarga desde el Bus de 400 V durante frenado regenerativo sostenido',
      'Sensado térmico y balanceo de celdas controlado por el BMS',
    ],
    outputs: [
      'Potencia eléctrica continua hacia el Bus de alta tensión de 400 V',
      'Alimentación del inversor de tracción y convertidores auxiliares',
    ],
    protocols: [
      'Cableado analógico multicanal directo a esclavos de medición del BMS',
      'Líneas redundantes de temperatura NTC por módulo',
    ],
    safetyFeatures: [
      'Contactor principal de polo positivo (+) y polo negativo (-)',
      'Relé y resistencia de precarga para evitar picos de corriente capacitiva',
      'Fusible pirotécnico (Pyro-Fuse) activado por impacto o sobrecorriente extrema',
      'Membrana de alivio de sobrepresión contra gases de venteo',
    ],
    tractionBehavior: 'Suministra la corriente base continua requerida por el motor a velocidad de crucero sin sufrir estrés térmico.',
    regenBehavior: 'Absorbe la corriente regenerativa sostenida a tasas moderadas una vez superado el pico inicial capturado por los supercapacitores.',
  },

  bms: {
    id: 'bms',
    number: 2,
    name: 'BMS (Battery Management System)',
    shortName: 'BMS (Gestión de Batería)',
    category: 'Unidad de Control Electrónico (ECU)',
    domain: 'control_can',
    domainLabel: 'Control y Comunicación CAN',
    domainColor: 'text-blue-600 bg-blue-50 border-blue-200',
    iconName: 'cpu',
    headline: 'Sistema de monitoreo de celdas, temperatura, SOC, SOH y límites dinámicos',
    description: 'Unidad de control electrónico (ECU) acoplada directamente al paquete de batería. Mide en milivoltios cada celda individual, supervisa temperaturas en tiempo real, estima el Estado de Carga (SOC) y Salud (SOH), realiza balanceo celular pasivo/activo y calcula los límites máximos permitidos de corriente de carga (CCL) y descarga (DCL).',
    roleInSkateboard: 'Pegado a la cara inferior de la batería y conectado al Bus CAN, salvaguarda la integridad de las celdas y comanda la apertura instantánea de los contactores pirotécnicos ante cualquier anomalía.',
    specs: [
      { label: 'Precisión de lectura', value: '± 1.5 mV por celda LFP' },
      { label: 'Tasa de muestreo', value: 'Lectura completa en 10 ms' },
      { label: 'Balanceo de celdas', value: 'Pasivo disipativo / activo dinámico' },
      { label: 'Bus de comunicación', value: 'Bus CAN 2.0B / CAN FD aislado' },
      { label: 'Nivel de seguridad', value: 'ISO 26262 ASIL D' },
    ],
    inputs: [
      'Tensiones individuales de las celdas LFP',
      'Sondas de temperatura de coeficiente negativo (NTC)',
      'Sensor shunt de corriente de alta precisión en borne negativo',
    ],
    outputs: [
      'Límites dinámicos de corriente (DCL y CCL) transmitidos a la VCU por Bus CAN',
      'Control de bobinas de contactores principales y relé de precarga',
      'Estado de carga (SOC %) al tablero y gestión de potencia',
    ],
    protocols: [
      'CAN Bus aislado galvánicamente (> 2.5 kV)',
      'Lazo de interbloqueo de alta tensión (HVIL)',
    ],
    safetyFeatures: [
      'Detección de falla de aislamiento óhmico respecto a chasis (Megóhmetro)',
      'Desconexión por sobretensión, subtensión o sobrecalentamiento en < 15 ms',
    ],
    tractionBehavior: 'Transmite continuamente a la VCU el límite máximo de corriente de descarga (DCL) para no dañar las celdas.',
    regenBehavior: 'Informa a la VCU del límite de corriente de carga (CCL); si el SOC es elevado (> 95 %), limita la regeneración a batería y delega en supercapacitores o frenos mecánicos.',
  },

  supercapacitores: {
    id: 'supercapacitores',
    number: 3,
    name: 'Banco de Supercapacitores',
    shortName: 'Supercapacitores (EDLC)',
    category: 'Almacenamiento electrostático de potencia',
    domain: 'alta_tension',
    domainLabel: 'Alta Tensión (Vía DC/DC)',
    domainColor: 'text-amber-600 bg-amber-50 border-amber-200',
    iconName: 'zap',
    headline: 'Búfer de ultra-alta potencia para aceleraciones bruscas y frenado regenerativo',
    description: 'Sistema de almacenamiento electrostático basado en condensadores electroquímicos de doble capa (EDLC). Ofrece una densidad de potencia extremadamente alta (> 5 kW/kg) con resistencia serie equivalente (ESR) ultrabaja, permitiendo absorber picos masivos de corriente de frenado regenerativo y entregarlos en aceleraciones sin degradación química.',
    roleInSkateboard: 'Ubicado en el túnel delantero del skateboard junto al convertidor DC/DC bidireccional y el inversor, actúa como escudo protector que alivia a la batería química del ciclado severo característico del tráfico urbano "stop-and-go".',
    specs: [
      { label: 'Tecnología', value: 'EDLC electroquímico de carbón activado' },
      { label: 'Tensión de banco', value: '48 V - 120 V (tensión flotante variable)' },
      { label: 'Capacidad equivalente', value: '165 Faradios / 120 V' },
      { label: 'Potencia específica', value: '> 5 kW/kg (densidad de potencia extrema)' },
      { label: 'Resistencia interna (ESR)', value: '< 4.5 mΩ' },
      { label: 'Vida útil en ciclos', value: '> 1.000.000 de ciclos (sin degradación)' },
    ],
    inputs: [
      'Flujo de carga rápida desde el Convertidor DC/DC bidireccional durante frenadas regenerativas',
    ],
    outputs: [
      'Descarga instantánea de corriente hacia el Convertidor DC/DC bidireccional en aceleraciones',
    ],
    protocols: [
      'Monitoreo analógico de temperatura y equilibrio de tensión celular a su ECU dedicada',
    ],
    safetyFeatures: [
      'Módulos de balanceo pasivo por celda',
      'Circuito de descarga forzada de seguridad para mantenimiento',
    ],
    tractionBehavior: 'Provee la potencia pico inicial en los primeros segundos de aceleración, aliviando el estrés de corriente de la batería química.',
    regenBehavior: 'Capta el 100 % del pico de corriente cinética en frenadas intensas urbanas antes de que la química LFP pueda reaccionar.',
  },

  dcdc_bidireccional: {
    id: 'dcdc_bidireccional',
    number: 4,
    name: 'Convertidor DC/DC Bidireccional',
    shortName: 'DC/DC Bidireccional (SC)',
    category: 'Conversión electrónica de potencia',
    domain: 'alta_tension',
    domainLabel: 'Alta Tensión 400 V CC',
    domainColor: 'text-orange-600 bg-orange-50 border-orange-200',
    iconName: 'repeat',
    headline: 'Adaptador de tensión variable entre supercapacitores (48-120 V) y Bus (400 V)',
    description: 'Etapa electrónica de potencia de alta frecuencia basada en semiconductores de carburo de silicio (SiC). Permite el flujo de energía en ambos sentidos: eleva la tensión de los supercapacitores (48 V - 120 V) a los 400 V del bus en aceleración (Boost), y reduce los 400 V del bus para recargar los supercapacitores en frenada (Buck).',
    roleInSkateboard: 'Conectado directamente a la barra horizontal del Bus de 400 V y comandado por la VCU mediante Bus CAN con algoritmos de hibridación activa en tiempo real.',
    specs: [
      { label: 'Topología', value: 'Buck-Boost sincrónico multifase entrelazado' },
      { label: 'Semiconductores', value: 'MOSFETs de Carburo de Silicio (SiC) 650 V' },
      { label: 'Potencia nominal / pico', value: '25 kW continuo / 35 kW pico (10 s)' },
      { label: 'Eficiencia de conversión', value: '> 97.8 % en ambos sentidos' },
      { label: 'Frecuencia de conmutación', value: '100 kHz (mínimo rizado)' },
    ],
    inputs: [
      'Tensión variable desde el banco de supercapacitores',
      'Consigna de potencia comandada por la VCU vía Bus CAN',
    ],
    outputs: [
      'Corriente continua regulada hacia el Bus de 400 V en aceleración',
      'Corriente regulada de recarga a los supercapacitores en frenada',
    ],
    protocols: [
      'CAN Bus 2.0B / CAN FD en lazo de 10 ms con la VCU',
    ],
    safetyFeatures: [
      'Protección contra sobretensión en enlace de 400 V',
      'Límite de corriente inductiva ciclo a ciclo y desconexión térmica',
    ],
    tractionBehavior: 'Opera en modo elevador inyectando hasta 35 kW en el bus de 400 V durante aceleraciones a fondo.',
    regenBehavior: 'Opera en modo reductor desviando la energía de frenado hacia los supercapacitores para recargarlos en menos de 8 segundos.',
  },

  bus_alta_tension: {
    id: 'bus_alta_tension',
    number: 5,
    name: 'Bus de Alta Tensión de 400 V',
    shortName: 'Bus Central 400 V CC',
    category: 'Distribución eléctrica de potencia',
    domain: 'alta_tension',
    domainLabel: 'Alta Tensión 400 V CC',
    domainColor: 'text-orange-600 bg-orange-50 border-orange-200',
    iconName: 'activity',
    headline: 'Barra horizontal central de distribución de potencia de 400 V CC',
    description: 'La columna vertebral eléctrica del tren motriz. Consiste en barras conductoras macizas bipolares (+ y -) apantalladas que distribuyen la corriente continua de 400 V entre todas las fuentes de energía (batería, supercapacitores vía DC/DC, cargador de a bordo) y todos los consumidores (inversor de tracción y convertidor de 12 V).',
    roleInSkateboard: 'Dispuesta horizontalmente en la estructura central blindada del chasis, minimiza las longitudes de cableado de alta potencia, reduciendo pérdidas I²R y emisiones electromagnéticas (EMI).',
    specs: [
      { label: 'Tensión nominal', value: '400 V CC (rango de operación: 320 V - 440 V)' },
      { label: 'Corriente admisible', value: '250 A continuo / 400 A pico' },
      { label: 'Estructura', value: 'Barras de cobre electrolítico Cu-ETP estañado' },
      { label: 'Aislamiento a chasis', value: '> 500 Ω/V (según norma UN ECE R100)' },
    ],
    inputs: [
      'Energía desde la Batería LFP',
      'Energía desde el DC/DC de Supercapacitores',
      'Energía desde el Cargador de a bordo (OBC)',
      'Energía regenerada desde el Inversor trifásico',
    ],
    outputs: [
      'Alimentación al Inversor trifásico de tracción',
      'Alimentación al Convertidor DC/DC de 400 V a 12 V',
    ],
    protocols: [
      'Vigilancia continua de aislamiento óhmico activo por el BMS',
    ],
    safetyFeatures: [
      'Lazo de interbloqueo de alta tensión (HVIL)',
      'Descarga activa de condensadores de enlace a tensión segura (< 60 V) en < 2 s',
    ],
    tractionBehavior: 'Canaliza los flujos combinados de la batería y los supercapacitores hacia el inversor con mínima impedancia.',
    regenBehavior: 'Recibe la corriente rectificada por el inversor trifásico y la distribuye a los supercapacitores y la batería.',
  },

  inversor: {
    id: 'inversor',
    number: 6,
    name: 'Inversor Trifásico (CC / CA)',
    shortName: 'Inversor Trifásico',
    category: 'Electrónica de potencia de tracción',
    domain: 'alta_tension',
    domainLabel: 'Alta Tensión (CC a 3~ CA)',
    domainColor: 'text-purple-600 bg-purple-50 border-purple-200',
    iconName: 'inverter-wave',
    headline: 'Conversión bidireccional entre 400 V CC del bus y corriente alterna trifásica',
    description: 'Puente trifásico de potencia compuesto por transistores de conmutación rápida (SiC MOSFET / IGBT). Transforma la corriente continua del bus de 400 V en corriente alterna trifásica sinusoidal con control de frecuencia y amplitud variables para gobernar el par y las RPM del motor PMSM. Durante la frenada regenerativa, opera como rectificador activo.',
    roleInSkateboard: 'Situado en el subchasis delantero sobre el eje motriz, formando un conjunto e-Axle compacto junto al motor y la transmisión reductora.',
    specs: [
      { label: 'Semiconductores', value: 'Módulos SiC MOSFET de 650 V / 400 A' },
      { label: 'Modulación', value: 'SVPWM (Space Vector PWM a 12 kHz)' },
      { label: 'Potencia nominal / pico', value: '55 kW continuo / 70 kW pico' },
      { label: 'Eficiencia pico', value: '98.6 %' },
      { label: 'Refrigeración', value: 'Líquida (circuito de agua-glicol a contracorriente)' },
    ],
    inputs: [
      'Tensión continua desde el Bus de 400 V CC',
      'Señales de compuerta (Gate Drive) calculadas por el MCU',
    ],
    outputs: [
      'Corriente trifásica CA (Fases U, V, W) hacia el motor eléctrico PMSM',
      'Corriente continua regenerada inyectada al Bus de 400 V',
    ],
    protocols: [
      'Control de compuertas por fibra óptica/señales analógicas aisladas del MCU',
    ],
    safetyFeatures: [
      'Protección contra cortocircuito por desaturación de MOSFETs (< 2 µs)',
      'Parada segura de par (STO - Safe Torque Off conforme a ISO 13849)',
    ],
    tractionBehavior: 'Conmuta a 12 kHz modulando la corriente sinusoidal trifásica para entregar par instantáneo desde 0 RPM.',
    regenBehavior: 'Rectifica la fuerza contraelectromotriz (FCEM) generada por el giro de las ruedas en electricidad continua de 400 V.',
  },

  mcu: {
    id: 'mcu',
    number: 7,
    name: 'MCU (Controlador del Motor)',
    shortName: 'MCU - El Músculo',
    category: 'Unidad de Control Electrónico (ECU)',
    domain: 'control_can',
    domainLabel: 'Control y Comunicación CAN',
    domainColor: 'text-blue-600 bg-blue-50 border-blue-200',
    iconName: 'mcu-controller',
    headline: 'El Músculo: Ejecución del control vectorial FOC y pilotaje del inversor',
    description: 'Unidad de control microelectrónica dedicada al tren motriz. Conocida como "El Músculo", ejecuta en lazos de alta velocidad (20 kHz) los algoritmos de Control Orientado al Campo (FOC) con seguimiento de Máximo Par por Amperio (MTPA), traduciendo las órdenes de par de la VCU en pulsos de conmutación precisos para el inversor.',
    roleInSkateboard: 'Montada directamente adyacente al inversor sobre el eje delantero, reduciendo las latencias de disparo y el ruido electromagnético.',
    specs: [
      { label: 'Procesador', value: 'Microcontrolador automotriz de 32 bits dual-core lockstep' },
      { label: 'Frecuencia de lazo FOC', value: '20 kHz (período de cálculo de 50 µs)' },
      { label: 'Seguridad funcional', value: 'ISO 26262 ASIL D' },
      { label: 'Sensores de entrada', value: 'Resolver sen/cos angular + 3 sensores de corriente Hall' },
    ],
    inputs: [
      'Consigna de par motor transmitida por la VCU vía Bus CAN',
      'Posición angular absoluta del rotor proveniente del resolver del motor',
      'Lecturas de corriente de fase instantánea (Iu, Iv, Iw)',
    ],
    outputs: [
      'Señales PWM moduladas en vector espacial hacia los drivers del inversor',
      'Telemetría de velocidad real, par medido y temperatura a la VCU por Bus CAN',
    ],
    protocols: [
      'Bus CAN dedicado de alta velocidad para tren motriz (500 kbps)',
    ],
    safetyFeatures: [
      'Monitoreo cruzado de par solicitado vs par producido (E-Gas Level 2)',
      'Desconexión segura de excitación ante sobrevelocidad o error de resolver',
    ],
    tractionBehavior: 'Controla el flujo magnético para maximizar la aceleración de 0 a 50 km/h en régimen urbano.',
    regenBehavior: 'Aplica par negativo controlado para decelera el vehículo suavemente y maximizar la recuperación de energía cinética.',
  },

  motor: {
    id: 'motor',
    number: 8,
    name: 'Motor Síncrono de Imanes Permanentes (PMSM)',
    shortName: 'Motor PMSM (55 kW)',
    category: 'Máquina eléctrica de tracción',
    domain: 'traccion',
    domainLabel: 'Tracción Mecánica y Eléctrica',
    domainColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconName: 'motor-rotor',
    headline: 'Motor síncrono interior de imanes permanentes (IPMSM) de 55 kW',
    description: 'Máquina eléctrica síncrona de imanes permanentes interiores (IPMSM) de alta densidad de par. Entrega 55 kW nominales (hasta 70 kW pico) y 180 Nm de par motor instantáneo desde 0 RPM. En fases de desaceleración y frenado, trabaja como generador convirtiendo el movimiento de las ruedas en energía eléctrica.',
    roleInSkateboard: 'Dispuesto transversalmente sobre el eje delantero dentro del chasis skateboard, transmitiendo su par directamente a la transmisión reductora contigua.',
    specs: [
      { label: 'Tipo', value: 'Síncrono trifásico de imanes interiores (IPMSM)' },
      { label: 'Potencia nominal / pico', value: '55 kW (75 CV) / 70 kW pico' },
      { label: 'Par máximo', value: '180 Nm disponible desde 0 a 3.500 RPM' },
      { label: 'Régimen máximo', value: '11.000 RPM' },
      { label: 'Eficiencia motriz', value: '> 96.5 % en zona óptima' },
      { label: 'Refrigeración', value: 'Camisa perimetral líquida (agua-glicol)' },
    ],
    inputs: [
      'Corriente alterna trifásica sinusoidal (Fases U, V, W) desde el Inversor',
      'Par resistente mecánico desde la transmisión y las ruedas',
    ],
    outputs: [
      'Par mecánico rotacional hacia la transmisión reductora',
      'Tensión trifásica generada durante el frenado regenerativo',
    ],
    protocols: [
      'Resolver analógico sen/cos para sincronización electromagnética del rotor',
    ],
    safetyFeatures: [
      'Termistores PT1000 embebidos en el bobinado estatórico',
      'Rotor equilibrado para evitar desmagnetización térmica por temperatura',
    ],
    tractionBehavior: 'Entrega aceleración limpia, lineal y silenciosa sin baches de potencia ni cambios de marcha.',
    regenBehavior: 'Frena el vehículo ejerciendo par resistente magnético en las ruedas y transformando la inercia en electricidad.',
  },

  transmision: {
    id: 'transmision',
    number: 9,
    name: 'Transmisión (Reductor de 1 velocidad)',
    shortName: 'Transmisión (Reductor)',
    category: 'Mecánica de transmisión de par',
    domain: 'mecanica',
    domainLabel: 'Unión Mecánica a Ruedas',
    domainColor: 'text-slate-600 bg-slate-50 border-slate-200',
    iconName: 'gear-box',
    headline: 'Caja reductora de relación fija y diferencial integrado hacia las ruedas',
    description: 'Conjunto mecánico reductor de engranajes helicoidales de relación fija (8.5:1) con diferencial simétrico integrado. No requiere embrague ni caja de cambios multimarcha: multiplica el par del motor eléctrico y distribuye la rotación directamente hacia las ruedas motrices delanteras izquierda y derecha a través de los semiejes (palieres).',
    roleInSkateboard: 'Pegada al motor sobre la línea del eje delantero dentro de la carrocería, de donde parten dos líneas mecánicas cortas a las ruedas delanteras motrices.',
    specs: [
      { label: 'Relación de reducción', value: '8.5 : 1 (reducción simple fija)' },
      { label: 'Diferencial', value: 'Mecánico cónico integrado' },
      { label: 'Engranajes', value: 'Dentado helicoidal cementado y rectificado' },
      { label: 'Lubricación', value: 'Por barboteo con aceite sintético de baja viscosidad' },
      { label: 'Bloqueo de Parking', value: 'Trinquete de accionamiento electromecánico (P)' },
    ],
    inputs: [
      'Eje de entrada acoplado directamente al rotor del motor PMSM',
    ],
    outputs: [
      'Semieje izquierdo hacia la rueda delantera izquierda',
      'Semieje derecho hacia la rueda delantera derecha',
    ],
    protocols: [
      'Sensor de posición de trinquete de estacionamiento (Park Pawl Sensor)',
    ],
    safetyFeatures: [
      'Enclavamiento mecánico de seguridad en posición Parking (P)',
      'Sellos laberinto para evitar fugas de lubricante al compartimento eléctrico',
    ],
    tractionBehavior: 'Multiplica los 180 Nm del motor por 8.5 entregando más de 1.500 Nm totales a las ruedas para un arranque dinámico.',
    regenBehavior: 'Transmite el par de frenado de ambas ruedas en sentido inverso hacia el eje del motor PMSM.',
  },

  vcu: {
    id: 'vcu',
    number: 11,
    name: 'VCU (Unidad de Control del Vehículo)',
    shortName: 'VCU - El Cerebro',
    category: 'Unidad de Control Electrónico (ECU)',
    domain: 'control_can',
    domainLabel: 'Control y Comunicación CAN',
    domainColor: 'text-blue-600 bg-blue-50 border-blue-200',
    iconName: 'brain',
    headline: 'El Cerebro del Vehículo: Coordinación integral del par y reparto de energía',
    description: 'La Unidad de Control del Vehículo (VCU) actúa como el cerebro coordinador central del vehículo eléctrico. Interpreta en tiempo real las demandas del conductor (pedal acelerador, pedal de freno, selector de marchas) y decide estratégicamente el reparto de energía entre la batería y los supercapacitores mediante el Bus CAN.',
    roleInSkateboard: 'Situada en la parte trasera-central del habitáculo, lejos de la zona de alta potencia, garantizando inmunidad a ruidos electromagnéticos y supervisando la seguridad funcional de todo el sistema.',
    specs: [
      { label: 'Arquitectura', value: 'Microcontrolador automotriz ASIL D multinúcleo' },
      { label: 'Lazo de control', value: 'Ciclo determinístico de 10 ms' },
      { label: 'Buses de red', value: '3 canales CAN (Powertrain, Chassis, Body)' },
      { label: 'Estrategia HESS', value: 'Filtrado pasa-bajos para batería y pasa-altos para supercapacitores' },
    ],
    inputs: [
      'Sensores redundantes de pedal de acelerador y carrera de freno',
      'Selector de marchas PRND',
      'Telemetría periódica del BMS, MCU y convertidores vía Bus CAN',
    ],
    outputs: [
      'Consigna de par motriz y regenerativo al MCU por Bus CAN',
      'Consigna de potencia de carga/descarga al DC/DC bidireccional',
      'Comandos de estado y seguridad a toda la red vehicular',
    ],
    protocols: [
      'Bus CAN automotriz a 500 kbps (mensajes cíclicos con CRC y Rolling Counter)',
    ],
    safetyFeatures: [
      'Monitoreo redundante de canales de acelerador con correlación cruzada',
      'Modo de emergencia (Limp-Home) ante desconexión o fallo de algún nodo CAN',
    ],
    tractionBehavior: 'Calcula la demanda de par y ordena al convertidor DC/DC inyectar los picos desde supercapacitores, protegiendo la batería.',
    regenBehavior: 'Combina el frenado regenerativo magnético con el frenado por fricción (brake blending) para máxima recuperación y seguridad.',
  },

  cargador: {
    id: 'cargador',
    number: 12,
    name: 'Cargador de a bordo (OBC) y Enchufe',
    shortName: 'Cargador OBC (7 kW)',
    category: 'Recarga y conversión CA a CC',
    domain: 'carga',
    domainLabel: 'Recarga de Alta Tensión',
    domainColor: 'text-blue-600 bg-blue-50 border-blue-200',
    iconName: 'plug',
    headline: 'Cargador de 7 kW con enchufe exterior tipo 2 para recarga desde la red eléctrica',
    description: 'Convertidor CA/CC inteligente instalado en el vehículo. Recibe corriente alterna (CA) de la red eléctrica domiciliaria o estación pública a través del conector exterior y la rectifica en corriente continua (CC) de alta tensión para recargar la batería de 400 V.',
    roleInSkateboard: 'Instalado en la parte trasera del chasis junto a la batería; el enchufe de carga exterior se conecta a él y el cargador alimenta directamente a la batería con una flecha de un solo sentido.',
    specs: [
      { label: 'Potencia nominal', value: '7,4 kW (monofásica 230 V / 32 A)' },
      { label: 'Tensión de salida', value: '300 V - 440 V CC adaptativa' },
      { label: 'Eficiencia de recarga', value: '> 94.5 % con factor de potencia > 0.99' },
      { label: 'Conector de carga', value: 'IEC 62196 Tipo 2 (Mennekes) / SAE J1772' },
    ],
    inputs: [
      'Corriente alterna monofásica (230 V CA) desde la red eléctrica exterior',
      'Señales de control piloto CP y PP desde la estación de recarga',
    ],
    outputs: [
      'Corriente continua de alta tensión inyectada directamente a la batería',
    ],
    protocols: [
      'Protocolo de señalización piloto IEC 61851 / SAE J1772',
      'Comunicación CAN con el BMS para perfil de carga CC-CV',
    ],
    safetyFeatures: [
      'Aislamiento galvánico reforzado entre red eléctrica y masa del auto',
      'Detección de corriente de fuga residual CC y CA (RCD integrado)',
    ],
    tractionBehavior: 'Desactivado y bloqueado electrónicamente durante la marcha del vehículo (Drive-Off Protection).',
    regenBehavior: 'No interviene en marcha.',
  },

  dcdc_12v: {
    id: 'dcdc_12v',
    number: 13,
    name: 'Convertidor DC/DC de 400 V a 12 V',
    shortName: 'DC/DC 400 V → 12 V',
    category: 'Conversión a baja tensión',
    domain: 'baja_tension',
    domainLabel: 'Baja Tensión 12 V CC',
    domainColor: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    iconName: 'arrow-down-circle',
    headline: 'Reductor de 400 V CC a 12 V para alimentar la batería auxiliar y ECUs',
    description: 'Sustituto de estado sólido del alternador convencional. Reduce la alta tensión del Bus de 400 V a un nivel regulado y seguro de 12 V - 14 V CC, suministrando energía a la batería auxiliar y a todas las redes de baja tensión (alumbrado, frenos asistidos, dirección eléctrica EPS, infoentretenimiento y ECUs).',
    roleInSkateboard: 'Ubicado entre la batería y los supercapacitores, conectado al bus de 400 V con flecha de un solo sentido y alimentando la batería auxiliar contigua.',
    specs: [
      { label: 'Tensión de entrada', value: '300 V - 440 V CC (desde Bus 400 V)' },
      { label: 'Tensión de salida', value: '13.8 V - 14.4 V CC regulada' },
      { label: 'Potencia nominal', value: '2.5 kW continuo (~180 A a 13.8 V)' },
      { label: 'Aislamiento galvánico', value: '> 2.5 kV entre 400 V y 12 V' },
      { label: 'Eficiencia', value: '> 95 %' },
    ],
    inputs: [
      'Tensión continua de 400 V desde el Bus de alta tensión',
    ],
    outputs: [
      'Línea de 12 V CC hacia la batería auxiliar y auxiliares de baja tensión',
    ],
    protocols: [
      'Monitoreo de estado y temperatura mediante Bus CAN',
    ],
    safetyFeatures: [
      'Aislamiento galvánico completo para proteger las ECUs de 12 V de cualquier contacto con 400 V',
      'Protección contra cortocircuitos y sobretensión en salida de 12 V',
    ],
    tractionBehavior: 'Abastece continuamente los 12 V necesarios para la dirección eléctrica EPS y las luces.',
    regenBehavior: 'Continúa funcionando de forma ininterrumpida durante la frenada regenerativa.',
  },

  auxiliares_12v: {
    id: 'auxiliares_12v',
    number: 14,
    name: 'Batería auxiliar 12 V y Auxiliares',
    shortName: 'Batería Auxiliar 12 V',
    category: 'Red de baja tensión y seguridad',
    domain: 'baja_tension',
    domainLabel: 'Baja Tensión 12 V CC',
    domainColor: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    iconName: 'battery',
    headline: 'Batería de 12 V y red de actuadores, iluminación, frenos e instrumentación',
    description: 'Batería auxiliar de 12 V (plomo-ácido AGM o LiFePO4 de 12 V) y red de distribución de baja tensión. Mantiene operativas las computadoras (VCU, MCU, BMS), la dirección asistida eléctrica, las bombas de vacío de frenos, el alumbrado exterior e interior y el sistema de apertura/cierre, garantizando la seguridad en todo momento.',
    roleInSkateboard: 'Situada en el compartimiento técnico auxiliar de 12 V, alimentada por el convertidor DC/DC de 400 V a 12 V.',
    specs: [
      { label: 'Tensión nominal', value: '12 V CC (química AGM / LiFePO4)' },
      { label: 'Capacidad', value: '45 Ah a 12 V (~540 Wh)' },
      { label: 'Cargas principales', value: 'ECUs, dirección EPS, bomba de vacío, luces, airbags' },
    ],
    inputs: [
      'Recarga continua en línea amarilla de 12 V desde el Convertidor DC/DC',
    ],
    outputs: [
      'Alimentación de reposo y arranque para la activación de contactores de alta tensión',
      'Energía para todos los sistemas de seguridad pasiva y activa de 12 V',
    ],
    protocols: [
      'Sensor inteligente de batería (IBS) en borne negativo por LIN bus',
    ],
    safetyFeatures: [
      'Garantiza que la dirección asistida y el servofreno funcionen incluso ante desconexión de alta tensión',
    ],
    tractionBehavior: 'Alimenta las bombas de refrigeración y la electrónica de potencia.',
    regenBehavior: 'Mantiene operativos los sensores ABS y el módulo ESP para la coordinación del frenado.',
  },
};
