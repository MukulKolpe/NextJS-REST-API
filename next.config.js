/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: MONGODB_URI,
  },
};

module.exports = nextConfig;
