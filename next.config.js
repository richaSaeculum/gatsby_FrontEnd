/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  env: {
    DISQUS_SHORT_NAME: 'thecommonlogic',
    // PUBLIC_GOOGLE_ADSENSE: '',
    // PUBLIC_GOOGLE_ADSENSE: 'ca-pub-5674178816323888'
    PUBLIC_GOOGLE_ADSENSE: 'ca-pub-5674078816323888'

  }
}

module.exports = nextConfig
