const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  i18n: {
    locales: ['en', 'es', 'fr', 'zh', 'kr', 'tr', 'hin', 'pl', 'el'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'hackclub.es',
        defaultLocale: 'es',
        http: true
      },
      {
        domain: 'zh.hackclub.com',
        defaultLocale: 'zh',
        http: true
      },
      {
        domain: 'fr.hackclub.com',
        defaultLocale: 'fr',
        http: true
      },
      {
        domain: 'kr.hackclub.com',
        defaultLocale: 'kr',
        http: true
      },
      {
        domain: 'tr.hackclub.com',
        defaultLocale: 'tr',
        http: true
      },
      {
        domain: 'hin.hackclub.com',
        defaultLocale: 'hin',
        http: true
      },
      {
        domain: 'pl.hackclub.com',
        defaultLocale: 'pl',
        http: true
      },
      {
        domain: 'el.hackclub.com',
        defaultLocale: 'el',
        http: true
      }
    ]
  }
})
