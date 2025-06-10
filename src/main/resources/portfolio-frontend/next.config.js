/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/dev-portfolio' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;