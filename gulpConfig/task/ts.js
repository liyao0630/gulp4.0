module.exports = (gulp, { config, utils, plugins: { sourcemaps, ts, uglify } }) => {
  const tsProject = ts.createProject("tsconfig.json")

  gulp.task('ts', () => {
    return gulp.src(utils.getConfigPaht('tsDir'))
      .pipe(config.dev ? utils.continue() : sourcemaps.init())
      .pipe(tsProject())
      .pipe(config.dev ? utils.continue() : uglify())
      .pipe(config.dev ? utils.continue() : sourcemaps.write(config.tsMap))
      .pipe(config.dev ? gulp.dest(utils.getOutput('tsDevDir')) : gulp.dest(utils.getOutput('tsOutput')))
  });

}

