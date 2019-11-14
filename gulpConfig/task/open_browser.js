module.exports = (gulp, { config, plugins: { open } }) => {
  gulp.task('open_browser', () => {
    return gulp.src(config.url)
      .pipe(open({
        uri: config.protocol + '//' + config.host + ':' + config.port + config.outputDir,
        // app: 'Google Chrome'
      }));
  })
}
