import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    skipTrailingSlashRedirect: true,
    images: {
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
            },
        ],
    },
    compiler: {
        removeConsole: true,
    },
    experimental: {
        reactCompiler: true,
        optimizePackageImports: [
            "tailwindcss", "react-icons/fa", "react-icons/fa6", "react-icons/md",
        ],
    },
}

export default nextConfig
