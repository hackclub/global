<p align="center"><img width="192" alt="Hack Club logo" src="https://assets.hackclub.com/flag-orpheus-top.svg"></p>
<h1 align="center">Hack Club Global</h1>

Localized & minimalized version of [hackclub.com](https://hackclub.com)'s home page.

---

## Contributing

### Quick Start

1. Download the code to your computer:

   ```bash
   git clone https://github.com/hackclub/global && cd global
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start running the website on your computer:

   ```bash
   bun run dev
   ```

4. Open up your web browser and go to [localhost:3000](http://localhost:3000)

5. To test your locale, go to `localhost:3000/[xx]`, replacing `[xx]` with the locale code (e.g. `ee` for Estonian).

### Adding a Locale

1. Go to the `locale/` directory, copy `en.ts` and rename it to your locale code (e.g. `fr.ts` for French). Follow the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) standard for locale codes.

2. Test your changes!

3. Submit a PR to [`hackclub/dns`](https://github.com/hackclub/dns) to add your `.hackclub.com` subdomain. Add a record to `hackclub.com.yaml` in the following format:

   ```yaml
   xx.hackclub.com:
     - ttl: 300
       type: CNAME
       value: a05569dabb46ea5b.vercel-dns-016.com.
   ```

4. Once the DNS PR is merged, submit a PR to this repository with your locale/changes! Locales.json is generated automatically, so you don't need to worry about that.

## License

Code under MIT License, assets may not be re-used or re-distributed.
