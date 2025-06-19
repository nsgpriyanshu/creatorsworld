/** @type {import('next').NextConfig} */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : ''

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: supabaseUrl
      ? [
          {
            protocol: 'https',
            hostname: supabaseUrl,
            port: '',
            pathname: '/**',
          },
        ]
      : [],
  },
}

export default nextConfig
