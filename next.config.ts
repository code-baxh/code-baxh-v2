import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow tunnel hosts during `next dev` (fixes cross-origin dev client issues)
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok.app", "*.ngrok.io"],
  // Don't advertise the stack in response headers.
  poweredByHeader: false,
};

export default nextConfig;
