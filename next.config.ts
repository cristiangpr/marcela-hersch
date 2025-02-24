import type { NextConfig } from 'next'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gqaejfxgcqezrgxciqit.supabase.co',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  },
  experimental: {
    serverActions: {
      timeout: 60000 // 60s timeout
    }
  }
}

export default nextConfig
