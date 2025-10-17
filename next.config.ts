import type { NextConfig } from 'next';

const allowedDevOrigins = process.env.ALLOWED_DEV_ORIGINS?.split(',') ?? [];

const nextConfig: NextConfig = {
    reactStrictMode: true,
    allowedDevOrigins,
    images: {
        minimumCacheTTL: 31536000,
        qualities: [50, 75, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    compiler: { removeConsole: true },
    experimental: {
        reactCompiler: true,
        optimizePackageImports: ['tailwindcss'],
    },
};

export default nextConfig;
