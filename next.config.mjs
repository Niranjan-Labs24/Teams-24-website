/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [80, 90],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

}

export default nextConfig
