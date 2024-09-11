# Hack Club Global Websites

The goal of this project is to enable the creation of simplified versions of our Hack Club site that are translated into global languages. These sites should require practically no maintenance and be very brief. An example is [`gr.hackclub.com`](https://gr.hackclub.com).

This site uses Next.js' internationalization and middleware features. MDX is used for content and Theme UI for styling.

## Sites

- [hackclub.es](https://hackclub.es)
- [bn.hackclub.com](https://bn.hackclub.com)
- [fr.hackclub.com](https://fr.hackclub.com)
- [zh.hackclub.com](https://zh.hackclub.com)
- [kr.hackclub.com](https://kr.hackclub.com)
- [tr.hackclub.com](https://tr.hackclub.com)
- [hin.hackclub.com](https://hin.hackclub.com)
- [pl.hackclub.com](https://pl.hackclub.com)
- [gr.hackclub.com](https://gr.hackclub.com)
- [ms.hackclub.com](https://ms.hackclub.com)
- [ur.hackclub.com](https://ur.hackclub.com)
- [ja.hackclub.com](https://ja.hackclub.com)
- [thai.hackclub.com](https://thai.hackclub.com)
- [rw.hackclub.com](https://rw.hackclub.com)
- [it.hackclub.com](https://it.hackclub.com)
- [id.hackclub.com](https://id.hackclub.com)

## Adding a Site

1. Create a new MDX file in the `pages/copy` directory. The name of the file should be the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code for the language you intend to write the site in. For example, if I was adding a Portuguese site I would create a `pages/copy/pt.mdx` file.

2. Add content to the MDX file. Base this off of the content on the Spanish site (view it at [`pages/copy/es.mdx`](/pages/copy/es.mdx)). It should contain: a headline such as "By the students, for the students", a sentence long description of Hack Club and then a large button pointing to the English site.

3. Edit the locales field in `next.config.js` to include the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code of your language.

4. Add your domain to the domains field in `next.config.js` following the format below. Unless we have acquired a special domain for the site you are adding, use a `.hackclub.com` subdomain.
    ```javascript
    {
      domain: 'ja.hackclub.com',
      defaultLocale: 'ja',
      http: true
    }
    ```

    a. If you're using a `.hackclub.com` subdomain, submit a PR to [`hackclub/dns`](https://github.com/hackclub/dns) to add your `.hackclub.com` subdomain. Add a record to `hackclub.yaml` in the following format:
    
    ```yaml
    SUBDOMAIN_NAME:
      - ttl: 1
        type: CNAME
        value: cname.vercel-dns.com.
    ```

6. Make a PR to this repo! The maintainers will support you in setting up the domain for hosting.

**Reach out in `#hq` on Slack if you need any support. Thank you for your help!**

