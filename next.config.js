/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //default true
  images: {
    domains: ['avatars.githubusercontent.com', 'www.svgrepo.com'],
  },
};

module.exports = nextConfig;
