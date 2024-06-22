// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.petaracorp.com',
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [], // Exclude specific pages if needed
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    additionalSitemaps: []
  }
};