const withNextIntl = require("next-intl/plugin")();

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

module.exports = () => {
  const plugins = [withPWA, withNextIntl];
  return plugins.reduce((acc, next) => next(acc), {
    pageExtensions: ["ts", "tsx"],
    // i18n: {
    //   locales: ["default", "en"],
    //   defaultLocale: "default",
    //   localeDetection: false,
    // },
    generateEtags: false,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    env: {
      PORT: process.env.PORT,
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    headers: async () => {
      return [
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
      ];
    },
    /**
     *
     * @param {import('webpack').Configuration} config
     * @returns {import('webpack').Configuration}
     */
    webpack: (config) => {
      config.plugins.push();
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      );
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: ["@svgr/webpack"],
        }
      );
      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;
      return config;
    },
  });
};
