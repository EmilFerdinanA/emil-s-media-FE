import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.*.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/v.1/:path*",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000"}/api/v.1/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
