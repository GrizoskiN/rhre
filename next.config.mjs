/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],

  },
};

export default nextConfig;
