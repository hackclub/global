const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  i18n: {
    locales: ['en', 'es', 'fr', 'zh', 'kr', 'tr', 'hin', 'pl', 'el', 'ms', 'bn', 'ur' , 'th', 'de', 'vi'],
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
        domain: 'ms.hackclub.com',
        defaultLocale: 'ms',
        http: true
      },
      {
        domain: 'gr.hackclub.com',
        defaultLocale: 'el',
        http: true
      },
      {
        domain: 'ur.hackclub.com',
        defaultLocale: 'ur',
        http: true
      },
      {
        domain: 'bn.hackclub.com',
        defaultLocale: 'bn',
        http: true
      },
      {
        domain: 'jp.hackclub.com',
        defaultLocale: 'jp',
        http: true
      },
      {
        domain: 'thai.hackclub.com',
        defaultLocale: 'th',
        http: true
      },
      {
        domain: 'te.hackclub.com',
        defaultLocale: 'te',
        http: true
      },
      {
        domain: 'de.hackclub.com',
        defaultLocale: 'de',
        http: true
      },
      {
        domain: 'vi.hackclub.com',
        defaultLocale: 'vi',
      }
    ]
  }
})
