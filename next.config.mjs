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
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // logging: {
  //   fetches: {
  //     fullUrl: false,
  //   },
  // },
  experimental: {
    taint: true,
  },
}
export default nextConfig
