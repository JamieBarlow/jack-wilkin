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
  priority,
}: {
  asset?: ContentfulAsset;
  quality?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!asset) return null;
  const file = asset?.fields?.file;
  const alt = asset?.fields?.description || asset?.fields?.title || "";
  const loading = priority ? "eager" : "lazy";

  return (
    <Image
      priority={priority || false}
      loader={contentfulImageLoader}
      src={file.url}
      alt={alt}
      width={file.details.image.width}
      height={file.details.image.height}
      loading={loading}
      quality={quality}
      className={className}
      sizes={sizes}
    />
  );
}
