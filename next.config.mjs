/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/S5--Coffee-v01',
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
