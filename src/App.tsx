/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PLACES, EVENT_DETAILS } from './data';
import { CategoryId } from './types';
import { Language, TRANSLATIONS, getLocalizedPlace } from './translations';
import { EventHeader } from './components/EventHeader';
import { SmartFilterBar } from './components/SmartFilterBar';
import { CategorySection } from './components/CategorySection';
import { UsefulTips } from './components/UsefulTips';
import { 
  Search, 
  MapPin, 
  Layers, 
  X,
  CheckCircle2,
  ArrowUp,
  Navigation,
  Compass,
  Building,
  Sparkles,
  ExternalLink,
  Languages
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeQuickTag, setActiveQuickTag] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const t = TRANSLATIONS[language];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleToggleLanguage = () => {
    const nextLang = language === 'pt' ? 'es' : 'pt';
    setLanguage(nextLang);
    triggerToast(nextLang === 'es' ? 'Idioma cambiado a Español' : 'Idioma alterado para Português');
  };

  // Filtered places based on selected category & search query (matching both PT and localized ES text)
  const filteredPlaces = useMemo(() => {
    return PLACES.filter((place) => {
      const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const loc = getLocalizedPlace(place, language);

      return (
        place.name.toLowerCase().includes(query) ||
        loc.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        loc.description.toLowerCase().includes(query) ||
        (place.highlightTag && place.highlightTag.toLowerCase().includes(query)) ||
        (loc.highlightTag && loc.highlightTag.toLowerCase().includes(query)) ||
        (place.addressInfo && place.addressInfo.toLowerCase().includes(query)) ||
        (loc.addressInfo && loc.addressInfo.toLowerCase().includes(query)) ||
        (place.features && place.features.some(f => f.toLowerCase().includes(query))) ||
        (loc.features && loc.features.some(f => f.toLowerCase().includes(query)))
      );
    });
  }, [selectedCategory, searchQuery, language]);

  const getCategoryCount = (catId: CategoryId) => {
    return PLACES.filter(p => p.category === catId).length;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0B2545] text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-400 text-xs font-mono font-bold animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Official Event Visual Identity Header & Banner with Language Translator */}
      <EventHeader 
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Intelligent & Responsive Filter Bar (Mobile & Desktop Optimized) */}
      <SmartFilterBar
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalPlacesCount={PLACES.length}
        filteredPlacesCount={filteredPlaces.length}
        getCategoryCount={getCategoryCount}
        activeQuickTag={activeQuickTag}
        onSelectQuickTag={setActiveQuickTag}
        language={language}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8">
        
        {/* Quick Venue Spotlight Card */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-8 bg-gradient-to-r from-red-50 via-white to-amber-50 border-2 border-[#DA291C] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DA291C] text-white flex items-center justify-center shrink-0 shadow-md">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 bg-[#DA291C] text-white rounded">
                    {t.officialVenueLabel}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Grand Park Hotel • Campo Grande - MS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading mt-0.5">
                  {language === 'es' 
                    ? 'Sede de Realización del V Encuentro Salud en las Fronteras' 
                    : 'Local de Realização do V Encontro Saúde nas Fronteiras'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Av. Afonso Pena, 5282 - Chácara Cachoeira • {language === 'es' ? 'Acceso rápido y cómodo para todos los participantes.' : 'Acesso rápido para todos os participantes.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto shrink-0">
              <a
                href={EVENT_DETAILS.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#0F2C59] hover:bg-[#0B2545] text-white font-bold text-xs rounded-xl shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-yellow-300" />
                <span>{language === 'es' ? 'Cómo Llegar (Maps)' : 'Como Chegar (Maps)'}</span>
              </a>
              <a
                href={EVENT_DETAILS.venue.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-all"
              >
                <Compass className="w-4 h-4 text-blue-500" />
                <span>Waze</span>
              </a>
            </div>
          </div>
        )}

        {/* Search Results notification */}
        {searchQuery && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-2 shadow-2xs">
            <div className="text-xs text-emerald-900">
              {language === 'es' ? 'Mostrando ' : 'Exibindo '}
              <strong>{filteredPlaces.length}</strong>
              {language === 'es' ? ' lugar(es) correspondientes a la búsqueda "' : ' local(is) correspondente(s) à busca "'}
              <strong>{searchQuery}</strong>"
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer"
            >
              {t.clearFilter}
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800 font-heading mb-1">
              {language === 'es' ? 'Ningún lugar encontrado' : 'Nenhum local encontrado'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              {language === 'es' 
                ? 'No encontramos resultados para el término ingresado. Intente buscar por "Hotel", "Bioparque", "Restaurante" o "Shopping".'
                : 'Não encontramos resultados para o termo digitado. Tente buscar por "Hotel", "Bioparque", "Restaurante" ou "Shopping".'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold bg-[#0F2C59] text-white rounded-lg hover:bg-[#0B2545] transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Restaurar Lista Completa' : 'Restaurar Lista Completa'}
            </button>
          </div>
        )}

        {/* Categorized Detailed Sections */}
        {CATEGORIES.map((category) => {
          if (selectedCategory !== 'all' && selectedCategory !== category.id) {
            return null;
          }

          const placesInCategory = filteredPlaces.filter((p) => p.category === category.id);
          return (
            <CategorySection
              key={category.id}
              category={category}
              places={placesInCategory}
              language={language}
            />
          );
        })}

        {/* Useful Tips Section */}
        <UsefulTips language={language} />

      </main>

      {/* Clean Institutional Footer */}
      <footer className="bg-[#0B2545] text-white border-t-4 border-[#00874E] py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-wider text-emerald-400 uppercase font-heading">
              {t.footerTitle}
            </h3>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#DA291C] uppercase font-mono mt-0.5">
              {t.footerSubtitle}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              {t.footerDateVenue}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {language === 'es' 
                ? 'Realización: SVS / SES / Gobierno del Estado de Mato Grosso do Sul'
                : 'Realização: SVS / SES / Governo do Estado de Mato Grosso do Sul'}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={handleToggleLanguage}
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-mono font-bold cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Idioma: Español (ES)' : 'Idioma: Português (PT)'}</span>
            </button>
            <span className="text-slate-600">•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-emerald-400 flex items-center gap-1 font-bold transition-colors cursor-pointer"
            >
              <span>{language === 'es' ? 'Volver al Inicio' : 'Voltar ao Topo'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
