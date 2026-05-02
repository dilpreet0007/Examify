module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the source-map-loader rule and exclude tensorflow packages
      const sourceMapLoader = webpackConfig.module.rules.find(
        (rule) => rule.loader && rule.loader.includes('source-map-loader')
      );

      if (sourceMapLoader) {
        sourceMapLoader.exclude = [
          ...(sourceMapLoader.exclude || []),
          /@tensorflow-models/,
        ];
      }

      return webpackConfig;
    },
  },
};
