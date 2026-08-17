import { Place } from './types';

export type Language = 'pt' | 'es';

export interface TranslationDict {
  officialGuide: string;
  cityState: string;
  translateBtn: string;
  downloadPdf: string;
  generating: string;
  downloaded: string;
  whatsapp: string;
  binationalBadge: string;
  eventHeading: string;
  eventSubheading: string;
  eventCountry: string;
  eventDescription: string;
  certificateBtn: string;
  scheduleBtn: string;
  eventDateLabel: string;
  eventDates: string;
  eventDaysDesc: string;
  officialHoursLabel: string;
  schedule18: string;
  schedule18Type: string;
  schedule19: string;
  schedule19Type: string;
  officialVenueLabel: string;
  venueBadge: string;
  allFilter: string;
  searchPlaceholder: string;
  quickFiltersLabel: string;
  clearFilter: string;
  placesRegistered: string;
  placesRegisteredPlural: string;
  officialVenueTag: string;
  copyLocationBtn: string;
  copiedLocationBtn: string;
  addressLabel: string;
  websiteLabel: string;
  instagramLabel: string;
  openInGoogleMaps: string;
  openInWaze: string;
  organizersLabel: string;
  footerTitle: string;
  footerSubtitle: string;
  footerDateVenue: string;
  usefulTipsTitle: string;
  usefulTipsSubtitle: string;
  tagNear: string;
  tagBioparque: string;
  tagSteakhouse: string;
  tagMall: string;
  tagParks: string;
  catHotelsTitle: string;
  catHotelsSubtitle: string;
  catFoodTitle: string;
  catFoodSubtitle: string;
  catShoppingTitle: string;
  catShoppingSubtitle: string;
  catParksTitle: string;
  catParksSubtitle: string;
  withoutWebsite: string;
  withoutInstagram: string;
  seeInstagram: string;
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  pt: {
    officialGuide: 'Guia do Participante',
    cityState: 'Campo Grande • MS',
    translateBtn: 'Traduzir',
    downloadPdf: 'Baixar PDF',
    generating: 'Gerando...',
    downloaded: 'Baixado!',
    whatsapp: 'WhatsApp',
    binationalBadge: 'Integração Binacional em Saúde',
    eventHeading: 'V ENCONTRO',
    eventSubheading: 'SAÚDE NAS FRONTEIRAS',
    eventCountry: 'BRASIL - PARAGUAI',
    eventDescription: 'Reunião estratégica de cooperação técnica, vigilância epidemiológica e fortalecimento da assistência à saúde na faixa de fronteira entre o Brasil e o Paraguai.',
    certificateBtn: 'Certificado',
    scheduleBtn: 'Programação',
    eventDateLabel: 'DATA DO EVENTO',
    eventDates: '18 e 19 DE AGOSTO DE 2026',
    eventDaysDesc: 'Terça e Quarta-feira',
    officialHoursLabel: 'HORÁRIOS OFICIAIS',
    schedule18: '• 18/08: 15h às 21h',
    schedule18Type: '(Abertura)',
    schedule19: '• 19/08: 08h às 17h',
    schedule19Type: '(Técnico)',
    officialVenueLabel: 'LOCAL OFICIAL',
    venueBadge: 'SEDE',
    allFilter: 'Todos',
    searchPlaceholder: 'Buscar hotéis, restaurantes, shopping, bioparque...',
    quickFiltersLabel: 'Filtros:',
    clearFilter: 'Limpar',
    placesRegistered: 'LOCAL CADASTRADO',
    placesRegisteredPlural: 'LOCAIS CADASTRADOS',
    officialVenueTag: 'LOCAL OFICIAL DO EVENTO',
    copyLocationBtn: 'Copiar',
    copiedLocationBtn: 'COPIADO',
    addressLabel: 'Endereço',
    websiteLabel: 'Website Oficial',
    instagramLabel: 'Instagram Oficial',
    openInGoogleMaps: 'Google Maps',
    openInWaze: 'Waze',
    organizersLabel: 'Realização Institucional',
    footerTitle: 'V ENCONTRO SAÚDE NAS FRONTEIRAS',
    footerSubtitle: 'BRASIL - PARAGUAI',
    footerDateVenue: '18 e 19 de Agosto de 2026 • Grand Park Hotel • Campo Grande - MS',
    usefulTipsTitle: 'Informações e Dicas Úteis',
    usefulTipsSubtitle: 'Orientações práticas para os participantes e delegações binacionais em Campo Grande',
    tagNear: 'Perto da Sede',
    tagBioparque: 'Bioparque',
    tagSteakhouse: 'Churrascarias',
    tagMall: 'Shoppings',
    tagParks: 'Parques',
    catHotelsTitle: 'Hotéis e Hospedagens',
    catHotelsSubtitle: 'Local oficial do evento e opções de hospedagem próximas',
    catFoodTitle: 'Restaurantes e Gastronomia',
    catFoodSubtitle: 'Churrascarias tradicionais, culinária regional, petiscos e hambúrgueres',
    catShoppingTitle: 'Compras e Entretenimento',
    catShoppingSubtitle: 'Shopping centers, hipermercados e arenas culturais',
    catParksTitle: 'Parques, Bioparque e Órgãos',
    catParksSubtitle: 'Bioparque Pantanal, áreas verdes emblemáticas e instituições públicas',
    withoutWebsite: 'Sem site oficial exclusivo',
    withoutInstagram: 'Sem Instagram oficial',
    seeInstagram: 'Ver Instagram Oficial',
  },
  es: {
    officialGuide: 'Guía del Participante',
    cityState: 'Campo Grande • MS',
    translateBtn: 'Português',
    downloadPdf: 'Descargar PDF',
    generating: 'Generando...',
    downloaded: '¡Descargado!',
    whatsapp: 'WhatsApp',
    binationalBadge: 'Integración Binacional en Salud',
    eventHeading: 'V ENCUENTRO',
    eventSubheading: 'SALUD EN LAS FRONTERAS',
    eventCountry: 'BRASIL - PARAGUAY',
    eventDescription: 'Reunión estratégica de cooperación técnica, vigilancia epidemiológica y fortalecimiento de la atención de salud en la franja fronteriza entre Brasil y Paraguay.',
    certificateBtn: 'Certificado',
    scheduleBtn: 'Programa',
    eventDateLabel: 'FECHA DEL EVENTO',
    eventDates: '18 y 19 DE AGOSTO DE 2026',
    eventDaysDesc: 'Martes y Miércoles',
    officialHoursLabel: 'HORARIOS OFICIALES',
    schedule18: '• 18/08: 15:00 a 21:00',
    schedule18Type: '(Apertura)',
    schedule19: '• 19/08: 08:00 a 17:00',
    schedule19Type: '(Técnico)',
    officialVenueLabel: 'SEDE OFICIAL',
    venueBadge: 'SEDE',
    allFilter: 'Todos',
    searchPlaceholder: 'Buscar hoteles, restaurantes, compras, bioparque...',
    quickFiltersLabel: 'Filtros:',
    clearFilter: 'Limpiar',
    placesRegistered: 'LUGAR REGISTRADO',
    placesRegisteredPlural: 'LUGARES REGISTRADOS',
    officialVenueTag: 'SEDE OFICIAL DEL EVENTO',
    copyLocationBtn: 'Copiar',
    copiedLocationBtn: 'COPIADO',
    addressLabel: 'Dirección',
    websiteLabel: 'Sitio Web Oficial',
    instagramLabel: 'Instagram Oficial',
    openInGoogleMaps: 'Google Maps',
    openInWaze: 'Waze',
    organizersLabel: 'Realización Institucional',
    footerTitle: 'V ENCUENTRO SALUD EN LAS FRONTERAS',
    footerSubtitle: 'BRASIL - PARAGUAY',
    footerDateVenue: '18 y 19 de Agosto de 2026 • Grand Park Hotel • Campo Grande - MS',
    usefulTipsTitle: 'Informaciones y Consejos Útiles',
    usefulTipsSubtitle: 'Orientaciones prácticas para participantes y delegaciones binacionales en Campo Grande',
    tagNear: 'Cerca de la Sede',
    tagBioparque: 'Bioparque',
    tagSteakhouse: 'Churrasquerías',
    tagMall: 'Shoppings',
    tagParks: 'Parques',
    catHotelsTitle: 'Hoteles y Alojamientos',
    catHotelsSubtitle: 'Sede oficial del evento y opciones de hospedaje cercanas',
    catFoodTitle: 'Restaurantes y Gastronomía',
    catFoodSubtitle: 'Churrasquerías tradicionales, gastronomía regional, aperitivos y hamburguesas',
    catShoppingTitle: 'Compras y Entretenimiento',
    catShoppingSubtitle: 'Centros comerciales, hipermercados y áreas de ocio',
    catParksTitle: 'Parques, Bioparque e Instituciones',
    catParksSubtitle: 'Bioparque Pantanal, áreas verdes emblemáticas e instituciones públicas',
    withoutWebsite: 'Sin sitio web exclusivo',
    withoutInstagram: 'Sin Instagram oficial',
    seeInstagram: 'Ver Instagram Oficial',
  },
};

