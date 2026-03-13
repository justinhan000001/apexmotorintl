import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import createNextIntlPlugin from 'next-intl/plugin'

const currentFile = fileURLToPath(import.meta.url)
const currentDir = dirname(currentFile)
const i18nConfigPath = resolve(currentDir, './lib/i18n.ts')

const withNextIntl = createNextIntlPlugin(i18nConfigPath)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/en/bikes', destination: '/en/samurai-noir', permanent: true },
      { source: '/en/products', destination: '/en/samurai-noir', permanent: true },
      { source: '/en/products/samurai-noir', destination: '/en/samurai-noir', permanent: true },
      { source: '/en/products/skyleap', destination: '/en/skyleap', permanent: true },
      { source: '/en/products/:path*', destination: '/en/samurai-noir', permanent: true },
      { source: '/en/booking', destination: '/en/contact', permanent: true },
      { source: '/en/pricing', destination: '/en/contact', permanent: true },
      { source: '/en/diagnostics', destination: '/en/service', permanent: true },
      { source: '/en/training', destination: '/en/service', permanent: true },
      { source: '/en/transport', destination: '/en/service', permanent: true },
      { source: '/en/storage', destination: '/en/service', permanent: true },
      { source: '/en/services', destination: '/en/service', permanent: true },
    ]
  },
}

export default withNextIntl(nextConfig)
