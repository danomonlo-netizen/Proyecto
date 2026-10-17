/**
 * Tipos de datos para el diagrama funcional del tren motriz VHE
 * Arquitectura Skateboard con hibridación Batería LFP + Supercapacitores
 */

export type ElectricalDomain = 'alta_tension' | 'baja_tension' | 'mecanica' | 'control_can' | 'interfaz_conductor' | 'traccion';

export type OperatingMode = 'static' | 'traction' | 'regen' | 'charging';

export type ConnectionFilter = 'all' | 'hv' | 'can' | 'mechanical';

export interface BlockData {
  id: string;
  number: number;
  name: string;
  shortName: string;
  category: 'almacenamiento' | 'conversion' | 'distribucion' | 'traccion' | 'control' | 'auxiliares' | 'interfaz';
  domain: ElectricalDomain;
  x: number;
  y: number;
  width: number;
  height: number;
  icon: string;
  specs: {
    label: string;
    value: string;
  }[];
  description: string;
  roleInSkateboard: string;
  inputs: string[];
  outputs: string[];
  protocols?: string[];
  safetyFeatures?: string[];
}

export interface ConnectionPath {
  id: string;
  type: 'hv_dc' | 'hv_ac' | 'mechanical' | 'can_bus' | 'driver_signal' | 'lv_dc';
  label?: string;
  path: string; // SVG path data (d)
  sourceId: string;
  targetId: string;
  bidirectional?: boolean;
  activeInModes?: OperatingMode[];
  reverseFlowInRegen?: boolean;
  animated?: boolean;
}
