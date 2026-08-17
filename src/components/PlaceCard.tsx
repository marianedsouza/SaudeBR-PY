import React, { useState } from 'react';
import { Place } from '../types';
import { Language, TRANSLATIONS, getLocalizedPlace } from '../translations';
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
  language?: Language;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ 
  place, 
  accentBorder = 'border-[#0F2C59]',
  accentText = 'text-[#0F2C59]',
  language = 'pt' as Language
}) => {
  const currentLang: Language = (language === 'es' ? 'es' : 'pt');
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[currentLang];
  const localized = getLocalizedPlace(place, currentLang);

  const handleCopyInfo = () => {
    const venueLabel = language === 'es' ? ' [SEDE DEL EVENTO]' : ' [SEDE DO EVENTO]';
    const addressPrefix = language === 'es' ? 'Dirección:' : 'Endereço:';
    const textToCopy = `${localized.name}${localized.isVenue ? venueLabel : ''}
${addressPrefix} ${localized.addressInfo}
Google Maps: ${localized.mapsUrl}
${localized.wazeUrl ? `Waze: ${localized.wazeUrl}` : ''}
${localized.siteUrl ? `Site: ${localized.siteUrl}` : localized.siteLabel ? `Site: ${localized.siteLabel}` : ''}
${localized.instagramUrl ? `Instagram: ${localized.instagramUrl}` : localized.instagramHandle ? `Instagram: ${localized.instagramHandle}` : ''}`.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={`place-card-${localized.id}`}
      className={`bg-white rounded-xl border-2 ${
        localized.isVenue 
          ? 'border-[#DA291C] shadow-lg ring-2 ring-red-100' 
          : 'border-slate-200/90 hover:border-slate-400 shadow-sm hover:shadow-md'
      } p-5 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden`}
    >
      {/* Top Special Banner for Venue / Top Highlights */}
      {localized.isVenue && (
        <div className="absolute top-0 right-0 bg-[#DA291C] text-white text-[10px] font-mono font-black px-3 py-0.5 rounded-bl-lg uppercase tracking-wider flex items-center gap-1 shadow-xs">
          <Star className="w-3 h-3 fill-current text-yellow-300" />
          <span>{language === 'es' ? 'SEDE DEL EVENTO' : 'LOCAL DO EVENTO'}</span>
        </div>
      )}

      <div>
        {/* Header Tags & Copy Button */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {localized.highlightTag && (
              <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                localized.isVenue 
                  ? 'bg-red-50 text-[#DA291C] border-red-200' 
                  : localized.id === 'bioparque-pantanal'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                {localized.highlightTag}
              </span>
            )}
          </div>
          
          <button
            id={`btn-copy-${localized.id}`}
            onClick={handleCopyInfo}
            title={language === 'es' ? 'Copiar datos y ubicación' : 'Copiar dados e localização deste local'}
            className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 p-1.5 rounded-md transition-colors text-xs font-mono font-medium flex items-center gap-1 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold text-[11px]">{t.copiedLocationBtn}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">{t.copyLocationBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Place Title */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight font-heading mb-1.5 group-hover:text-[#0F2C59] transition-colors">
          {localized.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {localized.description}
        </p>

        {/* Full Address Info with Location Link */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4 space-y-2">
          <div className="flex items-start gap-2 text-xs text-slate-700">
            <MapPin className="w-4 h-4 text-[#DA291C] shrink-0 mt-0.5" />
            <span className="leading-snug">{localized.addressInfo}</span>
          </div>

          {/* Direct GPS & Navigation Links (Google Maps & Waze) */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200">
            <a
              id={`link-maps-${localized.id}`}
              href={localized.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-white bg-[#0F2C59] hover:bg-[#0B2545] rounded-md transition-all shadow-2xs"
            >
              <Navigation className="w-3.5 h-3.5 text-yellow-300" />
              <span>{t.openInGoogleMaps}</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {localized.wazeUrl && (
              <a
                id={`link-waze-${localized.id}`}
                href={localized.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-blue-500" />
                <span>{t.openInWaze}</span>
              </a>
            )}
          </div>
        </div>

        {/* Features Chips */}
        {localized.features && localized.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {localized.features.map((feature, idx) => (
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
        {localized.siteUrl ? (
          <a
            id={`link-site-${localized.id}`}
            href={localized.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#0F2C59] border border-slate-200 rounded-lg transition-colors"
          >
            <span className="inline-flex items-center gap-2 truncate">
              <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="truncate">{localized.siteLabel || localized.siteUrl.replace(/^https?:\/\//, '')}</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1.5" />
          </a>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 bg-slate-50/70 border border-dashed border-slate-200 rounded-lg">
            <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{localized.siteLabel || t.withoutWebsite}</span>
          </div>
        )}

        {/* Instagram Link */}
        {localized.instagramUrl ? (
          <a
            id={`link-instagram-${localized.id}`}
            href={localized.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-pink-900 bg-pink-50/70 hover:bg-pink-100 border border-pink-200/80 rounded-lg transition-colors"
          >
            <span className="inline-flex items-center gap-2 truncate">
              <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
              <span className="truncate font-semibold">{localized.instagramHandle || t.seeInstagram}</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-pink-400 shrink-0 ml-1.5" />
          </a>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 bg-slate-50/50 border border-dashed border-slate-200 rounded-lg">
            <Instagram className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{localized.instagramHandle || t.withoutInstagram}</span>
          </div>
        )}
      </div>
    </div>
  );
};
