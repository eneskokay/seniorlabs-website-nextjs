import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: [
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-brands-svg-icons",
    "@fortawesome/react-fontawesome",
  ],
};

export default nextConfig;
