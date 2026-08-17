import React, { useState } from 'react';
import { Place } from '../types';
import { 
  Globe, 
  Instagram, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Navigation,
  Compass,
  Star
} from 'lucide-react';

interface PlaceCardProps {
  place: Place;
  accentBorder?: string;
  accentText?: string;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ 
  place, 
  accentBorder = 'border-[#0F2C59]',
  accentText = 'text-[#0F2C59]'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyInfo = () => {
    const textToCopy = `${place.name}${place.isVenue ? ' [SEDE DO EVENTO]' : ''}
Endereço: ${place.addressInfo}
Google Maps: ${place.mapsUrl}
${place.wazeUrl ? `Waze: ${place.wazeUrl}` : ''}
${place.siteUrl ? `Site: ${place.siteUrl}` : place.siteLabel ? `Site: ${place.siteLabel}` : ''}
${place.instagramUrl ? `Instagram: ${place.instagramUrl}` : place.instagramHandle ? `Instagram: ${place.instagramHandle}` : ''}`.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={`place-card-${place.id}`}
      className={`bg-white rounded-xl border-2 ${
        place.isVenue 
          ? 'border-[#DA291C] shadow-lg ring-2 ring-red-100' 
          : 'border-slate-200/90 hover:border-slate-400 shadow-sm hover:shadow-md'
      } p-5 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden`}
    >
      {/* Top Special Banner for Venue / Top Highlights */}
      {place.isVenue && (
        <div className="absolute top-0 right-0 bg-[#DA291C] text-white text-[10px] font-mono font-black px-3 py-0.5 rounded-bl-lg uppercase tracking-wider flex items-center gap-1 shadow-xs">
          <Star className="w-3 h-3 fill-current text-yellow-300" />
          <span>LOCAL DO EVENTO</span>
        </div>
      )}

      <div>
        {/* Header Tags & Copy Button */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {place.highlightTag && (
              <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                place.isVenue 
                  ? 'bg-red-50 text-[#DA291C] border-red-200' 
                  : place.id === 'bioparque-pantanal'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                {place.highlightTag}
              </span>
            )}
          </div>
          
          <button
            id={`btn-copy-${place.id}`}
            onClick={handleCopyInfo}
            title="Copiar dados e localização deste local"
            className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 p-1.5 rounded-md transition-colors text-xs font-mono font-medium flex items-center gap-1 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold text-[11px]">COPIADO</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Place Title */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight font-heading mb-1.5 group-hover:text-[#0F2C59] transition-colors">
          {place.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {place.description}
        </p>

        {/* Full Address Info with Location Link */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4 space-y-2">
          <div className="flex items-start gap-2 text-xs text-slate-700">
            <MapPin className="w-4 h-4 text-[#DA291C] shrink-0 mt-0.5" />
            <span className="leading-snug">{place.addressInfo}</span>
          </div>

          {/* Direct GPS & Navigation Links (Google Maps & Waze) */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200">
            <a
              id={`link-maps-${place.id}`}
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-white bg-[#0F2C59] hover:bg-[#0B2545] rounded-md transition-all shadow-2xs"
            >
              <Navigation className="w-3.5 h-3.5 text-yellow-300" />
              <span>Abrir no Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {place.wazeUrl && (
              <a
                id={`link-waze-${place.id}`}
                href={place.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-blue-500" />
                <span>Waze</span>
              </a>
            )}
          </div>
        </div>

        {/* Features Chips */}
        {place.features && place.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {place.features.map((feature, idx) => (
              <span 
                key={idx}
                className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
              >
                • {feature}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Links (Site & Instagram) */}
      <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-auto">
        {/* Site Link */}
        {place.siteUrl ? (
          <a
            id={`link-site-${place.id}`}
            href={place.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#0F2C59] border border-slate-200 rounded-lg transition-colors"
          >
            <span className="inline-flex items-center gap-2 truncate">
              <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="truncate">{place.siteLabel || place.siteUrl.replace(/^https?:\/\//, '')}</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1.5" />
          </a>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 bg-slate-50/70 border border-dashed border-slate-200 rounded-lg">
            <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{place.siteLabel || 'Sem site oficial exclusivo'}</span>
          </div>
        )}

        {/* Instagram Link */}
        {place.instagramUrl ? (
          <a
            id={`link-instagram-${place.id}`}
            href={place.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-pink-900 bg-pink-50/70 hover:bg-pink-100 border border-pink-200/80 rounded-lg transition-colors"
          >
            <span className="inline-flex items-center gap-2 truncate">
              <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
              <span className="truncate font-semibold">{place.instagramHandle || 'Ver Instagram Oficial'}</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-pink-400 shrink-0 ml-1.5" />
          </a>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 bg-slate-50/50 border border-dashed border-slate-200 rounded-lg">
            <Instagram className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{place.instagramHandle || 'Sem Instagram oficial'}</span>
          </div>
        )}
      </div>
    </div>
  );
};
