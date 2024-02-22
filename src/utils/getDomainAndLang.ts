import { availableLanguagesPerCountry, ui } from "../i18n/ui";

export function getDomainAndLang(
  pathname: string
): [keyof typeof availableLanguagesPerCountry, keyof typeof ui] {
  const slugs = pathname.split("/").filter((slug) => slug.length > 0);
  return slugs.slice(0, 2) as [
    keyof typeof availableLanguagesPerCountry,
    keyof typeof ui
  ];
}
