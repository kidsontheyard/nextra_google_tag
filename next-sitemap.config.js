/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 *
 */
module.exports = {
  siteUrl: process.env.SITE_BASE_URL || "https://nextra.kidsontheyard.dev",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "AugustBot",
        disallow: ["/"],
      },
      {
        userAgent: "Barkrowler",
        disallow: ["/"],
      },
      {
        userAgent: "BLEXBot",
        disallow: ["/"],
      },
      {
        userAgent: "BUbiNG",
        disallow: ["/"],
      },
      {
        userAgent: "Bytespider",
        disallow: ["/"],
      },
      {
        userAgent: "Claritybot",
        disallow: ["/"],
      },
      {
        userAgent: "Clark-Crawler2",
        disallow: ["/"],
      },
      {
        userAgent: "ContextAd",
        disallow: ["/"],
      },
      {
        userAgent: "DataForSeoBot",
        disallow: ["/"],
      },
      {
        userAgent: "discobot",
        disallow: ["/"],
      },
      {
        userAgent: "Exabot",
        disallow: ["/"],
      },
      {
        userAgent: "Ezooms",
        disallow: ["/"],
      },
      {
        userAgent: "FunWebProducts",
        disallow: ["/"],
      },
      {
        userAgent: "Gigabot",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent+1.0",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent+1.0",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent+2.0",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent+2.0",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent+3.0",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent+3.0",
        disallow: ["/"],
      },
      {
        userAgent: "iisbot",
        disallow: ["/"],
      },
      {
        userAgent: "Linguee",
        disallow: ["/"],
      },
      {
        userAgent: "Linguee Bot",
        disallow: ["/"],
      },
      {
        userAgent: "ltx71",
        disallow: ["/"],
      },
      {
        userAgent: "MLBot",
        disallow: ["/"],
      },
      {
        userAgent: "oBot",
        disallow: ["/"],
      },
      {
        userAgent: "PetalBot",
        disallow: ["/"],
      },
      {
        userAgent: "proximic",
        disallow: ["/"],
      },
      {
        userAgent: "SearQuBot",
        disallow: ["/"],
      },
      {
        userAgent: "Seekport Crawler",
        disallow: ["/"],
      },
      {
        userAgent: "serpstatbot",
        disallow: ["/"],
      },
      {
        userAgent: "Seznam screenshot-generator",
        disallow: ["/"],
      },
      {
        userAgent: "SeznamBot",
        disallow: ["/"],
      },
      {
        userAgent: "Snapbot",
        disallow: ["/"],
      },
      {
        userAgent: "Sogou",
        disallow: ["/"],
      },
      {
        userAgent: "spbot",
        disallow: ["/"],
      },
      {
        userAgent: "Speedy",
        disallow: ["/"],
      },
      {
        userAgent: "Spinn3r",
        disallow: ["/"],
      },
      {
        userAgent: "SuperPagesBot",
        disallow: ["/"],
      },
      {
        userAgent: "SuperPagesUrlVerifyBot",
        disallow: ["/"],
      },
      {
        userAgent: "TSMbot",
        disallow: ["/"],
      },
      {
        userAgent: "TwengaBot",
        disallow: ["/"],
      },
      {
        userAgent: "TwengaBot-Discover",
        disallow: ["/"],
      },
      {
        userAgent: "Uptimebot",
        disallow: ["/"],
      },
      {
        userAgent: "vebidoobot",
        disallow: ["/"],
      },
      {
        userAgent: "VoilaBot",
        disallow: ["/"],
      },
      {
        userAgent: "Y!J-BRW",
        disallow: ["/"],
      },
      {
        userAgent: "YaCy",
        disallow: ["/"],
      },
      {
        userAgent: "Yandex",
        disallow: ["/"],
      },
      {
        userAgent: "YandexBot",
        disallow: ["/"],
      },
      {
        userAgent: "YandexFavicons",
        disallow: ["/"],
      },
      {
        userAgent: "YandexImages",
        disallow: ["/"],
      },
      {
        userAgent: "Yeti",
        disallow: ["/"],
      },
      {
        userAgent: "Yisouspider",
        disallow: ["/"],
      },
      {
        userAgent: "YodaoBot",
        disallow: ["/"],
      },
      {
        userAgent: "YoudaoBot",
        disallow: ["/"],
      },
      {
        userAgent: "YPBot",
        disallow: ["/"],
      },
      {
        userAgent: "ZoomSpider",
        disallow: ["/"],
      },
      {
        userAgent: "AugustBot",
        disallow: ["/"],
      },
      {
        userAgent: "Applebot",
        disallow: ["/"],
      },
      {
        userAgent: "baiduspider",
        disallow: ["/"],
      },
      {
        userAgent: "Barkrowler",
        disallow: ["/"],
      },
      {
        userAgent: "BLEXBot",
        disallow: ["/"],
      },
      {
        userAgent: "BUbiNG",
        disallow: ["/"],
      },
      {
        userAgent: "Claritybot",
        disallow: ["/"],
      },
      {
        userAgent: "Clark-Crawler2",
        disallow: ["/"],
      },
      {
        userAgent: "ContextAd",
        disallow: ["/"],
      },
      {
        userAgent: "discobot",
        disallow: ["/"],
      },
      {
        userAgent: "Exabot",
        disallow: ["/"],
      },
      {
        userAgent: "Ezooms",
        disallow: ["/"],
      },
      {
        userAgent: "FunWebProducts",
        disallow: ["/"],
      },
      {
        userAgent: "Gigabot",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent+1.0",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent+1.0",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent+2.0",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent+2.0",
        disallow: ["/"],
      },
      {
        userAgent: "gomezagent+3.0",
        disallow: ["/"],
      },
      {
        userAgent: "GomezAgent+3.0",
        disallow: ["/"],
      },
      {
        userAgent: "iisbot",
        disallow: ["/"],
      },
      {
        userAgent: "Linguee",
        disallow: ["/"],
      },
      {
        userAgent: "Linguee Bot",
        disallow: ["/"],
      },
      {
        userAgent: "ltx71",
        disallow: ["/"],
      },
      {
        userAgent: "MLBot",
        disallow: ["/"],
      },
      {
        userAgent: "oBot",
        disallow: ["/"],
      },
      {
        userAgent: "proximic",
        disallow: ["/"],
      },
      {
        userAgent: "SearQuBot",
        disallow: ["/"],
      },
      {
        userAgent: "Seekport Crawler",
        disallow: ["/"],
      },
      {
        userAgent: "serpstatbot",
        disallow: ["/"],
      },
      {
        userAgent: "Seznam screenshot-generator",
        disallow: ["/"],
      },
      {
        userAgent: "SeznamBot",
        disallow: ["/"],
      },
      {
        userAgent: "Snapbot",
        disallow: ["/"],
      },
      {
        userAgent: "Sogou",
        disallow: ["/"],
      },
      {
        userAgent: "spbot",
        disallow: ["/"],
      },
      {
        userAgent: "Speedy",
        disallow: ["/"],
      },
      {
        userAgent: "Spinn3r",
        disallow: ["/"],
      },
      {
        userAgent: "SuperPagesBot",
        disallow: ["/"],
      },
      {
        userAgent: "SuperPagesUrlVerifyBot",
        disallow: ["/"],
      },
      {
        userAgent: "TwengaBot",
        disallow: ["/"],
      },
      {
        userAgent: "TwengaBot-Discover",
        disallow: ["/"],
      },
      {
        userAgent: "Uptimebot",
        disallow: ["/"],
      },
      {
        userAgent: "vebidoobot",
        disallow: ["/"],
      },
      {
        userAgent: "VoilaBot",
        disallow: ["/"],
      },
      {
        userAgent: "Y!J-BRW",
        disallow: ["/"],
      },
      {
        userAgent: "Yandex",
        disallow: ["/"],
      },
      {
        userAgent: "YandexBot",
        disallow: ["/"],
      },
      {
        userAgent: "YandexFavicons",
        disallow: ["/"],
      },
      {
        userAgent: "YandexImages",
        disallow: ["/"],
      },
      {
        userAgent: "Yeti",
        disallow: ["/"],
      },
      {
        userAgent: "YodaoBot",
        disallow: ["/"],
      },
      {
        userAgent: "YoudaoBot",
        disallow: ["/"],
      },
      {
        userAgent: "YPBot",
        disallow: ["/"],
      },
      {
        userAgent: "ZoomSpider",
        disallow: ["/"],
      },
    ],
    additionalSitemaps: [],
  },
};
