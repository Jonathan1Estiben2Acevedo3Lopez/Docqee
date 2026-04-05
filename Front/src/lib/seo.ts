export type SeoConfig = {
  title: string;
  description: string;
  imagePath?: string;
  noIndex?: boolean;
  ogDescription?: string;
  ogTitle?: string;
  path?: string;
  type?: 'website' | 'article';
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function resolveSiteUrl(pathname: string) {
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://docqee.local';

  return new URL(pathname, origin).toString();
}

export function applySeo({
  title,
  description,
  imagePath = '/og-image.svg',
  noIndex = false,
  ogDescription,
  ogTitle,
  path = '/',
  type = 'website',
}: SeoConfig) {
  if (typeof document === 'undefined') {
    return;
  }

  const canonicalUrl = resolveSiteUrl(path);
  const imageUrl = resolveSiteUrl(imagePath);
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

  document.title = title;

  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', robots);
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', ogTitle ?? title);
  upsertMeta('name', 'twitter:description', ogDescription ?? description);
  upsertMeta('name', 'twitter:image', imageUrl);

  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:locale', 'es_CO');
  upsertMeta('property', 'og:site_name', 'Docqee');
  upsertMeta('property', 'og:title', ogTitle ?? title);
  upsertMeta('property', 'og:description', ogDescription ?? description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:image', imageUrl);
  upsertMeta(
    'property',
    'og:image:alt',
    'Vista editorial de Docqee con el mensaje de atención odontológica universitaria.',
  );

  upsertLink('canonical', canonicalUrl);
}
