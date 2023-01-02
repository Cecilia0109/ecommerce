/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  // compiler: {
  //   reactRemoveProperties: true,
  // },
}

module.exports = nextConfig