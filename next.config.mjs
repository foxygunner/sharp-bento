/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newsroom.porsche.com",
        port: "",
        pathname: "/dam/**",
      },
    ],
  },
};

export default nextConfig;
