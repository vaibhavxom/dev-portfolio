  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/dev-portfolio',
    images: {
      unoptimized: true,
    },
  };

  module.exports = nextConfig;
