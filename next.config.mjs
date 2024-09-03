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
      {
        protocol: "https",
        hostname: "api-marayedcoffee.liara.run",
        port: "",
        pathname: "/images/products/images/**",
      },
    ],
  },
};

export default nextConfig;
