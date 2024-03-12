const path = require('path');

module.exports = {
  // ビルド後の出力ディレクトリの設定
  distDir: "out",
  //output: 'export', 

  // クライアントサイドでのWebpackの設定
  webpack5: true,

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './');
    return config;
  },
};
