import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields = [
    {
      loc: 'https://myeventizer.com/', // Absolute url
      lastmod: new Date().toISOString(),
      priority: 1,

    },
    {
      loc: 'https://myeventizer.com/term-of-use', // Absolute url
      lastmod: new Date().toISOString(),
      priority: 1,

    },
    {
        loc: 'https://myeventizer.com/term-of-use', // Absolute url
        lastmod: new Date().toISOString(),
        priority: 1,

      },
      {
        loc: 'https://myeventizer.com/corporate-event', // Absolute url
        lastmod: new Date().toISOString(),
        priority: 1,
      },
      {
        loc: 'https://myeventizer.com/corporate-event', // Absolute url
        lastmod: new Date().toISOString(),
        priority: 1,
      },
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}