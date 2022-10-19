// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'sr'],
    defaultLocale: 'en',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
