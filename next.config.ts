import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  outputFileTracingRoot: process.cwd(),
  experimental: {},
  // ponytail: /library is the one canonical catalogue. /psalms and /released
  // were identical lists; /unreleased was empty. 301 them all to /library.
  async redirects() {
    return ["/psalms", "/released", "/unreleased"].map((source) => ({
      source,
      destination: "/library",
      permanent: true
    }));
  }
};

export default nextConfig;
