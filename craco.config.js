const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 기존 resolve.plugins가 없으면 배열로 초기화
      if (!webpackConfig.resolve.plugins) {
        webpackConfig.resolve.plugins = [];
      }
      
      // tsconfig-paths-webpack-plugin 추가
      webpackConfig.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        })
      );
      
      return webpackConfig;
    },
  },
};


