/**
 * Datos simplificados del tren motriz VHE con arquitectura skateboard
 * Cumple estrictamente con los 6 requerimientos de corrección
 */

export interface SimpleBlock {
  id: string;
  name: string;
  subname?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  icon: string;
  category: 'energia' | 'control' | 'traccion' | 'carga';
  description: string;
}

export const SIMPLE_BLOCKS: SimpleBlock[] = [
  // 1. Batería: Bloque grande y plano en el centro del piso, ocupando la mayor parte de la base
  {
    id: 'bateria',
    name: 'Batería',
    x: 480,
    y: 410,
    width: 290,
    height: 155,
    icon: 'battery-3cells',
    category: 'energia',
    description: 'Batería principal de tracción (LFP). Bloque grande y plano ubicado en la base skateboard, más cerca del eje trasero.',
  },
  // 2. BMS: Pegado a la batería
  {
    id: 'bms',
    name: 'BMS',
    x: 480,
    y: 575,
    width: 290,
    height: 48,
    icon: 'bms-chip',
    category: 'control',
    description: 'Sistema de gestión de batería (BMS) acoplado directamente al paquete de baterías para monitorear celdas y temperatura.',
  },
  // 3. Banco de supercapacitores: Entre la batería y el inversor, cerca del inversor, dentro de la base
  {
    id: 'supercapacitores',
    name: 'Banco de supercapacitores',
    x: 825,
    y: 435,
    width: 215,
    height: 105,
    icon: 'zap',
    category: 'energia',
    description: 'Almacenamiento de alta potencia ubicado dentro de la base skateboard, entre la batería y el inversor.',
  },
  // 4. VCU: En el centro del auto, encima de la base (no se cruza con la línea roja)
  {
    id: 'vcu',
    name: 'VCU',
    subname: '(Cerebro del sistema)',
    x: 640,
    y: 285,
    width: 175,
    height: 70,
    icon: 'brain',
    category: 'control',
    description: 'Unidad de control del vehículo. Cerebro del sistema ubicado en el centro del auto por encima de la base.',
  },
  // 5. Inversor: Agrupado en el eje delantero
  {
    id: 'inversor',
    name: 'Inversor',
    x: 1085,
    y: 350,
    width: 160,
    height: 75,
    icon: 'inverter-wave',
    category: 'traccion',
    description: 'Inversor de potencia para conversión CC/CA bidireccional, ubicado en el conjunto delantero.',
  },
  // 6. MCU: Agrupado en el eje delantero
  {
    id: 'mcu',
    name: 'MCU',
    subname: '(Controlador del motor)',
    x: 1085,
    y: 565,
    width: 195,
    height: 65,
    icon: 'mcu-controller',
    category: 'control',
    description: 'Controlador del motor (MCU) agrupado en el módulo del eje delantero.',
  },
  // 7. Motor eléctrico (PMSM): En el eje delantero
  {
    id: 'motor',
    name: 'Motor eléctrico (PMSM)',
    x: 1085,
    y: 445,
    width: 195,
    height: 85,
    icon: 'motor-ac',
    category: 'traccion',
    description: 'Motor síncrono de imanes permanentes montado en el eje delantero.',
  },
  // 8. Transmisión: Pegada al motor, sobre la línea del eje
  {
    id: 'transmision',
    name: 'Transmisión',
    x: 1290,
    y: 445,
    width: 135,
    height: 85,
    icon: 'gears',
    category: 'traccion',
    description: 'Caja reductora y diferencial pegada directamente al motor sobre la línea del eje delantero.',
  },
  // 9. Enchufe de carga: En la parte trasera, conectado a la batería, texto libre y visible
  {
    id: 'enchufe',
    name: 'Enchufe de carga',
    x: 100,
    y: 450,
    width: 175,
    height: 70,
    icon: 'plug-external',
    category: 'carga',
    description: 'Toma de recarga exterior ubicada en la parte trasera, conectada con cable a la batería.',
  },
];
