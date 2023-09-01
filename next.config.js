/** @type {import('next').NextConfig} */

const backendUrl = process.env.BACKEND_URL ?? "localhost";
const backendPort = process.env.BACKEND_PORT ?? 3001;
const backendProtocol = process.env.BACKEND_PROTOCOL ?? "http";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendProtocol}://${backendUrl}:${backendPort}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
