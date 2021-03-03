const globalSassFiles = ["./src/scss/variables.scss"];

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  assetsDir: "static",

  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: globalSassFiles,
        })
        .end();
    });
  },
};
