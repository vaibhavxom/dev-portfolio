/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? '/dev-portfolio' : '',
  assetPrefix: isProd ? '/dev-portfolio/' : '', // ✅ ensures correct paths for all static assets
  images: {
    unoptimized: true, // ✅ required for static HTML export
  },
  trailingSlash: true, // ✅ ensures static routing on GitHub Pages works correctly
    env: {
    NEXT_PUBLIC_JSONBIN_API_KEY: process.env.JSONBIN_API_KEY,
    NEXT_PUBLIC_JSONBIN_BIN_ID: process.env.JSONBIN_BIN_ID,
  },
};

module.exports = nextConfig;
