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
}

export default bundleAnalyzer(nextConfig)
