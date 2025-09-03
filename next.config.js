/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://otieu.com/4/9786651',
        permanent: false,
      },
    ]
  },
  // Enable static exports for better Vercel compatibility
  trailingSlash: false,
  // Optimize for production
  swcMinify: true,
  // Handle images
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig