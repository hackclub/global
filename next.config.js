const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  i18n: {
    locales: ['en', 'es', 'zh'],
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
      }
    ]
  }
})
