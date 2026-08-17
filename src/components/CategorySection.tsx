import React from 'react';
import { CategoryInfo, Place } from '../types';
import { PlaceCard } from './PlaceCard';
import { Hotel, Utensils, ShoppingBag, Trees } from 'lucide-react';

interface CategorySectionProps {
  category: CategoryInfo;
  places: Place[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, places }) => {
  if (places.length === 0) return null;

  const renderIcon = () => {
    switch (category.iconName) {
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-white" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-white" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-white" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-white" />;
      default:
        return null;
    }
  };

  const getHeaderBg = () => {
    switch (category.id) {
      case 'hoteis':
        return 'bg-[#0F2C59] border-[#0F2C59]';
      case 'gastronomia':
        return 'bg-[#DA291C] border-[#DA291C]';
      case 'compras':
        return 'bg-[#00874E] border-[#00874E]';
      case 'parques':
        return 'bg-[#009E52] border-[#009E52]';
      default:
        return 'bg-[#0F2C59] border-[#0F2C59]';
    }
  };

  return (
    <section 
      id={category.id} 
      className="scroll-mt-28 mb-10 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden print-break-inside-avoid"
    >
      {/* Category Header */}
      <div className={`p-4 sm:p-5 ${getHeaderBg()} text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center shrink-0 shadow-xs">
            {renderIcon()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-white/20 text-white tracking-widest">
                SEÇÃO {category.code}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading mt-0.5">
              {category.title}
            </h2>
            <p className="text-xs text-white/80 font-normal">
              {category.subtitle}
            </p>
          </div>
        </div>

        <span className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1 rounded-full bg-white text-slate-900 shadow-xs">
          {places.length} {places.length === 1 ? 'LOCAL CADASTRADO' : 'LOCAIS CADASTRADOS'}
        </span>
      </div>

      {/* Places Grid */}
      <div className="p-4 sm:p-6 bg-slate-50/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {places.map((place) => (
          <PlaceCard 
            key={place.id} 
            place={place} 
            accentBorder={category.accentBorder}
            accentText={category.accentText}
          />
        ))}
      </div>
    </section>
  );
};
