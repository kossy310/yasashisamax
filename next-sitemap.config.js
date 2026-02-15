/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.yasashisa-max.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // 単一 sitemap.xml にまとめ、Google の取得を安定させる
  additionalPaths: async () => {
    const domain = process.env.MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY;
    if (!domain || !apiKey) {
      return [];
    }

    const baseUrl = `https://${domain}.microcms.io/api/v1`;
    const headers = { "X-MICROCMS-API-KEY": apiKey };

    const paths = [];

    try {
      const newsRes = await fetch(
        `${baseUrl}/news?limit=100&fields=id`,
        { headers }
      );
      if (newsRes.ok) {
        const news = await newsRes.json();
        for (const item of news.contents || []) {
          paths.push({
            loc: `/news/${item.id}`,
            changefreq: "weekly",
            priority: 0.7,
          });
        }
      }
    } catch (e) {
      console.warn("next-sitemap: failed to fetch news", e.message);
    }

    try {
      const worksRes = await fetch(
        `${baseUrl}/works?limit=100&fields=id`,
        { headers }
      );
      if (worksRes.ok) {
        const works = await worksRes.json();
        for (const item of works.contents || []) {
          paths.push({
            loc: `/works/${item.id}`,
            changefreq: "monthly",
            priority: 0.6,
          });
        }
      }
    } catch (e) {
      console.warn("next-sitemap: failed to fetch works", e.message);
    }

    return paths;
  },
};
