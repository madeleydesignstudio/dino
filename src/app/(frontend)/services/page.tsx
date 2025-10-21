import { ServerImage } from "@/components/universal/ServerImage";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function ServicesPage() {
  // Service images from your homepage studio-and-services section
  const serviceImages = [
    <ServerImage
      key="17"
      id={17}
      width={400}
      height={235}
      priority
      quality={100}
    />,
    <ServerImage
      key="22"
      id={22}
      width={400}
      height={235}
      priority
      quality={100}
    />,
    <ServerImage
      key="21"
      id={21}
      width={400}
      height={235}
      priority
      quality={100}
    />,
    <ServerImage
      key="20"
      id={20}
      width={400}
      height={235}
      priority
      quality={100}
    />,
    <ServerImage
      key="19"
      id={19}
      width={400}
      height={235}
      priority
      quality={100}
    />,
    <ServerImage
      key="18"
      id={18}
      width={400}
      height={235}
      priority
      quality={100}
    />,
  ];

  // Service labels matching your homepage
  const serviceLabels = [
    "Website Design",
    "Website Development",
    "Creative Design",
    "Agentic AI",
    "Product Design",
    "View All",
  ];

  return (
    <ServicePageClient
      serviceImages={serviceImages}
      serviceLabels={serviceLabels}
    />
  );
}
