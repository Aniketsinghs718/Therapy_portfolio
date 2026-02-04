/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
    unoptimized: true,
    minimumCacheTTL: 0,
  },
}

module.exports = nextConfig
