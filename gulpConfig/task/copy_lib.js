module.exports = (gulp, { utils }) => {
  gulp.task('copy_lib', () => {
    return gulp.src(utils.getConfigPaht('libDir'))
      .pipe(gulp.dest(utils.getOutput('libOutput')))
  })
}
