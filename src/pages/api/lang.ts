import type { APIContext, APIRoute } from "astro";

function replaceLocaleInUrl(url: string, newLocale: string) {
  // This regular expression matches the protocol, any domain and any port,
  // and captures them in group 1. It then matches any two or more letter
  // locale (not just two, to be more flexible) followed by a slash, to replace
  // it with the new locale.
  const regex = /^(https?:\/\/[^\/]+\/)[a-z]{2,}\//i;
  return url.replace(regex, `$1${newLocale}/`);
}

export const POST: APIRoute = async ({
  cookies,
  currentLocale,
  preferredLocale,
  preferredLocaleList,
  request,
  site,
}: APIContext) => {
  const body = await new Response(request.body).text();

  const pairs = body.split("&");

  const data: { [key: string]: string } = {};
  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    data[key] = value;
  });

  if (data["lang"]) {
    cookies.set("fav-lang", data["lang"], {
      path: "/",
      maxAge: 2592000,
    });
  }

  return new Response(null, {
    status: 301,
    headers: {
      Location:
        replaceLocaleInUrl(decodeURIComponent(data["origin"]), data["lang"]) ||
        "/",
    },
  });
};
