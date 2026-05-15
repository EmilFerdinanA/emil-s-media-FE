import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/v.1/:path*",
          destination: `${process.env.API_URL || "http://localhost:4000"}/api/v.1/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
