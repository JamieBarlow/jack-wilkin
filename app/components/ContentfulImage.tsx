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
}: {
  asset?: ContentfulAsset;
  quality?: number;
  className?: string;
  sizes?: string;
}) {
  if (!asset) return null;
  const file = asset?.fields?.file;
  const alt = asset?.fields?.description || asset?.fields?.title || "";

  return (
    <Image
      loader={contentfulImageLoader}
      src={file.url}
      alt={alt}
      width={file.details.image.width}
      height={file.details.image.height}
      loading="lazy"
      quality={quality}
      className={className}
      sizes={sizes}
    />
  );
}
