const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  i18n: {
    locales: [
      'az',
      'bn',
      'de',
      'el',
      'en',
      'es',
      'fa',
      'fr',
      'hi',
      'id',
      'it',
      'ja',
      'kr',
      'ms',
      'nl',
      'pa',
      'pl',
      'ru',
      'rw',
      'th',
      'tr',
      'uk',
      'ur',
      'vi',
      'zh'
    ],
    defaultLocale: 'en',
    domains: [
            {
        domain: 'az.hackclub.com',
        defaultLocale: 'az',
        http: true
      },
      {
        domain: 'bn.hackclub.com',
        defaultLocale: 'bn',
        http: true
      },
      {
        domain: 'de.hackclub.com',
        defaultLocale: 'de',
        http: true
      },
      {
        domain: 'el.hackclub.com',
        defaultLocale: 'el',
        http: true
      },
      {
        domain: 'en.hackclub.com',
        defaultLocale: 'en',
        http: true
      },
      {
        domain: 'es.hackclub.com',
        defaultLocale: 'es',
        http: true
      },
      {
        domain: 'fa.hackclub.com',
        defaultLocale: 'fa',
        http: true
      },
      {
        domain: 'fr.hackclub.com',
        defaultLocale: 'fr',
        http: true
      },
      {
        domain: 'hi.hackclub.com',
        defaultLocale: 'hi',
        http: true
      },
      {
        domain: 'id.hackclub.com',
        defaultLocale: 'id',
        http: true
      },
      {
        domain: 'it.hackclub.com',
        defaultLocale: 'it',
        http: true
      },
      {
        domain: 'ja.hackclub.com',
        defaultLocale: 'ja',
        http: true
      },
      {
        domain: 'kr.hackclub.com',
        defaultLocale: 'kr',
        http: true
      },
      {
        domain: 'ms.hackclub.com',
        defaultLocale: 'ms',
        http: true
      },
      {
        domain: 'nl.hackclub.com',
        defaultLocale: 'nl',
        http: true
      },
      {
        domain: 'pa.hackclub.com',
        defaultLocale: 'pa',
        http: true
      },
      {
        domain: 'pl.hackclub.com',
        defaultLocale: 'pl',
        http: true
      },
      {
        domain: 'ru.hackclub.com',
        defaultLocale: 'ru',
        http: true
      },
      {
        domain: 'rw.hackclub.com',
        defaultLocale: 'rw',
        http: true
      },
      {
        domain: 'th.hackclub.com',
        defaultLocale: 'th',
        http: true
      },
      {
        domain: 'tr.hackclub.com',
        defaultLocale: 'tr',
        http: true
      },
      {
        domain: 'uk.hackclub.com',
        defaultLocale: 'uk',
        http: true
      },
      {
        domain: 'ur.hackclub.com',
        defaultLocale: 'ur',
        http: true
      },
      {
        domain: 'vi.hackclub.com',
        defaultLocale: 'vi',
        http: true
      },
      {
        domain: 'zh.hackclub.com',
        defaultLocale: 'zh',
        http: true
      }
    ]
  }
})
