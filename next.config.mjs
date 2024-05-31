/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  experimental: {
    taint: true,
  },
  webpack: (config, {dev, isServer}) => {
    if (!dev) {
      config.devtool = isServer ? false : 'source-map'
      console.log(`Setting devtool to ${config.devtool}`)
    }
    return config
  },
}

export default bundleAnalyzer(nextConfig)
