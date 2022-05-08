/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { externalDir: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.test.js?$/,
      loader: "ignore-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
