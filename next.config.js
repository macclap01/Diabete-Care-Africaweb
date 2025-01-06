const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Vérifiez que `config.optimization.splitChunks.cacheGroups.default` est défini
      if (config.optimization && config.optimization.splitChunks && config.optimization.splitChunks.cacheGroups && config.optimization.splitChunks.cacheGroups.default) {
        config.optimization.splitChunks.cacheGroups.default.minSize = 20000;
      }
    }
    return config;
  },
});
