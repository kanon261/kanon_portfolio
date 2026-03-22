/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kanon261.github.io' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
}

module.exports = nextConfig
