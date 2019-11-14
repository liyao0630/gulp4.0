module.exports = (gulp, { utils }) => {
  gulp.task("fontIcon", () => {
    return gulp.src(utils.getEntryPath('fontDir'))
      .pipe(gulp.dest(utils.getOutput('fontOutput')))
  })
}