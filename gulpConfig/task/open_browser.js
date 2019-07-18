module.exports = (gulp, { config, plugins: { open } }) => {
  gulp.task('open_browser', () => {
    return gulp.src(config.BASE)
      .pipe(open({
        uri: config.protocol + '//' + config.host + ':' + config.port,
        app: 'Google Chrome'
      }));
  })
}
