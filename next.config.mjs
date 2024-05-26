/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'img.clerk.com'],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
