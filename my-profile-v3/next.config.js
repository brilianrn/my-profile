const withNextIntl = require("next-intl/plugin")();
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
});

module.exports = () => {
  const plugins = [withPWA, withNextIntl];
  return plugins.reduce((acc, next) => next(acc), {
    pageExtensions: ["ts", "tsx"],
    // i18n: { ... } // ❌ Jangan aktifkan jika pakai App Router
    generateEtags: false,
    poweredByHeader: false,
    reactStrictMode: true,
    env: {
      PORT: process.env.PORT,
    },
    headers: async () => [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' http://localhost:4003/`,
          },
        ],
      },
    ],
    /**
     *
     * @param {import('webpack').Configuration} config
     * @returns {import('webpack').Configuration}
     */
    webpack: (config) => {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      );
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
          use: ["@svgr/webpack"],
        }
      );
      fileLoaderRule.exclude = /\.svg$/i;
      return config;
    },
  });
};
