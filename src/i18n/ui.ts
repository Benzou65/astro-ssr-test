export enum LanguagesLabel {
  en = "English",
  fr = "🇫🇷",
  nl = "🇳🇱",
}

export const availableLanguagesPerCountry = {
  us: ["en"],
  be: ["nl", "fr"],
  fr: ["fr"],
  nl: ["nl"],
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "header.title": "Online Store",
    "home.product-listing": "Product Listing",
    "pdp.add-to-cart": "Add to Cart",
  },
  fr: {
    "header.title": "Boutique en ligne",
    "home.product-listing": "Liste des produits",
    "pdp.add-to-cart": "Ajouter au panier",
  },
  nl: {
    "header.title": "Online winkel",
    "home.product-listing": "Productlijst",
    "pdp.add-to-cart": "Toevoegen aan winkelwagen",
  },
} as const;
