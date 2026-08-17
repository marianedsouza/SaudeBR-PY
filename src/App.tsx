/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PLACES, EVENT_DETAILS } from './data';
import { CategoryId } from './types';
import { EventHeader } from './components/EventHeader';
import { CategorySection } from './components/CategorySection';
import { UsefulTips } from './components/UsefulTips';
import { CopyModal } from './components/CopyModal';
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
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCopyModalOpen, setIsCopyModalOpen] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Filtered places based on selected category & search query
  const filteredPlaces = useMemo(() => {
    return PLACES.filter((place) => {
      const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      return (
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        (place.highlightTag && place.highlightTag.toLowerCase().includes(query)) ||
        (place.addressInfo && place.addressInfo.toLowerCase().includes(query)) ||
        (place.features && place.features.some(f => f.toLowerCase().includes(query)))
      );
    });
  }, [selectedCategory, searchQuery]);

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

      {/* Official Event Visual Identity Header & Banner */}
      <EventHeader 
        onOpenCopyModal={() => setIsCopyModalOpen(true)}
      />

      {/* Sticky Interactive Toolbar & Search Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 sm:px-8 py-3.5 no-print">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <button
              id="filter-cat-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-2xs whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#0F2C59] text-white ring-2 ring-[#0F2C59]/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Todos ({PLACES.length})</span>
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);

              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-2xs whitespace-nowrap ${
                    isActive
                      ? cat.id === 'hoteis'
                        ? 'bg-[#0F2C59] text-white ring-2 ring-[#0F2C59]/30'
                        : cat.id === 'gastronomia'
                        ? 'bg-[#DA291C] text-white ring-2 ring-red-300'
                        : cat.id === 'compras'
                        ? 'bg-[#00874E] text-white ring-2 ring-emerald-300'
                        : 'bg-[#009E52] text-white ring-2 ring-teal-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span className="text-[10px] opacity-80 font-mono">0{cat.code.replace(/^0+/, '')}</span>
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-black/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Field & Actions */}
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="input-search-places"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar hotéis, gastronomia, bioparque..."
                className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00874E]/30 focus:border-[#00874E] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              id="btn-sticky-download-pdf"
              onClick={async () => {
                triggerToast('Gerando e baixando PDF oficial...');
                const { generateOfficialPDF } = await import('./utils/pdfExport');
                await generateOfficialPDF();
                triggerToast('PDF baixado com sucesso!');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#DA291C] hover:bg-[#b82216] text-white rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
              title="Baixar PDF Oficial"
            >
              <span>PDF</span>
            </button>
          </div>
        </div>
      </div>

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
                    SEDE OFICIAL
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Grand Park Hotel • Campo Grande - MS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading mt-0.5">
                  Local de Realização do V Encontro Saúde nas Fronteiras
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Av. Afonso Pena, 5282 - Chácara Cachoeira • Acesso rápido para todos os participantes.
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
                <span>Como Chegar (Maps)</span>
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
              Exibindo <strong>{filteredPlaces.length}</strong> local(is) correspondente(s) à busca "<strong>{searchQuery}</strong>"
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer"
            >
              Limpar busca
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
              Nenhum local encontrado
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Não encontramos resultados para o termo digitado. Tente buscar por "Hotel", "Bioparque", "Restaurante" ou "Shopping".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold bg-[#0F2C59] text-white rounded-lg hover:bg-[#0B2545] transition-colors cursor-pointer"
            >
              Restaurar Lista Completa
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
            />
          );
        })}

        {/* Useful Tips Section */}
        <UsefulTips />

      </main>

      {/* Clean Institutional Footer */}
      <footer className="bg-[#0B2545] text-white border-t-4 border-[#00874E] py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase font-mono">
                V ENCONTRO SAÚDE NAS FRONTEIRAS • BRASIL - PARAGUAI
              </span>
            </div>
            <p className="text-xs text-slate-400">
              18 e 19 de Agosto de 2026 • Grand Park Hotel • Campo Grande - MS
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Realização: SVS / SES / Governo do Estado de Mato Grosso do Sul
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setIsCopyModalOpen(true)}
              className="text-yellow-400 hover:underline font-mono cursor-pointer"
            >
              Copiar Lista Completa
            </button>
            <span className="text-slate-600">•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-emerald-400 flex items-center gap-1 font-bold transition-colors cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Copy Text Modal */}
      <CopyModal
        isOpen={isCopyModalOpen}
        onClose={() => setIsCopyModalOpen(false)}
      />

    </div>
  );
}
