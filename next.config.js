const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // This will allow Next.js to handle errors more gracefully during the build
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  async redirects() {
    return [
      {
        source: "/dashboard/page",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/startups/page",
        destination: "/startups",
        permanent: true,
      },
      // Add more redirects as needed
    ]
  },
}

module.exports = nextConfig

