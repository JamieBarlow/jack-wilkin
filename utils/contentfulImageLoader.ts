// Docs: https://www.contentful.com/developers/docs/references/images-api/

import { ImageLoaderProps } from "next/image";
/**
 * Generates URLs for Contentful Images API with WebP + progressive JPG fallback
 */
export default function contentfulImageLoader({
  src,
  width,
  quality = 75,
}: ImageLoaderProps) {
  const baseUrl = src.startsWith("http")
    ? src
    : `https://images.ctfassets.net${src}`;

  const webpUrl = new URL(baseUrl);
  webpUrl.searchParams.set("fm", "webp");
  webpUrl.searchParams.set("w", width.toString());
  webpUrl.searchParams.set("q", quality.toString());

  return webpUrl.toString();
}
