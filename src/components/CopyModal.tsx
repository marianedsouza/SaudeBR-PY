import React, { useState } from 'react';
import { Copy, Check, X, Share2, FileText } from 'lucide-react';

interface CopyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RAW_EVENT_TEXT = `=====================================================
V ENCONTRO SAÚDE NAS FRONTEIRAS BRASIL - PARAGUAI
18 e 19 DE AGOSTO DE 2026 • CAMPO GRANDE / MS
LOCAL OFICIAL: GRAND PARK HOTEL
=====================================================

PROGRAMAÇÃO BÁSICA:
• 18/08 (Terça-feira): 15h às 21h (Credenciamento e Abertura Oficial)
• 19/08 (Quarta-feira): 08h às 17h (Painéis Técnicos e Encerramento)

REALIZAÇÃO:
• SVS - Superintendência de Vigilância em Saúde
• SES - Secretaria de Estado de Saúde
• Governo do Estado de Mato Grosso do Sul

-----------------------------------------------------
01. HOTÉIS E HOSPEDAGENS
-----------------------------------------------------
* Grand Park Hotel (SEDE OFICIAL DO EVENTO)
Endereço: Av. Afonso Pena, 5282 - Chácara Cachoeira, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Grand+Park+Hotel+Av+Afonso+Pena+5282+Campo+Grande+MS
Site: http://www.grandparkhotel.com.br
Instagram: https://www.instagram.com/grandparkhotelcg

* Manhattan Flat
Endereço: R. Roberto Spengler, 243 - Chácara Cachoeira, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Manhattan+Flat+Roberto+Spengler+Campo+Grande+MS
Site: Disponível em plataformas de reserva (Booking / Airbnb)
Instagram: https://www.instagram.com/manhattanflat

* Olga Kehdi Residence
Endereço: R. Raul Pires Barbosa, 1374 - Chácara Cachoeira, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Olga+Kehdi+Residence+Campo+Grande+MS
Site: https://www.booking.com/hotel/br/olga-kehdi-flats.pt-br.html
Instagram: https://www.instagram.com/olgakehdiresidence

-----------------------------------------------------
02. RESTAURANTES E GASTRONOMIA
-----------------------------------------------------
* Churrascaria Nativas Grill
Endereço: Av. Afonso Pena, 5468 - Chácara Cachoeira, Campo Grande - MS (Ao lado do Grand Park)
Google Maps: https://www.google.com/maps/search/?api=1&query=Churrascaria+Nativas+Grill+Av+Afonso+Pena+5468+Campo+Grande+MS
Site: https://churrascariacampogrande.com.br
Instagram: https://www.instagram.com/nativasgrillcampogrande

* Poiá Espeto
Endereço: R. Antônio Maria Coelho, 3923 - Jardim dos Estados, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Poia+Espeto+Rua+Antonio+Maria+Coelho+Campo+Grande+MS
Site: http://poiaespeto.com.br
Instagram: https://www.instagram.com/poiaespetocg

* BarZito
Endereço: R. Folclore, 29 - Carandá Bosque, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=BarZito+Rua+Folclore+29+Campo+Grande+MS
Site: https://www.barzitocg.com
Instagram: https://www.instagram.com/barzitocg

* Canto do Cupim
Endereço: Av. Bom Pastor, 261 - Vilas Boas, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Canto+do+Cupim+Av+Bom+Pastor+261+Campo+Grande+MS
Site: http://www.cantodocupim.com.br
Instagram: https://www.instagram.com/cantodocupim

* El Parrudo Burger
Endereço: R. Nortelândia, 642 - Santa Fé, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=El+Parrudo+Burger+Rua+Nortelandia+642+Campo+Grande+MS
Site: https://elparrudoburger.com.br
Instagram: https://www.instagram.com/elparrudoburger

-----------------------------------------------------
03. COMPRAS E ENTRETENIMENTO
-----------------------------------------------------
* Shopping Campo Grande
Endereço: Av. Afonso Pena, 4909 - Santa Fé, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Shopping+Campo+Grande+Av+Afonso+Pena+4909+MS
Site: https://shoppingcampogrande.com.br
Instagram: https://www.instagram.com/shoppingcampogrande

* Carrefour Hipermercado
Endereço: Av. Afonso Pena, 4909 - Santa Fé (Anexo ao Shopping Campo Grande)
Google Maps: https://www.google.com/maps/search/?api=1&query=Carrefour+Hipermercado+Shopping+Campo+Grande+MS
Site: https://www.carrefour.com.br
Instagram: https://www.instagram.com/carrefourbrasil

* Mirante Stage
Endereço: R. Doutor Zerbini, 38 - Chácara Cachoeira, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Mirante+Stage+Rua+Doutor+Zerbini+Campo+Grande+MS
Site: Divulgação de shows via Sympla
Instagram: https://www.instagram.com/mirante.stage

-----------------------------------------------------
04. PARQUES, BIOPARQUE E ÓRGÃOS PÚBLICOS
-----------------------------------------------------
* Bioparque Pantanal (Maior Aquário de Água Doce do Mundo)
Endereço: Av. Afonso Pena, 6277 - Chácara Cachoeira, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Bioparque+Pantanal+Av+Afonso+Pena+6277+Campo+Grande+MS
Site: https://bioparquepantanal.ms.gov.br
Instagram: https://www.instagram.com/bioparquepantanaloficial

* Parque das Nações Indígenas
Endereço: Av. Afonso Pena, s/n - Altos da Afonso Pena, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Parque+das+Na%C3%A7%C3%B5es+Ind%C3%ADgenas+Campo+Grande+MS
Site: https://www.imasul.ms.gov.br
Instagram: https://www.instagram.com/parquedasnacoesindigenasoficial

* Parque Estadual do Prosa
Endereço: R. Damião Severino, 100 - Chácara Cachoeira, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=Parque+Estadual+do+Prosa+Campo+Grande+MS
Site: https://www.imasul.ms.gov.br
Instagram: Informações via IMASUL

* Câmara Municipal de Campo Grande
Endereço: Av. Ricardo Brandão, 1600 - Jatiúca Park, Campo Grande - MS
Google Maps: https://www.google.com/maps/search/?api=1&query=C%C3%A2mara+Municipal+de+Campo+Grande+Av+Ricardo+Brandao+1600
Site: https://www.camara.ms.gov.br
Instagram: https://www.instagram.com/camaramunicipalcg`;

