import { withContentCollections } from "@content-collections/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "kokonutui.com",
      },
      {
        protocol: "https",
        hostname: "www.kokonutui.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default withContentCollections(nextConfig);
