import {
  terciadoPlywood, construccionCemento, ferreteriaTornillos, terminacionesPinturas,
  mdfStack, melaminaBlanca, pinoCepillado, maderaTextura,
} from './assets.js';

export const FAMILY_IMG = {
  maderas: terciadoPlywood,
  construccion: construccionCemento,
  ferreteria: ferreteriaTornillos,
  terminaciones: terminacionesPinturas,
};

export const FAMILY_NAMES = {
  maderas: 'Maderas y tableros',
  construccion: 'Construcción',
  ferreteria: 'Ferretería',
  terminaciones: 'Terminaciones',
};

export const FAMILY_KEYS = ['maderas', 'construccion', 'ferreteria', 'terminaciones'];

export const SUBCATS = {
  maderas: ['Maderas dimensionadas', 'Pino', 'Terciados y plywood', 'MDF', 'Melamina', 'OSB', 'Tableros aglomerados', 'Molduras y cornisas'],
  construccion: ['Cementos y morteros', 'Yesos y planchas', 'Aislación térmica y acústica', 'Techumbres y cubiertas', 'Fijaciones estructurales'],
  ferreteria: ['Tornillos y clavos', 'Pernos y tarugos', 'Herrajes y bisagras', 'Herramientas', 'Adhesivos y selladores'],
  terminaciones: ['Pinturas', 'Barnices e impregnantes', 'Solventes', 'Brochas y rodillos', 'Revestimientos decorativos'],
};

export const FILTERS = {
  maderas: [
    { label: 'Especie', options: ['Pino radiata', 'Roble', 'Eucalipto'] },
    { label: 'Espesor', options: ['15 mm', '18 mm', '25 mm'] },
    { label: 'Uso', options: ['Estructural', 'Interior', 'Exterior'] },
    { label: 'Unidad de venta', options: ['Por unidad', 'Por plancha', 'Por metro lineal'] },
  ],
  construccion: [
    { label: 'Tipo de producto', options: ['Cemento', 'Mortero', 'Yeso'] },
    { label: 'Formato', options: ['Saco 25 kg', 'Saco 40 kg'] },
    { label: 'Uso', options: ['Interior', 'Exterior'] },
  ],
  ferreteria: [
    { label: 'Tipo', options: ['Tornillos', 'Clavos', 'Pernos'] },
    { label: 'Material', options: ['Acero', 'Acero inoxidable'] },
    { label: 'Uso', options: ['Madera', 'General'] },
  ],
  terminaciones: [
    { label: 'Tipo', options: ['Pintura', 'Barniz', 'Impregnante'] },
    { label: 'Base', options: ['Agua', 'Solvente'] },
    { label: 'Uso', options: ['Interior', 'Exterior'] },
  ],
};

export const PRODUCTS = [
  { id: 'terciado', name: 'Terciado estructural', family: 'maderas', category: 'Maderas y tableros', spec: '18 mm · 122x244 cm', price: 24990, unit: '/unidad', image: terciadoPlywood, mode: 'compra', dimensionado: true, badge: 'destacado', sku: 'TCE-1822', desc: 'Terciado estructural de pino radiata, ideal para tabiques, moldajes y estructuras que requieren resistencia. Disponible para corte a la medida que necesites.' },
  { id: 'mdf', name: 'MDF', family: 'maderas', category: 'Maderas y tableros', spec: '15 mm · 122x244 cm', price: 18490, unit: '/unidad', image: mdfStack, mode: 'compra', dimensionado: true, badge: 'destacado', sku: 'MDF-1522', desc: 'Tablero MDF de densidad media, superficie lisa ideal para muebles, repisas y proyectos de carpintería fina.' },
  { id: 'melamina', name: 'Melamina blanca', family: 'maderas', category: 'Maderas y tableros', spec: '18 mm · 183x275 cm', price: 25990, unit: '/unidad', image: melaminaBlanca, mode: 'compra', dimensionado: true, badge: 'mas-vendido', sku: 'MEL-1827', desc: 'Tablero melamínico blanco, terminación uniforme para closets, muebles de cocina y proyectos de mueblería.' },
  { id: 'pino', name: 'Pino cepillado', family: 'maderas', category: 'Maderas y tableros', spec: '2x3" (45x70 mm) · 3,2 m', price: 2890, unit: '/unidad', image: pinoCepillado, mode: 'compra', dimensionado: false, badge: 'mas-vendido', sku: 'PIN-2345', desc: 'Madera de pino cepillado, seca, ideal para estructuras livianas, moldajes y trabajos de carpintería general.' },
  { id: 'moldura', name: 'Moldura de pino', family: 'maderas', category: 'Molduras', spec: '1x2" · perfil recto', price: null, unit: '', image: pinoCepillado, mode: 'cotizar', dimensionado: false, badge: '', sku: 'MOL-1002', desc: 'Moldura de pino para terminaciones interiores. Precio sujeto a disponibilidad y cantidad requerida.' },
  { id: 'tornillos', name: 'Tornillo para madera', family: 'ferreteria', category: 'Ferretería', spec: '6x1 1/2" · 100 unid.', price: 2990, unit: '/caja', image: ferreteriaTornillos, mode: 'compra', dimensionado: false, badge: 'destacado', sku: 'TOR-6112', desc: 'Tornillos para madera de acero zincado, cabeza plana, ideales para ensambles y fijaciones generales.' },
  { id: 'adhesivo', name: 'Adhesivo de montaje', family: 'ferreteria', category: 'Adhesivos y selladores', spec: '400 g', price: 3490, unit: '/unidad', image: terminacionesPinturas, mode: 'compra', dimensionado: false, badge: '', sku: 'ADH-0400', desc: 'Adhesivo de montaje de alta adherencia para madera, tableros y superficies de construcción.' },
  { id: 'barniz', name: 'Barniz para exterior', family: 'terminaciones', category: 'Terminaciones', spec: '1 galón', price: null, unit: '', image: terminacionesPinturas, mode: 'cotizar', dimensionado: false, badge: 'oferta', sku: 'BAR-1EXT', desc: 'Barniz protector para madera de uso exterior. Consulta color y rendimiento con nuestro equipo.' },
  { id: 'cemento', name: 'Cemento y mortero', family: 'construccion', category: 'Construcción', spec: 'Saco 25 kg', price: null, unit: '', image: construccionCemento, mode: 'consultar', dimensionado: false, badge: '', sku: 'CEM-025K', desc: 'Cemento para obra gruesa. Disponibilidad sujeta a stock; consulta cantidad y despacho.' },
];

