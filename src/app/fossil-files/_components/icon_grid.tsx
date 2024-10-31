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
  // Calculate padding needed for symmetry
  const totalIcons = icons.length;
  const rowSizes = {
    default: 3, // mobile
    md: 5, // tablet
    lg: 7, // desktop
  };

  // Calculate how many dummy elements we need to add for the last row to be complete
  const getFillerCount = (columnCount: number) => {
    const remainder = totalIcons % columnCount;
    return remainder === 0 ? 0 : columnCount - remainder;
  };

  // Create array of dummy elements for padding
  const getLargestFillerCount = Math.max(
    getFillerCount(rowSizes.default),
    getFillerCount(rowSizes.md),
    getFillerCount(rowSizes.lg)
  );

  const fillerArray = Array(getLargestFillerCount).fill(null);

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-center">
        {icons.map(({ src }, index) => (
          <div
            key={index}
            className="aspect-square bg-stone-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="w-full h-full rounded-2xl flex items-center justify-center">
              <img src={src} alt="" className="w-1/2 h-1/2" />
            </div>
          </div>
        ))}
        {/* Add invisible filler elements to maintain grid symmetry */}
        {fillerArray.map((_, index) => (
          <div key={`filler-${index}`} className="aspect-square invisible" />
        ))}
      </div>
    </div>
  );
}
