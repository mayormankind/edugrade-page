import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects(){
    return [
      {
        source: "/components",
        destination: '/',
        permanent: false,
      },
      {
        source: "/api",
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
