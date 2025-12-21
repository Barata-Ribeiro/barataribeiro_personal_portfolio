import type { NextConfig } from 'next';

const allowedDevOrigins = process.env.ALLOWED_DEV_ORIGINS?.split(',') ?? [];

const nextConfig: NextConfig = {
    reactStrictMode: true,
    skipTrailingSlashRedirect: true,
    allowedDevOrigins,
    images: {
        minimumCacheTTL: 31536000,
        qualities: [25, 50, 75, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    serverExternalPackages: ['postcss', 'sharp'],
    turbopack: {
        resolveAlias: {
            underscore: 'lodash',
        },
        resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    },
    reactCompiler: true,
    compiler: { removeConsole: true },
    experimental: {
        optimizePackageImports: ['radix-ui', 'clsx', 'tailwindcss'],
    },
};

export default nextConfig;
