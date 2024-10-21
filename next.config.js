// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8080/:path*', // Proxy to Go backend
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  