module.exports = (gulp, { config, plugins: { connect } }) => {
  gulp.task('connect', (done) => {
    connect.server({
      host: config.host,
      port: config.port,
      root: config.BASE, // 服务器根目录
      livereload: true, //实时刷新
      middleware: function (connect, opt) { // 代理 配合http-proxy-middleware
        return config.proxys
      }
    })
    done()
  })
}
