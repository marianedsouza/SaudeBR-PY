import { jsPDF } from 'jspdf';
import { EVENT_DETAILS, CATEGORIES, PLACES } from '../data';
import { Language, TRANSLATIONS, getLocalizedPlace } from '../translations';

export async function generateOfficialPDF(
  language: Language = 'pt',
  onProgress?: (status: string) => void
): Promise<void> {
  const isEs = language === 'es';
  const t = TRANSLATIONS[language];

  if (onProgress) onProgress(isEs ? 'Preparando documento oficial...' : 'Preparando documento oficial...');

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 12) {
      // Add page number in footer
      const pageNum = doc.getNumberOfPages();
      doc.setFontSize(8);
      doc.setTextColor(140, 140, 140);
      doc.text(
        `${isEs ? 'V Encuentro Salud en las Fronteras' : 'V Encontro Saúde nas Fronteiras'} • ${isEs ? 'Página' : 'Página'} ${pageNum}`,
        pageWidth / 2,
        pageHeight - 8,
        { align: 'center' }
      );

      doc.addPage();
      y = margin;

      // Repeat subtle mini-header on subsequent pages
      doc.setFillColor(15, 44, 89);
      doc.rect(margin, y, contentWidth, 6, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text(
        isEs 
          ? 'GUÍA DE APOYO LOGÍSTICO • CAMPO GRANDE / MS' 
          : 'GUIA DE APOIO LOGÍSTICO • CAMPO GRANDE / MS',
        margin + 4,
        y + 4.2
      );
      y += 10;
    }
  };

  // ================= PAGE 1: HEADER & BANNER =================
  // Header Box
  doc.setFillColor(15, 44, 89);
  doc.roundedRect(margin, y, contentWidth, 38, 2, 2, 'F');

  // Top color accents
  doc.setFillColor(0, 135, 78);
  doc.rect(margin, y, contentWidth / 2, 2, 'F');
  doc.setFillColor(218, 41, 28);
  doc.rect(margin + contentWidth / 2, y, contentWidth / 2, 2, 'F');

  // Header texts
  doc.setTextColor(0, 230, 130);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(
    isEs ? 'GUÍA OFICIAL DE APOYO AL CONGRESISTA' : 'GUIA OFICIAL DE APOIO AO CONGRESSISTA',
    margin + 6,
    y + 8
  );

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(
    isEs ? 'V ENCUENTRO SALUD EN LAS FRONTERAS' : 'V ENCONTRO SAÚDE NAS FRONTEIRAS',
    margin + 6,
    y + 16
  );

  doc.setTextColor(255, 200, 50);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(
    isEs ? 'BRASIL - PARAGUAY' : 'BRASIL - PARAGUAI',
    margin + 6,
    y + 22
  );

  doc.setTextColor(230, 230, 230);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.text(
    `${t.eventDates} • ${isEs ? 'Sede Oficial:' : 'Local Oficial:'} ${EVENT_DETAILS.venue.name} (Campo Grande - MS)`,
    margin + 6,
    y + 29
  );

  doc.setTextColor(180, 200, 220);
  doc.setFontSize(7.5);
  doc.text(
    isEs
      ? 'Realización: SVS / SES / Gobierno del Estado de Mato Grosso do Sul'
      : 'Realização: SVS / SES / Governo do Estado de Mato Grosso do Sul',
    margin + 6,
    y + 34
  );

  y += 42;

  // Key Event Info Matrix (3 Columns in PDF)
  const colWidth = (contentWidth - 6) / 3;

  // Box 1: Data
  doc.setFillColor(245, 248, 252);
  doc.setDrawColor(200, 220, 240);
  doc.roundedRect(margin, y, colWidth, 20, 1.5, 1.5, 'FD');
  doc.setTextColor(0, 135, 78);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text(t.eventDateLabel, margin + 3, y + 5);
  doc.setTextColor(15, 44, 89);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(t.eventDates, margin + 3, y + 11);
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text(t.eventDaysDesc, margin + 3, y + 16);

  // Box 2: Horários
  const col2X = margin + colWidth + 3;
  doc.setFillColor(245, 248, 252);
  doc.roundedRect(col2X, y, colWidth, 20, 1.5, 1.5, 'FD');
  doc.setTextColor(15, 44, 89);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text(t.officialHoursLabel, col2X + 3, y + 5);
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text(`${t.schedule18} ${t.schedule18Type}`, col2X + 3, y + 10.5);
  doc.text(`${t.schedule19} ${t.schedule19Type}`, col2X + 3, y + 15.5);

  // Box 3: Local / Sede
  const col3X = margin + (colWidth + 3) * 2;
  doc.setFillColor(254, 242, 242);
  doc.setDrawColor(254, 202, 202);
  doc.roundedRect(col3X, y, colWidth, 20, 1.5, 1.5, 'FD');
  doc.setTextColor(218, 41, 28);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text(t.officialVenueLabel, col3X + 3, y + 5);
  doc.setTextColor(15, 44, 89);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('GRAND PARK HOTEL', col3X + 3, y + 11);
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Av. Afonso Pena, 5282 - Cachoeira', col3X + 3, y + 16);

  y += 26;

  // Section List
  for (const category of CATEGORIES) {
    const places = PLACES.filter((p) => p.category === category.id);
    if (places.length === 0) continue;

    checkPageBreak(25);

    // Category Section Title
    let headerR = 15,
      headerG = 44,
      headerB = 89;
    if (category.id === 'gastronomia') {
      headerR = 218;
      headerG = 41;
      headerB = 28;
    } else if (category.id === 'compras') {
      headerR = 0;
      headerG = 135;
      headerB = 78;
    } else if (category.id === 'parques') {
      headerR = 0;
      headerG = 158;
      headerB = 82;
    }

    const catTitle =
      category.id === 'hoteis'
        ? t.catHotelsTitle
        : category.id === 'gastronomia'
        ? t.catFoodTitle
        : category.id === 'compras'
        ? t.catShoppingTitle
        : t.catParksTitle;

    doc.setFillColor(headerR, headerG, headerB);
    doc.roundedRect(margin, y, contentWidth, 7.5, 1, 1, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.text(`${category.code}. ${catTitle.toUpperCase()}`, margin + 4, y + 5.2);

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `(${places.length} ${isEs ? 'lugares recomendados' : 'locais recomendados'})`,
      margin + contentWidth - 4,
      y + 5.2,
      { align: 'right' }
    );

    y += 11;

    // Render each place with localized texts
    for (const rawPlace of places) {
      const place = getLocalizedPlace(rawPlace, language);
      checkPageBreak(30);

      // Card Background
      doc.setFillColor(place.isVenue ? 254 : 250, place.isVenue ? 245 : 251, place.isVenue ? 245 : 253);
      doc.setDrawColor(place.isVenue ? 218 : 226, place.isVenue ? 41 : 232, place.isVenue ? 28 : 240);
      doc.roundedRect(margin, y, contentWidth, 23, 1.5, 1.5, 'FD');

      // Place Name & Venue tag
      doc.setTextColor(15, 44, 89);
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      doc.text(place.name, margin + 4, y + 5);

      if (place.isVenue) {
        doc.setFillColor(218, 41, 28);
        doc.roundedRect(margin + 62, y + 1.5, 40, 4.5, 0.8, 0.8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(6.5);
        doc.setFont('helvetica', 'bold');
        doc.text(
          isEs ? 'SEDE DEL EVENTO' : 'LOCAL DO EVENTO',
          margin + 82,
          y + 4.6,
          { align: 'center' }
        );
      } else if (place.highlightTag) {
        doc.setFillColor(235, 240, 248);
        doc.roundedRect(margin + 60, y + 1.5, 46, 4.5, 0.8, 0.8, 'F');
        doc.setTextColor(15, 44, 89);
        doc.setFontSize(6.5);
        doc.setFont('helvetica', 'bold');
        doc.text(place.highlightTag.substring(0, 30), margin + 83, y + 4.6, { align: 'center' });
      }

      // Address line
      doc.setTextColor(70, 80, 95);
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      const cleanAddress = doc.splitTextToSize(`${t.addressLabel}: ${place.addressInfo}`, contentWidth - 8);
      doc.text(cleanAddress[0], margin + 4, y + 10);

      // Links line with clickable Google Maps & Instagram
      doc.setTextColor(0, 110, 220);
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');

      // Google Maps Link
      doc.textWithLink(
        ` [ ${isEs ? 'Google Maps: Ver Ruta' : 'Google Maps: Ver Rota'} ]`,
        margin + 4,
        y + 15,
        { url: place.mapsUrl }
      );

      // Site or Instagram
      if (place.siteUrl) {
        doc.setTextColor(0, 135, 78);
        doc.textWithLink(
          ` | ${isEs ? 'Sitio' : 'Site'}: ${place.siteLabel || (isEs ? 'Acceder' : 'Acessar')}`,
          margin + 42,
          y + 15,
          { url: place.siteUrl }
        );
      }

      if (place.instagramUrl) {
        doc.setTextColor(180, 30, 90);
        doc.textWithLink(
          ` | Instagram: ${place.instagramHandle || 'Perfil'}`,
          margin + 105,
          y + 15,
          { url: place.instagramUrl }
        );
      }

      // Features or description excerpt
      if (place.features && place.features.length > 0) {
        doc.setTextColor(120, 130, 140);
        doc.setFontSize(6.5);
        doc.setFont('helvetica', 'normal');
        doc.text(
          `${isEs ? 'Aspectos destacados' : 'Destaques'}: ${place.features.join(' • ')}`,
          margin + 4,
          y + 19.5
        );
      }

      y += 25.5;
    }

    y += 3;
  }

  // Practical Tips block on final page
  checkPageBreak(35);
  doc.setFillColor(15, 44, 89);
  doc.roundedRect(margin, y, contentWidth, 28, 2, 2, 'F');

  doc.setTextColor(255, 200, 50);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text(
    isEs
      ? 'ORIENTACIONES PRÁCTICAS A LOS PARTICIPANTES • CAMPO GRANDE / MS'
      : 'ORIENTAÇÕES PRÁTICAS AOS PARTICIPANTES • CAMPO GRANDE / MS',
    margin + 5,
    y + 6
  );

  doc.setTextColor(240, 240, 240);
  doc.setFontSize(7.2);
  doc.setFont('helvetica', 'normal');
  doc.text(
    isEs
      ? '• Movilidad: La Av. Afonso Pena concentra hoteles, el Grand Park, restaurantes y el Bioparque Pantanal.'
      : '• Mobilidade: A Av. Afonso Pena concentra hotéis, o Grand Park, restaurantes e o Bioparque Pantanal.',
    margin + 5,
    y + 11
  );
  doc.text(
    isEs
      ? '• Aeropuerto Internacional (CGR): Se encuentra a unos 15-20 minutos en coche del Grand Park Hotel.'
      : '• Aeroporto Internacional (CGR): Fica a cerca de 15 a 20 minutos de carro do Grand Park Hotel.',
    margin + 5,
    y + 16
  );
  doc.text(
    isEs
      ? '• Contactos de Apoyo: SAMU 192 | Bomberos 193 | Policía 190 | Grand Park Hotel: (67) 3044-4444'
      : '• Contatos de Apoio: SAMU 192 | Bombeiros 193 | Polícia 190 | Grand Park Hotel: (67) 3044-4444',
    margin + 5,
    y + 21
  );

  doc.setTextColor(180, 200, 230);
  doc.setFontSize(6.8);
  doc.text(
    isEs
      ? 'Documento generado automáticamente por la Guía Oficial de Apoyo al Participante • Agosto de 2026'
      : 'Documento gerado automaticamente pelo Guia Oficial de Apoio ao Participante • Agosto de 2026',
    margin + 5,
    y + 25.5
  );

  // Add final page footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 140);
    doc.text(
      `${isEs ? 'V Encuentro Salud en las Fronteras • Brasil - Paraguay' : 'V Encontro Saúde nas Fronteiras • Brasil - Paraguai'} • ${isEs ? 'Página' : 'Página'} ${i} ${isEs ? 'de' : 'de'} ${totalPages}`,
      pageWidth / 2,
      pageHeight - 6,
      { align: 'center' }
    );
  }

  // Save the PDF
  if (onProgress) onProgress(isEs ? 'Finalizando descarga...' : 'Finalizando download...');
  const filename = isEs
    ? 'Guia_V_Encuentro_Salud_Fronteras_MS.pdf'
    : 'Guia_V_Encontro_Saude_Fronteiras_MS.pdf';
  doc.save(filename);
}
