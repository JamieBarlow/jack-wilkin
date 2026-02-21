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
  sizes,
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
  loading?: "eager" | "lazy" | undefined;
  preload?: boolean;
  fill?: boolean;
  objectFit?: string;
  fetchPriority?: "low" | "high" | "auto" | undefined;
}) {
  if (!asset) return null;
  const file = asset?.fields?.file;
  const alt = asset?.fields?.description || asset?.fields?.title || "";
  const width = !fill ? file.details.image.width : undefined;
  const height = !fill ? file.details.image.width : undefined;

  return (
    <Image
      preload={preload}
      loader={contentfulImageLoader}
      src={file.url}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      quality={quality}
      className={className}
      sizes={sizes}
      fill={fill}
      objectFit={objectFit}
      fetchPriority={fetchPriority}
    />
  );
}
