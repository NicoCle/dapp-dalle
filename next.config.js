/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    PROJECT_SECRET: process.env.PROJECT_SECRET,
    TOKEN_KEY: process.env.TOKEN_KEY,
  },
};
