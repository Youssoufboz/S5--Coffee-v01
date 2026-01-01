/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/S5--Coffee-v01',
  assetPrefix: '/S5--Coffee-v01/',
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
