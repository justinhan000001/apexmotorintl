const withNextIntl = require('next-intl/plugin')(
  './lib/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now stable in Next.js 14, no need for experimental flag
  output: 'standalone',
  images: {
    unoptimized: true
  }
}

module.exports = withNextIntl(nextConfig)
