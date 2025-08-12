/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.torob.com",
      },
      {
        protocol: "https",
        hostname: "mag.tazminyadak.com",
      },
    ],
  },
};

export default nextConfig;
