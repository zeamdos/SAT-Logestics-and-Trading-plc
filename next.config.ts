import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',         // Static export — no server needed for deployment
  trailingSlash: true,      // Required for static hosting
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    unoptimized: true,      // Required when using output: 'export'
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
