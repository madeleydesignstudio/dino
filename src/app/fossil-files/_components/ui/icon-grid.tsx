import { useMemo } from "react";

const icons = [
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/63ed91102c07a790c287d1f4_Postmark%20Logo.svg?updatedAt=1730381315187",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/resend-icon-black.svg?updatedAt=1730381312753",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/supabase-logo-DCC676FFE2-seeklogo.com.png?updatedAt=1730381312559",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/Shopify.webp?updatedAt=1730381313249",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/remix-letter-light.png?updatedAt=1730381312374",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/LangChain-Logo-min.png?updatedAt=1730381310827",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/logo-vercel.svg?updatedAt=1730381310760",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/langflow_logo.jpeg?updatedAt=1730381309780",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/498440.webp?updatedAt=1730381310363",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/apple-touch-icon.png?updatedAt=1730381310245",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/netlify.svg?updatedAt=1730381310410",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/next-js.svg?updatedAt=1730381310519",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/firecrawl_logo.png?updatedAt=1730381309739",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/astro-icon-light-gradient%20copy.svg?updatedAt=1730381310133",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/active-campaign.svg?updatedAt=1730381310017",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/contentful.svg?updatedAt=1730381288780",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/6609e72483b3cbc5f7631d49_Payload-Logo.svg?updatedAt=1730381289103",
  },
  {
    src: "https://ik.imagekit.io/danielcmadeley/dino/apple-icon-180x180.png?updatedAt=1730381288480",
  },
];

export default function IconGrid() {
  const shuffledIcons = useMemo(() => {
    // Create a copy of the icons array to avoid mutating the original
    const iconsCopy = [...icons];
    // Fisher-Yates shuffle algorithm
    for (let i = iconsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [iconsCopy[i], iconsCopy[j]] = [iconsCopy[j], iconsCopy[i]];
    }
    return iconsCopy;
  }, []); // Empty dependency array means this only runs once when component mounts

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-center">
        {shuffledIcons.map(({ src }, index) => (
          <div
            key={index}
            className="aspect-square bg-stone-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="w-full h-full rounded-2xl flex items-center justify-center">
              <img src={src} alt="" className="w-1/2 h-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