export const CopyModal: React.FC<CopyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_EVENT_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="copy-text-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-slate-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-[#0F2C59] text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading">
                Lista Oficial Formatada em Texto Puro
              </h3>
              <p className="text-xs text-emerald-200">
                Inclui locais, links de localização do Google Maps, sites e Instagram
              </p>
            </div>
          </div>
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Box */}
        <div className="p-4 sm:p-6 bg-slate-100 flex-1 overflow-hidden flex flex-col">
          <p className="text-xs text-slate-600 mb-2 font-medium">
            Copie o texto formatado para enviar pelo WhatsApp, e-mail institucional ou salvar em suas notas:
          </p>
          <div className="flex-1 overflow-y-auto font-mono text-xs text-slate-100 bg-[#0B2545] p-4 rounded-xl border border-slate-700 whitespace-pre-wrap leading-relaxed select-all shadow-inner">
            {RAW_EVENT_TEXT}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-white">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            V Encontro Saúde nas Fronteiras • Brasil - Paraguai
          </span>
          <div className="flex items-center gap-3 ml-auto">
            <button
              id="btn-cancel-modal"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Fechar
            </button>
            <button
              id="btn-copy-all-text"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-[#00874E] hover:bg-[#009E52] rounded-lg shadow-sm transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Todo o Conteúdo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
