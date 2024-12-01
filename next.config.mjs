import { withContentCollections } from "@content-collections/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default withContentCollections(nextConfig);
