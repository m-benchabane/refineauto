// Coordonnées RefineAuto
export const PHONE_NUMBER = "0749332476";
export const CONTACT_EMAIL = "contact.refineauto@gmail.com";

// Réseaux sociaux
export const INSTAGRAM_URL = "https://www.instagram.com/refineauto71";
export const TIKTOK_URL = "https://www.tiktok.com/@refineauto";
export const FACEBOOK_URL =
  "https://www.facebook.com/share/1EZePfKjXJ/?mibextid=wwXIfr";

// Liens sociaux
export const SOCIAL_LINKS = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "TikTok", href: TIKTOK_URL },
  { label: "Facebook", href: FACEBOOK_URL },
].filter((link) => /^https?:\/\//.test(link.href));

// Vérification des coordonnées
export const HAS_PHONE_NUMBER = Boolean(PHONE_NUMBER);
export const HAS_CONTACT_EMAIL = Boolean(CONTACT_EMAIL);