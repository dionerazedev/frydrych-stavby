import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [75, 80, 82, 88],
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
