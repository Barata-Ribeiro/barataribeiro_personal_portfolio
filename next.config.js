/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
