const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE = 'true',
})

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  compress: 'gzip'
};

module.exports = withPlugins([optimizedImages], nextConfiguration,withBundleAnalyzer({}));
