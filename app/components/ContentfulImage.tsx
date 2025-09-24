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
}: {
  asset?: ContentfulAsset;
  quality?: number;
  className?: string;
}) {
  if (!asset) return null;
  const file = asset?.fields?.file;
  const url = contentfulImageLoader({
    src: `https:${file.url}`,
    width: file.details.image.width,
    quality,
  });
  const alt = asset?.fields?.description || asset?.fields?.title || "";

  return (
    <Image
      src={url}
      alt={alt}
      width={file.details.image.width}
      height={file.details.image.height}
      loading="lazy"
      className={className}
    />
  );
}
