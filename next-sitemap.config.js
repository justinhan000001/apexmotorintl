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
    {
      href: 'https://apexmotorintl.com/zh',
      hreflang: 'zh',
    },
  ],
  transform: async (config, path) => {
    // Add alternate language links for each page
    const alternateRefs = [
      {
        href: `${config.siteUrl}/en${path}`,
        hreflang: 'en',
      },
      {
        href: `${config.siteUrl}/zh${path}`,
        hreflang: 'zh',
      },
    ]

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
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
    additionalSitemaps: [
      'https://apexmotorintl.com/sitemap.xml',
    ],
  },
}
