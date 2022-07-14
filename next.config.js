/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['svelte.dev', 'robohash.org', 'img.seadn.io'],
  },
}

module.exports = nextConfig
