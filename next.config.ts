import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // generates static HTML into ./out — works with DigitalOcean Static Site
  trailingSlash: true, // avoids 404s on routes like /about/
};

export default nextConfig;
