module.exports = (gulp, { utils, plugins: { rev } }) => {
  gulp.task('html', () => {
    return gulp.src(utils.getEntryPath('htmlDir'))
      .pipe(rev())
      .pipe(gulp.dest(utils.getOutput('htmlOutput')))
  })
}