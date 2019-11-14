module.exports = (gulp, { config, utils, plugins: { sourcemaps, ts, uglify } }) => {
  const tsProject = ts.createProject("tsconfig.json")

  gulp.task('ts', () => {
    return gulp.src(utils.getEntryPath('tsDir'))
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .pipe(uglify())
      .pipe(sourcemaps.write(utils.getMapOutput('tsMap')))
      .pipe(gulp.dest(utils.getOutput('tsOutput')))
  });
}

