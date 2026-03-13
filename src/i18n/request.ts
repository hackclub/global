import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import locales from '@@/src/generated/locales.json';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : 'en';

  const enMessages = (await import(`@@/locale/en`)).default;
  const localeMessages = locale !== 'en'
    ? (await import(`@@/locale/${locale}`)).default
    : {};

  return {
    locale,
    messages: deepMerge(enMessages, localeMessages),
  };
});

function deepMerge(base: any, override: any): any {
  const result = { ...base };
  for (const key in override) {
    if (typeof override[key] === 'object' && !Array.isArray(override[key])) {
      result[key] = deepMerge(base[key] ?? {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}