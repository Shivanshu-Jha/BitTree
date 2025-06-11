/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [], // Allows images from any domain without restrictions
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Matches all hostnames
                pathname: '/**', // Matches all paths
            },
        ],
    },
};

export default nextConfig;
