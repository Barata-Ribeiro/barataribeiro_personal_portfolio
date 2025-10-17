import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: true,
    },
    experimental: {
        reactCompiler: true,
        optimizePackageImports: ['tailwindcss'],
    },
};

export default nextConfig;
