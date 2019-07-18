module.exports = (gulp, { utils, plugins: { rev } }) => {
  gulp.task('html', () => {
    return gulp.src(utils.getConfigPaht('htmlDir'))
      .pipe(rev())
      .pipe(gulp.dest(utils.getOutput('htmlOutput')))
  })
}