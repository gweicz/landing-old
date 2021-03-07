const prod = process.env.NODE_ENV === 'production';

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  // basePath: '/gweicz-web',
  // assetPrefix: prod ? '/gweicz-web' : '',
};