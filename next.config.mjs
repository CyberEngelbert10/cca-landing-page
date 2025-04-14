/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize for Cloudflare Pages deployment
  swcMinify: true,
  images: {
    unoptimized: true, // Cloudflare Pages does not support Image Optimization API yet
  },
  assetPrefix: 'https://copperbeltchessacademy.com',
  basePath: '', // No additional base path needed for the root domain
};

export default nextConfig;
