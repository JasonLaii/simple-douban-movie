// vue.config.js
module.exports = {
  devServer: {
    // port: 8080,
    // host: "127.0.0.1",
    proxy: {
      "/api": {
        target: "https://api.douban.com/v2",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  }
};