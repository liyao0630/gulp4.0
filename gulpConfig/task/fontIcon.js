module.exports = (gulp, { utils }) => {
  gulp.task("fontIcon", () => {
    return gulp.src(utils.getConfigPaht('fontDir'))
      .pipe(gulp.dest(utils.getOutput('fontOutput')))
  })
}