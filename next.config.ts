// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sv',
        permanent: true, // 301-redirect för SEO
      }
    ];
  }
};

export default nextConfig;
