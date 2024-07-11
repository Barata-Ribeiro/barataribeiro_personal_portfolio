/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60
  },
  compiler: {
    removeConsole: true
  },
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  experimental: {
    optimizePackageImports: [
      "tailwindcss", "react-icons/fa", "react-icons/fa6", "react-icons/md"
    ]
  }
}

export default nextConfig
