import { getDomainAndLang } from ".";

export function getLinkHref(url: URL, href: string) {
  const [domain, lang] = getDomainAndLang(url.pathname);
  const slug = href === "/" ? "" : href;

  return `${url.origin}/${domain}/${lang}${slug}`;
}