interface LocalizedPlaceData {
  name?: string;
  description: string;
  highlightTag?: string;
  features?: string[];
  addressInfo?: string;
  siteLabel?: string;
  instagramHandle?: string;
}

export const PLACE_TRANSLATIONS_ES: Record<string, LocalizedPlaceData> = {
  'grand-park-hotel': {
    name: 'Grand Park Hotel',
    description: 'Sede Oficial del V Encuentro Salud en las Fronteras. Hotel ejecutivo completo con centro de convenciones, piscina, restaurante y acceso privilegiado en la avenida principal de la ciudad.',
    highlightTag: 'SEDE OFICIAL DEL EVENTO',
    features: ['Sede del Evento', 'Wi-Fi de Alta Velocidad', 'Restaurante & Café', 'Estacionamiento Propio'],
  },
  'manhattan-flat': {
    name: 'Manhattan Flat',
    description: 'Flat ejecutivo con unidades completas para hospedaje con autonomía, cerca del Shopping Campo Grande y del Grand Park Hotel.',
    highlightTag: 'Flat Ejecutivo',
    siteLabel: 'Disponible en plataformas de reserva (Booking, Airbnb)',
    features: ['Cocina Equipada', 'Recepción 24h', 'A 5 min del evento'],
  },
  'olga-kehdi-residence': {
    name: 'Olga Kehdi Residence',
    description: 'Residencial con departamentos amoblados y servicio de hotelería, muy bien calificado en plataformas de turismo.',
    highlightTag: 'Flats & Suites',
    siteLabel: 'Reserva en Booking.com',
    features: ['Apartamentos Completos', 'Estacionamiento Gratuito', 'Barrio Residencial Seguro'],
  },
  'nativas-grill': {
    name: 'Churrasquería Nativas Grill',
    description: 'Referente en rodizio de carnes nobles de Mato Grosso do Sul, abundante bufet de ensaladas, quesos importados, mariscos y cocina japonesa.',
    highlightTag: 'Rodizio Premium',
    addressInfo: 'Av. Afonso Pena, 5468 - Chácara Cachoeira, Campo Grande - MS (Al lado del Grand Park)',
    features: ['Carnes Nobles & Picaña', 'Bufet Completo', 'Al lado del Hotel del Evento', 'Ambiente Climatizado'],
  },
  'poia-espeto': {
    name: 'Poiá Espeto',
    description: 'Tradicional asador con generosos cortes a la brasa, acompañados de mandioca amarilla pantanera suave y vinagreta de la casa.',
    highlightTag: 'Tradición Pantanera',
    features: ['Brochetas & Asados Clásicos', 'Mandioca Pantanera', 'Cervezas Especiales', 'Ambiente Acogedor'],
  },
  'barzito': {
    name: 'BarZito',
    description: 'Bar y gastrobar animado con cócteles de autor, sabrosas porciones, cerveza tirada helada y excelente ambiente para confraternización post-evento.',
    highlightTag: 'Bar & Happy Hour',
    features: ['Cerveza Artesanal', 'Coctelería Creativa', 'Tapas y Aperitivos', 'Happy Hour'],
  },
  'canto-do-cupim': {
    name: 'Canto do Cupim',
    description: 'Especialista en el auténtico "cupim casqueirado" (corte vacuno típico) y platos regionales servidos en porciones generosas con farofa y guarniciones.',
    highlightTag: 'Especialidad en Cupim',
    features: ['Cupim Casqueirado', 'Corredor Gastronómico Bom Pastor', 'Almuerzo & Cena'],
  },
  'el-parrudo-burger': {
    name: 'El Parrudo Burger',
    description: 'Hamburguesería artesanal de alta calidad, con carnes a la parrilla, quesos fundidos y salsas artesanales exclusivas.',
    highlightTag: 'Burger a la Parrilla',
    features: ['Carnes a la Parrilla', 'Papas Crujientes', 'Pan Artesanal', 'Salón & Delivery'],
  },
  'shopping-campo-grande': {
    name: 'Shopping Campo Grande',
    description: 'Principal y más tradicional centro comercial de Mato Grosso do Sul, con cientos de tiendas de marcas nacionales e internacionales, patio de comidas completo y cines.',
    highlightTag: 'Centro de Compras & Servicios',
    addressInfo: 'Av. Afonso Pena, 4909 - Santa Fé, Campo Grande - MS (A 3 min del hotel del evento)',
    features: ['Tiendas & Marcas', 'Patio de Comidas', 'Cinemark', 'Bancos & Farmacias'],
  },
  'carrefour-hipermercado': {
    name: 'Hipermercado Carrefour',
    description: 'Hipermercado anexo al Shopping Campo Grande, ideal para compras de conveniencia, farmacia, higiene, refrigerios rápidos y compras generales.',
    highlightTag: 'Hipermercado & Farmacia',
    addressInfo: 'Av. Afonso Pena, 4909 - Santa Fé (Anexo al Shopping Campo Grande)',
    features: ['Conveniencia', 'Farmacia Integrada', 'Bodega & Bebidas', 'Estacionamiento Cubierto'],
  },
  'mirante-stage': {
    name: 'Mirante Stage',
    description: 'Espacio de eventos y espectáculos culturales de Campo Grande, con programación de shows y presentaciones artísticas.',
    highlightTag: 'Shows & Cultura',
    siteLabel: 'Agenda y entradas disponibles en Sympla',
    features: ['Espacio de Eventos', 'Shows & Conciertos', 'Cerca del Grand Park Hotel'],
  },
  'bioparque-pantanal': {
    name: 'Bioparque Pantanal',
    description: '¡El acuario de agua dulce más grande del mundo y postal imperdible de MS! Cuenta con 5 millones de litros de agua, túnel submarino con peces gigantes del Pantanal, caimanes y museo interactivo.',
    highlightTag: 'MAYOR ACUARIO DE AGUA DULCE DEL MUNDO',
    siteLabel: 'bioparquepantanal.ms.gov.br (Reservas & Visitas)',
    features: ['Postal Internacional', 'Túnel Subacuático', 'Reserva Gratuita por la Web', 'A 2 min del Grand Park Hotel'],
  },
  'parque-nacoes-indigenas': {
    name: 'Parque das Nações Indígenas',
    description: 'Uno de los parques urbanos más grandes del planeta con 119 hectáreas de área protegida, lagos, senderos para correr, fauna silvestre libre (carpinchos, guacamayos) y museos.',
    highlightTag: 'Área Verde Emblemática',
    features: ['Pistas de Caminata & Ciclismo', 'Museo de las Culturas Dom Bosco', 'Museo de Arte Contemporáneo (MARCO)', 'Naturaleza Viva'],
  },
  'parque-aguas-do-prosa': {
    name: 'Parque Estadual do Prosa',
    description: 'Unidad de conservación integral del bioma Cerrado dentro del área urbana de Campo Grande, donde funciona el Centro de Rehabilitación de Animales Silvestres (CRAS).',
    highlightTag: 'Preservación del Cerrado',
    instagramHandle: 'Informaciones vía IMASUL / Gobierno del Estado',
    features: ['Senderos Ecológicos Guiados', 'Centro de Rehabilitación de Fauna (CRAS)', 'Manantiales y Bosque Nativo'],
  },
  'camara-municipal-cg': {
    name: 'Cámara Municipal de Campo Grande',
    description: 'Palacio Jaguaribe, sede institucional del Poder Legislativo de la capital de Mato Grosso do Sul.',
    highlightTag: 'Organismo Público Municipal',
    features: ['Poder Legislativo', 'Atención al Ciudadano', 'Sesiones Plenarias'],
  },
};

export function getLocalizedPlace(place: Place, language: Language): Place {
  if (language === 'pt') return place;

  const esData = PLACE_TRANSLATIONS_ES[place.id];
  if (!esData) return place;

  return {
    ...place,
    name: esData.name || place.name,
    description: esData.description || place.description,
    highlightTag: esData.highlightTag || place.highlightTag,
    features: esData.features || place.features,
    addressInfo: esData.addressInfo || place.addressInfo,
    siteLabel: esData.siteLabel || place.siteLabel,
    instagramHandle: esData.instagramHandle || place.instagramHandle,
  };
}
