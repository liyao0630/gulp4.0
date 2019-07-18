module.exports = (gulp, { utils, plugins: { sourcemaps, babel, uglify, } }) => {
  gulp.task('js', () => {
    return gulp.src(utils.getConfigPaht('jsDir'))
      .pipe(sourcemaps.init())
      // .pipe(babel())
      .pipe(uglify())
      .pipe(sourcemaps.write(utils.getMapOutput('jsMap')))
      .pipe(gulp.dest(utils.getOutput('jsOutput')))
  })
}
