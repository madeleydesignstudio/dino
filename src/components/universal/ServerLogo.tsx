import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";
import Image from "next/image";

interface ServerLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  id?: number;
}

export async function ServerLogo({
  className,
  width,
  height,
  priority = false,
  id = 6,
}: ServerLogoProps) {
  try {
    const payload = await getPayload({ config });

    const logo = (await payload.findByID({
      collection: "media",
      id: id,
      depth: 6,
    })) as Media;

    if (!logo) {
      return <div className={className}>Logo not found</div>;
    }

    return (
      <Image
        src={logo.url!}
        alt={logo.alt || "Logo"}
        width={width || logo.width!}
        height={height || logo.height!}
        priority={priority}
        className={className}
        quality={95}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  } catch (error) {
    console.error("Error fetching logo:", error);
    return <div className={className}>Logo unavailable</div>;
  }
}
