/** @type {import('next').NextConfig} */

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL_INTERNAL ?? "missing";
const backendPort = process.env.NEXT_PUBLIC_BACKEND_PORT_INTERNAL ?? "missing";
const backendProtocol =
  process.env.NEXT_PUBLIC_BACKEND_PROTOCOL_INTERNAL ?? "missing";

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
