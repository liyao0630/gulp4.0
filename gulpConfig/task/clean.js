module.exports = (gulp, { utils, plugins: { clean } }) => {
  gulp.task('clean', () => {
    return gulp.src(utils.getOutput('outputDirClean'), {
      read: false
    })
      .pipe(clean())
  });
}
