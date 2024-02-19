import type { APIContext, APIRoute } from "astro";

export const POST: APIRoute = async ({
  cookies,
  currentLocale,
  preferredLocale,
  preferredLocaleList,
  request,
}: APIContext) => {
  const body = await new Response(request.body).text();
  console.log("body", body);
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
      Location: request.headers.get("Referer") || "/",
    },
  });
};
