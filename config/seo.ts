export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://jackschneble.com' : ''

export const defaultSEO = {
  title: 'Jack Schneble',
  description: 'Developer.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Jack Schneble',
    images: [
      {
        url: `${baseUrl}/static/images/logo.png`,
        alt: 'Jack Schneble',
      },
    ],
  },
  twitter: {
    handle: '@jschnebz',
    site: '@jschnebz',
    cardType: 'summary_large_image',
  },
}

interface IExtendSEO {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: IExtendSEO) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}