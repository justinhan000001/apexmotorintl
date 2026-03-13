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
}

export default withNextIntl(nextConfig)
