module.exports = (gulp, { utils }) => {
  gulp.task('copy_lib', () => {
    return gulp.src(utils.getEntryPath('libDir'))
      .pipe(gulp.dest(utils.getOutput('libOutput')))
  })
}
