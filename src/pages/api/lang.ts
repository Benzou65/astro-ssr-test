import type { APIContext, APIRoute } from "astro";

function replaceLocaleInUrl(url: string, newLocale: string): string {
  const localeRegex = /(?<=\/[a-zA-Z]{2}\/)[a-zA-Z]{2}(-[a-zA-Z]{2})?(\/|$)/;
  return url.replace(localeRegex, `${newLocale}$2`);
}

export const POST: APIRoute = async ({
  cookies,

  request,
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
