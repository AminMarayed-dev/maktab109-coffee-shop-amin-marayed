/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.melocoffee.com",
        port: "",
        pathname: "/wp-content/uploads/**/**/**",
      },
    ],
  },
};

export default nextConfig;
