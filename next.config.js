/** @type {import('next').NextConfig} */

const backendUrl = process.env.BACKEND_URL;
const backendPort = process.env.BACKEND_PORT;
const backendProtocol = process.env.BACKEND_PROTOCOL;

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