export const HOME_TABS = {
  destacados: ['terciado', 'mdf', 'melamina', 'pino', 'tornillos'],
  masvendidos: ['melamina', 'pino', 'tornillos', 'adhesivo', 'mdf'],
  ofertas: ['barniz', 'moldura', 'cemento'],
};

export const ARTICLES = [
  { title: 'Cómo elegir el tablero correcto para tu proyecto', img: mdfStack },
  { title: 'Diferencias entre MDF, OSB y terciado', img: terciadoPlywood },
  { title: 'Cómo calcular los materiales para tu proyecto', img: pinoCepillado },
  { title: 'Cómo proteger la madera de exterior', img: terminacionesPinturas },
  { title: 'Cómo reducir el desperdicio al dimensionar', img: maderaTextura },
  { title: 'Qué tornillos usar para madera', img: ferreteriaTornillos },
];

export const TESTIMONIALS = [
  { quote: 'Encontré todo lo que necesitaba para mi tabique y me ayudaron a calcular las cantidades justas.', name: 'M. Contreras', role: 'Cliente particular (ejemplo)' },
  { quote: 'El dimensionado me ahorró tiempo y desperdicio de material en la obra.', name: 'J. Muñoz', role: 'Contratista (ejemplo)' },
  { quote: 'Buena atención y rapidez para cotizar volumen para el taller.', name: 'Mueblería Rancagua', role: 'Cliente empresa (ejemplo)' },
];

export const EMPRESA_SERVICIOS = [
  { title: 'Cotizaciones por volumen', desc: 'Precios y condiciones según cantidad requerida.' },
  { title: 'Atención personalizada', desc: 'Ejecutivo de cuenta dedicado a tu empresa.' },
  { title: 'Convenios', desc: 'Sujetos a evaluación comercial.' },
  { title: 'Facturación', desc: 'Emisión de factura para empresas.' },
  { title: 'Despacho programado', desc: 'Coordinación de entregas por etapas de obra.' },
  { title: 'Abastecimiento recurrente', desc: 'Pedidos periódicos para proyectos en curso.' },
  { title: 'Dimensionado', desc: 'Corte a medida para tus requerimientos.' },
  { title: 'Historial de compras', desc: 'Seguimiento de pedidos y cotizaciones.' },
];

export const DIM_STEPS = ['Elegir material', 'Formato', 'Medidas de corte', 'Cantidad', 'Tipo de servicio', 'Revisión y cotización'];

export const HOME_FEATURES = [
  { title: 'Dimensionado a medida', desc: 'Corta solo lo que necesitas.' },
  { title: 'Asesoría experta', desc: 'Te ayudamos a elegir mejor.' },
  { title: 'Despacho rápido', desc: 'A Rancagua y alrededores.' },
  { title: 'Atención a empresas', desc: 'Cotizaciones y convenios.' },
];

export const VALUE_PROPS = [
  { title: '50 años de experiencia', desc: 'Desde 1976 entregando calidad y confianza.' },
  { title: 'Los mejores materiales', desc: 'Productos seleccionados de marcas líderes.' },
  { title: 'Corta a medida', desc: 'Dimensionamos tus materiales como los necesitas.' },
  { title: 'Compra fácil y segura', desc: 'Paga online o solicita tu cotización.' },
  { title: 'Retiro en tienda', desc: 'Compra online y retira cuando quieras.' },
];

export const BRANDS = ['Marca A', 'Marca B', 'Marca C', 'Marca D', 'Marca E', 'Marca F'];

export function formatCLP(n) {
  return '$' + Math.round(n).toLocaleString('es-CL');
}
