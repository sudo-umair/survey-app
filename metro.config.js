const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'), // Add any other asset extensions you may use
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'], // Add any other source extensions you may use
      extraNodeModules: {
        '@assets': `${__dirname}/src/assets`,
        '@common': `${__dirname}/src/common`,
        '@config': `${__dirname}/src/config`,
        '@components': `${__dirname}/src/components`,
        '@helpers': `${__dirname}/src/helpers`,
        '@hooks': `${__dirname}/src/hooks`,
        '@interfaces': `${__dirname}/src/interfaces`,
        '@navigation': `${__dirname}/src/navigation`,
        '@services': `${__dirname}/src/services`,
        '@redux': `${__dirname}/src/redux`,
        '@screens': `${__dirname}/src/screens`,
        '@utils': `${__dirname}/src/utils`,
      },
    },
  };
})();
