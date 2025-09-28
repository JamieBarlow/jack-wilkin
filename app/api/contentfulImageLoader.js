"use client";
// Docs: https://www.contentful.com/developers/docs/references/images-api/

export default function contentfulImageLoader({ src, width, quality = 75 }) {
  let baseUrl;
  if (src.startsWith("http")) {
    baseUrl = src;
  } else if (src.startsWith("//")) {
    baseUrl = "https:" + src;
  } else if (src.startsWith("/")) {
    baseUrl = `https://images.ctfassets.net${src}`;
  } else if (src.startsWith("images.ctfassets.net")) {
    baseUrl = `https://${src}`;
  } else {
    // fallback for unexpected formats
    baseUrl = `https://images.ctfassets.net/${src}`;
  }
  const webpUrl = new URL(baseUrl);
  webpUrl.searchParams.set("fm", "webp");
  webpUrl.searchParams.set("w", width.toString());
  webpUrl.searchParams.set("q", quality.toString());

  // console.log(webpUrl);
  return webpUrl.href;
}
