/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: true,
  },
  compress: true,
};

export default nextConfig;
