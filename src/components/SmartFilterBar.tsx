import React from 'react';
import { CategoryId, CategoryInfo } from '../types';
import { Language, TRANSLATIONS } from '../translations';
import { 
  Layers, 
  Hotel, 
  Utensils, 
  ShoppingBag, 
  Trees, 
  Search, 
  X, 
  Sparkles, 
  MapPin, 
  Flame,
  Fish
} from 'lucide-react';

interface SmartFilterBarProps {
  categories: CategoryInfo[];
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (category: CategoryId | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalPlacesCount: number;
  filteredPlacesCount: number;
  getCategoryCount: (catId: CategoryId) => number;
  activeQuickTag: string | null;
  onSelectQuickTag: (tag: string | null) => void;
  language: Language;
}

export const SmartFilterBar: React.FC<SmartFilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalPlacesCount,
  filteredPlacesCount,
  getCategoryCount,
  activeQuickTag,
  onSelectQuickTag,
  language,
}) => {
  const t = TRANSLATIONS[language];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hotel':
        return <Hotel className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Trees':
        return <Trees className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const getCategoryName = (catId: string) => {
    switch (catId) {
      case 'hoteis':
        return language === 'es' ? 'Hoteles' : 'Hotéis';
      case 'gastronomia':
        return language === 'es' ? 'Gastronomía' : 'Gastronomia';
      case 'compras':
        return language === 'es' ? 'Compras' : 'Compras';
      case 'parques':
        return language === 'es' ? 'Parques' : 'Parques';
      default:
        return t.allFilter;
    }
  };

  const quickSmartTags = [
    {
      id: 'perto',
      label: t.tagNear,
      icon: <MapPin className="w-3 h-3 text-red-500" />,
      query: 'Cachoeira',
    },
    {
      id: 'bioparque',
      label: t.tagBioparque,
      icon: <Fish className="w-3 h-3 text-blue-500" />,
      query: 'Bioparque',
    },
    {
      id: 'churrascaria',
      label: t.tagSteakhouse,
      icon: <Flame className="w-3 h-3 text-amber-500" />,
      query: 'Churrascaria',
    },
    {
      id: 'shoppings',
      label: t.tagMall,
      icon: <ShoppingBag className="w-3 h-3 text-emerald-500" />,
      query: 'Shopping',
    },
    {
      id: 'parques',
      label: t.tagParks,
      icon: <Trees className="w-3 h-3 text-teal-500" />,
      query: 'Parque',
    },
  ];

  const handleQuickTagClick = (tag: typeof quickSmartTags[0]) => {
    if (activeQuickTag === tag.id) {
      onSelectQuickTag(null);
      onSearchChange('');
    } else {
      onSelectQuickTag(tag.id);
      onSearchChange(tag.query);
    }
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchQuery.trim().length > 0 || activeQuickTag !== null;

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-3 sm:px-8 py-2 sm:py-3 no-print transition-all">
      <div className="max-w-6xl mx-auto flex flex-col gap-2">
        
        {/* Top Line: Intelligent Search Bar & Place Counter */}
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="input-search-places"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (activeQuickTag && e.target.value !== activeQuickTag) {
                  onSelectQuickTag(null);
                }
              }}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00874E]/30 focus:border-[#00874E] transition-all"
            />
            {searchQuery && (
              <button
                id="btn-clear-search"
                onClick={() => {
                  onSearchChange('');
                  onSelectQuickTag(null);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 cursor-pointer rounded-full hover:bg-slate-200 transition-colors"
                title="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Clear All Filters button if any active */}
          {hasActiveFilters && (
            <button
              onClick={() => {
                onSelectCategory('all');
                onSearchChange('');
                onSelectQuickTag(null);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border border-slate-200 active:scale-95"
              title={t.clearFilter}
            >
              <X className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">{t.clearFilter}</span>
            </button>
          )}

          {/* Result Count Indicator */}
          <div className="shrink-0 px-2.5 py-1.5 bg-slate-100/80 border border-slate-200 rounded-xl text-[11px] font-mono font-bold text-slate-600">
            <span className="text-[#0F2C59] font-black">{filteredPlacesCount}</span>
            <span className="text-slate-400">/{totalPlacesCount}</span>
          </div>
        </div>

        {/* Clean Icon-Only Filter Buttons (5 equal columns, zero text overflow) */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
          {/* "Todos" Icon Button */}
          <button
            id="filter-cat-all"
            onClick={() => onSelectCategory('all')}
            className={`relative flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
              selectedCategory === 'all'
                ? 'bg-[#0F2C59] text-white shadow-xs ring-2 ring-[#0F2C59]/30'
                : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-600'
            }`}
            title={`${t.allFilter} (${totalPlacesCount})`}
          >
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className={`text-[10px] sm:text-xs px-1.5 py-0.2 rounded-full font-mono font-bold ${
              selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
            }`}>
              {totalPlacesCount}
            </span>
          </button>

          {/* Specific Categories Icon Buttons */}
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);

            const getActiveStyle = () => {
              switch (cat.id) {
                case 'hoteis':
                  return 'bg-[#0F2C59] text-white ring-2 ring-[#0F2C59]/30 shadow-xs';
                case 'gastronomia':
                  return 'bg-[#DA291C] text-white ring-2 ring-red-300 shadow-xs';
                case 'compras':
                  return 'bg-[#00874E] text-white ring-2 ring-emerald-300 shadow-xs';
                case 'parques':
                  return 'bg-[#009E52] text-white ring-2 ring-teal-300 shadow-xs';
                default:
                  return 'bg-[#0F2C59] text-white ring-2 ring-[#0F2C59]/30 shadow-xs';
              }
            };

            return (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
                  isActive
                    ? getActiveStyle()
                    : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-600'
                }`}
                title={`${getCategoryName(cat.id)} (${count})`}
              >
                <span className="shrink-0">{getCategoryIcon(cat.iconName)}</span>
                <span className={`text-[10px] sm:text-xs px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  isActive ? 'bg-black/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Smart Quick Discovery Tags in a flexible wrap layout */}
        <div className="flex flex-wrap items-center justify-start gap-1 sm:gap-1.5 pt-0.5">
          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase font-mono mr-0.5">
            <Sparkles className="w-2.5 h-2.5 text-amber-500" />
            <span className="hidden xs:inline">{t.quickFiltersLabel}</span>
          </div>

          {quickSmartTags.map((tag) => {
            const isTagActive = activeQuickTag === tag.id;

            return (
              <button
                key={tag.id}
                id={`quick-tag-${tag.id}`}
                onClick={() => handleQuickTagClick(tag)}
                className={`inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all cursor-pointer active:scale-95 ${
                  isTagActive
                    ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                    : 'bg-slate-100/90 hover:bg-slate-200 text-slate-600 border border-slate-200/60'
                }`}
              >
                {tag.icon}
                <span>{tag.label}</span>
                {isTagActive && <X className="w-2.5 h-2.5 ml-0.5 text-slate-300" />}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
