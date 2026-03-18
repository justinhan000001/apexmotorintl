import { resolve } from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'

const i18nConfigPath = resolve(process.cwd(), 'lib/i18n.ts')

const withNextIntl = createNextIntlPlugin(i18nConfigPath)
const supportedLocales = ['en']
const legacyRedirects = [
  ['/bikes', '/samurai-noir'],
  ['/products', '/samurai-noir'],
  ['/products/samurai-noir', '/samurai-noir'],
  ['/products/skyleap', '/skyleap'],
  ['/products/:path*', '/samurai-noir'],
  ['/booking', '/contact'],
  ['/pricing', '/contact'],
  ['/diagnostics', '/service'],
  ['/training', '/service'],
  ['/transport', '/service'],
  ['/storage', '/service'],
  ['/services', '/service'],
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return supportedLocales.flatMap((locale) =>
      legacyRedirects.map(([source, destination]) => ({
        source: `/${locale}${source}`,
        destination: `/${locale}${destination}`,
        permanent: true,
      })),
    )
  },
}

export default withNextIntl(nextConfig)
