import Image from "next/image";
import contentfulImageLoader from "../api/contentfulImageLoader";

export interface ContentfulAsset {
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
      contentType?: string;
    };
  };
  metadata: object;
  sys: object;
}

export default function ContentfulImage({
  asset,
  quality = 75,
  className,
  sizes = "(max-width: 48rem) 100vw, (max-width: 72rem) 50vw, 33vw",
  preload = false,
  loading = "lazy",
  fill = false,
  objectFit,
  fetchPriority = "low",
}: {
  asset?: ContentfulAsset;
  quality?: number;
  className?: string;
  sizes?: string;
  loading?: "eager" | "lazy";
  preload?: boolean;
  fill?: boolean;
  objectFit?: string;
  fetchPriority?: "low" | "high" | "auto" | undefined;
}) {
  if (!asset) return null;
  const file = asset?.fields?.file;
  const alt = asset?.fields?.description || asset?.fields?.title || "";
  const width = !fill ? file.details.image.width : undefined;
  const height = !fill ? file.details.image.height : undefined;
  // Prevent passing incompatible values
  const lazyOrEager = fetchPriority === "high" ? "eager" : loading;
  const resolvedPreload = fetchPriority === "high" ? false : preload;

  return (
    <Image
      preload={resolvedPreload}
      loader={contentfulImageLoader}
      src={file.url}
      alt={alt}
      width={width}
      height={height}
      loading={lazyOrEager}
      quality={quality}
      className={className}
      sizes={sizes}
      fill={fill}
      objectFit={objectFit}
      fetchPriority={fetchPriority}
    />
  );
}
