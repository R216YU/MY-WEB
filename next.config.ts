import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  /* SSG settings */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
