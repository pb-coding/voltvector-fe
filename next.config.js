/** @type {import('next').NextConfig} */

const backendProtocol = process.env.BACKEND_PROTOCOL ?? "missing";
const backendUrl = process.env.BACKEND_URL ?? "missing";
const backendPort = process.env.BACKEND_PORT ?? "missing";

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
