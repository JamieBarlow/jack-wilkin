import Image from "next/image";
import contentfulImageLoader from "@/utils/contentfulImageLoader";

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
  metadata: {};
  sys: {};
}

export default function ContentfulImage({
  asset,
  quality,
  className,
  sizes,
  priority = false,
  fill = false,
  objectFit,
}: {
  asset?: ContentfulAsset;
  quality?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: string;
}) {
  if (!asset) return null;
  const file = asset?.fields?.file;
  const alt = asset?.fields?.description || asset?.fields?.title || "";
  const loading = priority ? "eager" : "lazy";
  const width = !fill ? file.details.image.width : undefined;
  const height = !fill ? file.details.image.width : undefined;

  return (
    <Image
      priority={priority}
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
    />
  );
}
