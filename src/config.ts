/**
 * À compléter avant toute mise en ligne.
 * Ne pas publier de coordonnées ou de mentions commerciales non vérifiées.
 */
export const agency = {
  name: "PRO ASSURANCE GABON",
  streetAddress: "[RUE ET QUARTIER À RENSEIGNER]",
  city: "Libreville",
  region: "Estuaire",
  country: "GA",
  phoneDisplay: "+241 [XX XX XX XX]",
  phoneE164: "",
  whatsappNumber: "",
  email: "[EMAIL À RENSEIGNER]",
  hours: "[HORAIRES À CONFIRMER]",
  website: "https://www.votre-domaine.ga",
  logo: "/logo-placeholder.svg",
  latitude: "",
  longitude: "",
  googleBusinessProfile: "",
  facebook: "",
  linkedin: "",
  insurers: [] as string[],
  brandNote: "Palette provisoire à remplacer par les couleurs exactes du logo officiel."
};

export const isPhoneConfigured = Boolean(agency.phoneE164 && /^\+241\d{8}$/.test(agency.phoneE164));
export const isWhatsappConfigured = Boolean(agency.whatsappNumber && /^\d{11}$/.test(agency.whatsappNumber));
