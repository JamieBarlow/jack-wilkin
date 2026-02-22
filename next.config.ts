import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
    qualities: [25, 50, 75, 100],
    formats: ["image/avif", "image/webp"],
  },
  cacheComponents: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.contentful.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
