import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/policy", destination: "/privacy", permanent: true },
      { source: "/tos", destination: "/terms", permanent: true },
      { source: "/tech-stack", destination: "/process", permanent: true },
      { source: "/services/stripe-integration", destination: "/services/payment-gateway-integration", permanent: true },
      { source: "/work/saas-mvp-11-weeks", destination: "/work/multi-tenant-saas-mvp", permanent: true },
    ];
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
