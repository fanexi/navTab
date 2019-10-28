module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 新版本配置
        prependData: `@import "@/assets/style/common/variables.scss";`
      }
    }
  }
};
