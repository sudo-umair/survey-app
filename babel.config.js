module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@assets': './src/assets',
            '@common': './src/common',
            '@config': './src/config',
            '@components': './src/components',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@interfaces': './src/interfaces',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
