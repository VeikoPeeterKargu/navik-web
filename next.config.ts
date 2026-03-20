import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/navik',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
