/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://apexmotorintl.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: 'https://apexmotorintl.com/en',
      hreflang: 'en',
    },
  ],
  transform: async (siteConfig, path) => {
    const alternateRefs = [
      {
        href: `${siteConfig.siteUrl}/en${path}`,
        hreflang: 'en',
      },
    ]

    return {
      loc: path,
      changefreq: siteConfig.changefreq,
      priority: siteConfig.priority,
      lastmod: siteConfig.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://apexmotorintl.com/sitemap.xml'],
  },
}
