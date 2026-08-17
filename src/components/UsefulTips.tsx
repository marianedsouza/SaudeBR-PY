import React from 'react';
import { Compass, Phone, Car, CloudSun, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data';

export const UsefulTips: React.FC = () => {
  return (
    <section id="informacoes-uteis" className="mb-10 print-break-inside-avoid">
      <div className="bg-gradient-to-br from-[#0B2545] via-[#0F2C59] to-[#133E7C] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-900 relative overflow-hidden">
        
        {/* Subtle decorative wave */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00874E]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
              <Compass className="w-3.5 h-3.5" />
              Guia Prático para o Congressista
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              Orientações Gerais • Campo Grande - MS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Informações de logística, transporte, localização do hotel oficial e contatos essenciais.
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
              <span>Rota para o Grand Park Hotel</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {/* Mobilidade */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <Car className="w-4 h-4" />
              Mobilidade & Apps
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Uber, 99 e táxis operam com facilidade. A Av. Afonso Pena é a principal artéria da cidade, interligando o Grand Park Hotel, o Bioparque e os centros gastronômicos.
            </p>
          </div>

          {/* Aeroporto */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <Compass className="w-4 h-4" />
              Aeroporto (CGR)
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              O Aeroporto Internacional de Campo Grande fica a cerca de 15 a 20 minutos de carro do Grand Park Hotel e da rede de hotéis da região nobre.
            </p>
          </div>

          {/* Clima & Dicas */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <CloudSun className="w-4 h-4" />
              Clima em Agosto
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Dias ensolarados e clima seco típico de inverno no Centro-Oeste. Recomenda-se manter garrafa d'água para hidratação e agasalho leve para o início da manhã/noite.
            </p>
          </div>

          {/* Telefones de Emergência */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2 font-heading">
              <ShieldCheck className="w-4 h-4" />
              Contatos de Apoio (DDD 67)
            </div>
            <ul className="text-xs text-slate-200 space-y-1 font-mono">
              <li>• SAMU: 192</li>
              <li>• Bombeiros: 193</li>
              <li>• Polícia Militar: 190</li>
              <li>• Grand Park Hotel: (67) 3044-4444</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
