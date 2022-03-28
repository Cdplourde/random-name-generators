export async function get() {
  return {
    headers: {
      'Content-Type': 'application/xml'
    },
    body: `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
          <loc>https://www.random-name-generators.com/</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
        <url>
          <loc>https://www.random-name-generators.com/g/first</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
        <url>
          <loc>https://www.random-name-generators.com/g/boy</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
        <url>
          <loc>https://www.random-name-generators.com/g/girl</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
        <url>
          <loc>https://www.random-name-generators.com/g/last</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
        <url>
          <loc>https://www.random-name-generators.com/g/unisex</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
        <url>
          <loc>https://www.random-name-generators.com/privacy-policy</loc>
          <lastmod>2022-03-28</lastmod>
          <changefreq>monthly</changefreq>
        </url>
      </urlset>
    `.trim()
  };
}