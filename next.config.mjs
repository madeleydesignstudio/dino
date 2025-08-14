import { withPayload } from '@payloadcms/next/withPayload'

// Perform startup validation to ensure environment variables are correct
// import './src/lib/startup-validation.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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
  env: {
    // Ensure critical environment variables are available at build time
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    LOOPS_API_KEY: process.env.LOOPS_API_KEY,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    RESEND_NEWSLETTER_AUDIENCE_ID: process.env.RESEND_NEWSLETTER_AUDIENCE_ID,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
