/** @type {import('next').NextConfig} */

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "missing";
const backendPort = process.env.NEXT_PUBLIC_BACKEND_PORT ?? "missing";
const backendProtocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL ?? "missing";

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
