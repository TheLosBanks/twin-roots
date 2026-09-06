import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Both apex and www are attached to the project, so without this they
      // each serve the full site and Google sees two copies of every page.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.twinrootspsychotherapy.com" }],
        destination: "https://twinrootspsychotherapy.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
