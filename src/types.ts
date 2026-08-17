export type CategoryId = 'hoteis' | 'gastronomia' | 'compras' | 'parques';

export interface Place {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  siteUrl: string | null;
  siteLabel?: string;
  instagramUrl: string | null;
  instagramHandle?: string;
  highlightTag?: string;
  addressInfo: string;
  mapsUrl: string;
  wazeUrl?: string;
  isVenue?: boolean;
  features?: string[];
}

export interface CategoryInfo {
  id: CategoryId;
  code: string;
  title: string;
  subtitle: string;
  iconName: 'Hotel' | 'Utensils' | 'ShoppingBag' | 'Trees';
  accentBorder: string;
  accentText: string;
  accentBg: string;
  badgeColor: string;
}


