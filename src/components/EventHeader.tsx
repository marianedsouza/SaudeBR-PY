import React from 'react';
import { EVENT_DETAILS } from '../data';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Phone, 
  Shield, 
  HeartHandshake, 
  Share2, 
  Printer, 
  Sparkles 
} from 'lucide-react';

interface EventHeaderProps {
  onOpenCopyModal: () => void;
  onPrint: () => void;
}

export const EventHeader: React.FC<EventHeaderProps> = ({ onOpenCopyModal, onPrint }) => {
  return (
    <div className="bg-white border-b-4 border-[#0F2C59] relative overflow-hidden shadow-md">
      
      {/* Decorative Wave Ribbon Background Top */}
      <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-r from-[#00874E] via-[#0F2C59] to-[#DA291C]" />

      {/* Top Utility Bar */}
      <div className="bg-[#0B2545] text-white px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00A859] animate-pulse"></span>
          <span className="font-bold tracking-wider text-emerald-300 uppercase">
            Guia Oficial de Apoio ao Participante
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">Campo Grande • Mato Grosso do Sul</span>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            onClick={onOpenCopyModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded text-xs transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-yellow-400" />
            <span>Copiar Lista (Texto)</span>
          </button>
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00874E] hover:bg-[#009E52] text-white font-bold rounded text-xs transition-colors cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
          </button>
        </div>
      </div>

      {/* Main Banner Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Emblem + Title */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            {/* Visual Circular Emblem */}
            <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-white to-slate-50 border-4 border-[#0F2C59] shadow-xl p-2 flex flex-col items-center justify-center group">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00874E] m-1 animate-spin-slow"></div>
              
              {/* Central Health Emblem Graphics */}
              <div className="flex items-center justify-center gap-1 mb-1">
                <div className="w-6 h-6 rounded-md bg-[#00874E] flex items-center justify-center text-white shadow-xs">
                  <span className="text-sm font-black leading-none">+</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 my-1">
                {/* Brazil Badge */}
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  🇧🇷 BRA
                </span>
                {/* Bridge Icon */}
                <span className="text-[11px] font-mono font-black text-[#0F2C59]">
                  ══
                </span>
                {/* Paraguay Badge */}
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-300">
                  🇵🇾 PRY
                </span>
              </div>

              <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-[#0B2545] mt-1">
                FRONTEIRAS
              </span>

              {/* Bottom decorative flag wave bar */}
              <div className="absolute bottom-2 w-14 h-1.5 rounded-full bg-gradient-to-r from-[#00874E] via-[#0F2C59] to-[#DA291C]" />
            </div>

            {/* Title Section */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 self-center sm:self-start px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00874E] text-xs font-bold uppercase tracking-wider mb-2">
                <HeartHandshake className="w-3.5 h-3.5" />
                Integração Binacional em Saúde
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-[#00874E] font-heading">
                V ENCONTRO
              </h1>
              
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B2545] font-heading mt-0.5">
                SAÚDE NAS FRONTEIRAS
              </div>
              
              <div className="text-lg sm:text-xl font-bold tracking-widest text-[#DA291C] font-mono mt-1">
                BRASIL - PARAGUAI
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xl">
                Reunião estratégica de cooperação técnica, vigilância epidemiológica e fortalecimento dos serviços de saúde na faixa de fronteira entre o Brasil e o Paraguai.
              </p>
            </div>
          </div>

          {/* Right Side: Key Metadata Cards (DATA, HORÁRIO, LOCAL) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              
              {/* DATA */}
              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#00874E] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    DATA DO EVENTO
                  </span>
                  <p className="text-sm font-extrabold text-[#0B2545] leading-tight">
                    18 e 19 DE AGOSTO DE 2026
                  </p>
                  <span className="text-[11px] text-emerald-700 font-medium">Terça e Quarta-feira</span>
                </div>
              </div>

              {/* HORÁRIO */}
              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#0F2C59] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    HORÁRIO
                  </span>
                  <div className="text-xs font-bold text-slate-800 space-y-0.5">
                    <p>• 18/08: <span className="text-[#0F2C59] font-black">15h às 21h</span> (Abertura)</p>
                    <p>• 19/08: <span className="text-[#0F2C59] font-black">08h às 17h</span> (Técnico)</p>
                  </div>
                </div>
              </div>

              {/* LOCAL (GRAND PARK HOTEL) */}
              <div className="flex items-start gap-3 bg-amber-50/70 p-3 rounded-xl border border-amber-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#DA291C] text-white flex items-center justify-center shrink-0 shadow-xs animate-bounce-short">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DA291C]">
                      LOCAL OFICIAL
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 bg-red-100 text-red-800 rounded border border-red-200">
                      SEDE
                    </span>
                  </div>
                  <p className="text-sm font-black text-[#0B2545] leading-tight mt-0.5">
                    GRAND PARK HOTEL
                  </p>
                  <p className="text-[11px] text-slate-600 truncate mt-0.5">
                    Av. Afonso Pena, 5282 - Chácara Cachoeira
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <a
                      href={EVENT_DETAILS.venue.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#0F2C59] hover:bg-[#0B2545] px-2 py-1 rounded transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      Google Maps
                    </a>
                    <a
                      href={EVENT_DETAILS.venue.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 px-2 py-1 rounded transition-colors"
                    >
                      Waze
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Institutional Organizers Bar */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-[#0F2C59] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">SVS</span>
              <span className="text-[11px]">Superintendência de Vigilância em Saúde</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-[#00874E] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">SES</span>
              <span className="text-[11px]">Secretaria de Estado de Saúde</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">MS</span>
              <span className="text-[11px]">Governo do Estado de Mato Grosso do Sul</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            Campo Grande / MS • Brasil
          </div>
        </div>

      </div>

    </div>
  );
};
