/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  basePath: '/dev-portfolio',
  assetPrefix: '/dev-portfolio',
};

module.exports = nextConfig;
