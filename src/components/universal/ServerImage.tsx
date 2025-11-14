import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";
import Image from "next/image";

interface ServerImageProps {
  id: number;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

export async function ServerImage({
  id,
  className,
  width,
  height,
  priority = false,
  quality = 95,
  sizes,
  fill = false,
  style,
}: ServerImageProps) {
  try {
    const payload = await getPayload({ config });

    const image = (await payload.findByID({
      collection: "media",
      id: id,
      depth: 2,
    })) as Media;

    if (!image) {
      return <div className={className}>Image not found</div>;
    }

    const imageProps = {
      src: image.url!,
      alt: image.alt || "",
      priority,
      className,
      quality,
      sizes,
      style,
      ...(fill
        ? { fill: true }
        : {
            width: width || image.width!,
            height: height || image.height!,
          }),
    };

    return <Image {...imageProps} />;
  } catch (error) {
    console.error(`Error fetching image with ID ${id}:`, error);
    return <div className={className}>Image unavailable</div>;
  }
}
