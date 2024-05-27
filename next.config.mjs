/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'img.clerk.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
