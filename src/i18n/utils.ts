import type { AstroCookies } from "astro";
import { ui, defaultLang } from "./ui";
import { availableLanguagesPerCountry } from "./ui";
export enum Countries {
  us = "us",
  be = "be",
  fr = "fr",
  nl = "nl",
}

export function getCountryFromUrl(url: URL) {
  const [country] = url.hostname.split(".");

  // check if country is part of Enum Countries
  return Object.keys(Countries).includes(country)
    ? Countries[country as keyof typeof Countries]
    : Countries.us;
}

export function getLangFromCookie(cookies: AstroCookies) {
  const favLang = cookies.has("fav-lang")
    ? cookies.get("fav-lang")?.value
    : undefined;

  // check if favLang is in the list of languages
  if (favLang && Object.keys(ui).includes(favLang)) {
    return favLang as keyof typeof ui;
  }
  return null;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
