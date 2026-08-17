import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EVENT_DETAILS } from '../data';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Navigation, 
  HeartHandshake, 
  Share2, 
  FileDown,
  CheckCircle2,
  Compass,
  Award,
  FileText,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { generateOfficialPDF } from '../utils/pdfExport';

interface EventHeaderProps {
  onOpenCopyModal: () => void;
}

export const EventHeader: React.FC<EventHeaderProps> = ({ onOpenCopyModal }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPdf(true);
      await generateOfficialPDF();
      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 3500);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleShareWhatsApp = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `🏥 *V ENCONTRO SAÚDE NAS FRONTEIRAS BRASIL - PARAGUAI*\n📅 *Data:* 18 e 19 de Agosto de 2026\n📍 *Local:* Grand Park Hotel • Campo Grande - MS\n\n📌 *Guia Oficial do Participante:* Programação, hotéis, restaurantes, Bioparque Pantanal e rotas GPS:\n${currentUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-white border-b-4 border-[#0F2C59] shadow-md w-full">
      {/* Decorative Ribbon Bar Top - 100% Flush with Top */}
      <div className="w-full h-1.5 sm:h-2 bg-gradient-to-r from-[#00874E] via-[#0F2C59] to-[#DA291C]" />

      {/* Main Header Container - Seamless Single Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-3 pb-8 sm:pb-10">
        
        {/* Top Seamless Utility Row: Status + Quick Actions */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 text-xs no-print">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00A859] animate-pulse shrink-0"></span>
            <span className="font-bold tracking-tight text-[#0F2C59] uppercase text-[11px] sm:text-xs truncate">
              Guia Oficial do Participante
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-500 text-[11px]">Campo Grande • MS</span>
          </div>

          {/* Clean Action Buttons: Responsive & Minimalist */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Copy Text Button */}
            <button
              id="btn-header-copy-text"
              onClick={onOpenCopyModal}
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all cursor-pointer border border-slate-200 active:scale-95 shadow-2xs"
              title="Copiar texto do guia formatado"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="hidden sm:inline">Copiar Texto</span>
            </button>

            {/* Download PDF Button */}
            <button
              id="btn-header-download-pdf"
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className={`inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95 ${
                pdfSuccess
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                  : 'bg-red-50 hover:bg-red-100 text-[#DA291C] border border-red-200'
              }`}
              title="Baixar Guia em PDF"
            >
              {isGeneratingPdf ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0"></span>
                  <span className="hidden sm:inline">Gerando...</span>
                </>
              ) : pdfSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="hidden sm:inline">Baixado!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5 text-[#DA291C] shrink-0" />
                  <span className="hidden sm:inline">Baixar PDF</span>
                </>
              )}
            </button>

            {/* WhatsApp Share Button */}
            <button
              id="btn-header-whatsapp-share"
              onClick={handleShareWhatsApp}
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg text-xs transition-all cursor-pointer shadow-2xs active:scale-95"
              title="Compartilhar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span className="hidden md:inline">WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Hero Content Grid: Floating Logo + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Side: Floating Logo + Event Title */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            {/* Free Floating Logo in Motion (Clean, No Box, No Borders, No Shadows) */}
            <motion.div 
              className="shrink-0 cursor-default"
              animate={{ 
                y: [0, -9, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img 
                src="/logo-evento.png" 
                alt="Logo Oficial - V Encontro Saúde nas Fronteiras Brasil - Paraguai"
                className="w-44 sm:w-52 md:w-60 h-auto object-contain select-none pointer-events-none"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('assets') === -1) {
                    target.src = '/assets/MATO%20GROSSO%20DO%20SUL%20(1).png';
                  }
                }}
              />
            </motion.div>

            {/* Event Typography & Purpose */}
            <div className="flex flex-col flex-1">
              <div className="inline-flex items-center gap-2 self-center sm:self-start px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00874E] text-xs font-bold uppercase tracking-wider mb-2.5">
                <HeartHandshake className="w-4 h-4" />
                Integração Binacional em Saúde
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-[#00874E] font-heading">
                V ENCONTRO
              </h1>
              
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B2545] font-heading mt-1">
                SAÚDE NAS FRONTEIRAS
              </div>
              
              <div className="text-lg sm:text-xl font-bold tracking-widest text-[#DA291C] font-mono mt-1">
                BRASIL - PARAGUAI
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Reunião estratégica de cooperação técnica, vigilância epidemiológica e fortalecimento da assistência à saúde na faixa de fronteira entre o Brasil e o Paraguai.
              </p>

              {/* Quick Action Links: Certificado & Programação */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-4">
                <a
                  id="btn-hero-certificado"
                  href="https://servicos.saude.ms.gov.br/certificados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DA291C] hover:text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 px-3.5 py-2 rounded-lg transition-all shadow-2xs group cursor-pointer"
                  title="Emitir ou consultar Certificado do Evento"
                >
                  <Award className="w-3.5 h-3.5 text-[#DA291C] group-hover:scale-110 transition-transform" />
                  <span>Certificado</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  id="btn-hero-programacao"
                  href="https://www.saude.ms.gov.br/wp-content/uploads/2026/08/Programacao-Final-Evento-Brasil-Paraguai.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00874E] hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-lg transition-all shadow-2xs group cursor-pointer"
                  title="Acessar documento oficial com a Programação Completa"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00874E] group-hover:scale-110 transition-transform" />
                  <span>Programação</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Key Metadata Cards (DATA, HORÁRIO, LOCAL) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
              
              {/* DATA */}
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#00874E] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    DATA DO EVENTO
                  </span>
                  <p className="text-sm font-extrabold text-[#0B2545] leading-tight mt-0.5">
                    18 e 19 DE AGOSTO DE 2026
                  </p>
                  <span className="text-[11px] text-emerald-700 font-medium">Terça e Quarta-feira</span>
                </div>
              </div>

              {/* HORÁRIO */}
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#0F2C59] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    HORÁRIOS OFICIAIS
                  </span>
                  <div className="text-xs font-bold text-slate-800 space-y-0.5 mt-0.5">
                    <p>• 18/08: <span className="text-[#0F2C59] font-black">15h às 21h</span> (Abertura)</p>
                    <p>• 19/08: <span className="text-[#0F2C59] font-black">08h às 17h</span> (Técnico)</p>
                  </div>
                </div>
              </div>

              {/* LOCAL (GRAND PARK HOTEL) */}
              <div className="flex items-start gap-3 bg-red-50/60 p-3.5 rounded-xl border border-red-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#DA291C] text-white flex items-center justify-center shrink-0 shadow-xs">
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
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#0F2C59] hover:bg-[#0B2545] px-2.5 py-1 rounded-md transition-colors"
                    >
                      <Navigation className="w-3 h-3 text-yellow-300" />
                      Google Maps
                    </a>
                    <a
                      href={EVENT_DETAILS.venue.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 px-2 py-1 rounded-md transition-colors"
                    >
                      <Compass className="w-3 h-3 text-blue-500" />
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

    </header>
  );
};
