/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Cloudflare Pages does not support Image Optimization API yet
  },
  assetPrefix: 'https://copperbeltchessacademy.com',
  basePath: '', // No additional base path needed for the root domain
  output: 'export', // Enable static export for Cloudflare Pages
};

export const runtime = "edge";

export default nextConfig;
