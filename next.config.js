/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  env: {
    DISQUS_SHORT_NAME: 'thecommonlogic',
  }
}

module.exports = nextConfig
