import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.dev-0af.workers.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
