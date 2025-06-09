/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dev-portfolio' : '',
  assetPrefix: isProd ? '/dev-portfolio/' : '',
};

export default nextConfig;