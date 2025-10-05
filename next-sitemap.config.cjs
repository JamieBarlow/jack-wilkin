// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://jfwoxfordcounselling.co.uk", // Your website's URL
  generateRobotsTxt: true, // (Optional) Generates a robots.txt file
  sitemapSize: 7000,
  sourceDir: "./.next",
  output: "./public",
};
