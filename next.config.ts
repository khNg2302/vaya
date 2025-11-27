import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Incoming request path
        destination: 'http://localhost:3000/api/:path*', // Destination path (your backend API)
      },
      // You can add more rewrite rules here
    ];
  },
};

export default nextConfig;
