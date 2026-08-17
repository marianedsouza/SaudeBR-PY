import React from 'react';
import { Compass, Phone, Car, CloudSun, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data';
import { Language, TRANSLATIONS } from '../translations';

interface UsefulTipsProps {
  language?: Language;
}

export const UsefulTips: React.FC<UsefulTipsProps> = ({ language = 'pt' }) => {
  const isEs = language === 'es';

  return (
    <section id="informacoes-uteis" className="mb-10 print-break-inside-avoid">
      <div className="bg-gradient-to-br from-[#0B2545] via-[#0F2C59] to-[#133E7C] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-900 relative overflow-hidden">
        
        {/* Subtle decorative wave */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00874E]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
              <Compass className="w-3.5 h-3.5" />
              {isEs ? 'Guía Práctica para el Congresista' : 'Guia Prático para o Congressista'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              {isEs ? 'Orientaciones Generales • Campo Grande - MS' : 'Orientações Gerais • Campo Grande - MS'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {isEs 
                ? 'Informaciones de logística, transporte, ubicación del hotel oficial y contactos esenciales.' 
                : 'Informações de logística, transporte, localização do hotel oficial e contatos essenciais.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <a
              href={EVENT_DETAILS.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#DA291C] hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{isEs ? 'Ruta al Grand Park Hotel' : 'Rota para o Grand Park Hotel'}</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {/* Mobilidade */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <Car className="w-4 h-4" />
              {isEs ? 'Movilidad y Aplicaciones' : 'Mobilidade & Apps'}
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {isEs 
                ? 'Uber, 99 y taxis operan con gran fluidez. La Av. Afonso Pena conecta el Grand Park Hotel, el Bioparque y los polos gastronómicos.' 
                : 'Uber, 99 e táxis operam com facilidade. A Av. Afonso Pena é a principal artéria da cidade, interligando o Grand Park Hotel, o Bioparque e os centros gastronômicos.'}
            </p>
          </div>

          {/* Aeroporto */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <Compass className="w-4 h-4" />
              {isEs ? 'Aeropuerto (CGR)' : 'Aeroporto (CGR)'}
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {isEs 
                ? 'El Aeropuerto Internacional de Campo Grande está a solo 15-20 minutos en coche del Grand Park Hotel y la zona hotelera.' 
                : 'O Aeroporto Internacional de Campo Grande fica a cerca de 15 a 20 minutos de carro do Grand Park Hotel e da rede de hotéis da região nobre.'}
            </p>
          </div>

          {/* Clima em Agosto */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <CloudSun className="w-4 h-4" />
              {isEs ? 'Clima en Agosto' : 'Clima em Agosto'}
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {isEs 
                ? 'Inviernos secos con mañanas frescas (16°C a 20°C) y tardes templadas/cálidas (28°C a 32°C). Recomendamos hidratación constante.' 
                : 'Inverno seco com manhãs amenas (16°C a 20°C) e tardes aquecidas (28°C a 32°C). Recomenda-se hidratação constante.'}
            </p>
          </div>

          {/* Telefones Úteis */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <Phone className="w-4 h-4" />
              {isEs ? 'Teléfonos de Emergencia' : 'Telefones Úteis'}
            </div>
            <div className="text-xs text-slate-200 space-y-1">
              <p>• <strong>SAMU:</strong> 192</p>
              <p>• <strong>{isEs ? 'Bomberos' : 'Bombeiros'}:</strong> 193</p>
              <p>• <strong>{isEs ? 'Policía Militar' : 'Polícia Militar'}:</strong> 190</p>
              <p>• <strong>{isEs ? 'Recepción Hotel' : 'Recepção Hotel'}:</strong> (67) 3044-4444</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
