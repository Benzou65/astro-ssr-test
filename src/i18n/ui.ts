export enum LanguagesLabel {
  en = "🇺🇸",
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
    "404.page-not-found": "Page not found",
    "cart.title": "Cart",
    "cart.hi": "Hi",
    "cart.here-are-your-cart-items": "Here are your cart items",
    "cart.item": "Item",
    "cart.count": "Count",
    "login.title": "Login",
    "login.name": "Name",
    "login.password": "Password",
    "login.submit": "Submit",
  },
  fr: {
    "header.title": "Boutique en ligne",
    "home.product-listing": "Liste des produits",
    "pdp.add-to-cart": "Ajouter au panier",
    "404.page-not-found": "Page non trouvée",
    "cart.title": "Panier",
    "cart.hi": "Bonjour",
    "cart.here-are-your-cart-items": "Voici les articles de votre panier",
    "cart.item": "Article",
    "cart.count": "Unité",
    "login.title": "Connexion",
    "login.name": "Nom",
    "login.password": "Mot de passe",
    "login.submit": "Valider",
  },
  nl: {
    "header.title": "Online winkel",
    "home.product-listing": "Productlijst",
    "pdp.add-to-cart": "Toevoegen aan winkelwagen",
    "404.page-not-found": "Pagina niet gevonden",
    "cart.title": "Winkelwagen",
    "cart.hi": "Hallo",
    "cart.here-are-your-cart-items": "Hier zijn uw winkelwagenartikelen",
    "cart.item": "Artikel",
    "cart.count": "Aantal",
    "login.title": "Inloggen",
    "login.name": "Naam",
    "login.password": "Wachtwoord",
    "login.submit": "Indienen",
  },
} as const;
