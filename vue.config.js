const packageInfo = require("./package.json");

module.exports = {
  chainWebpack(webpackConfig) {
    webpackConfig.plugin("lab-env").use(require("webpack/lib/DefinePlugin"), [
      {
        LAB_VERSION: JSON.stringify(packageInfo.version),
        LAB_PATH: JSON.stringify(process.env.LAB_PATH),
        LAB_CONFIG: JSON.stringify(process.env.LAB_CONFIG)
      }
    ]);
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      }
    }
  }
};
