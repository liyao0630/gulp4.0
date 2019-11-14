module.exports = (gulp, { utils }) => {
  gulp.task('browserify:watch', (done) => {
    gulp.watch(utils.getOutput('entryOutput'), gulp.series('reload'))
    gulp.watch(utils.getEntryPath('cssDir'), gulp.series('css', 'reload'))
    gulp.watch(utils.getEntryPath('sassDir'), gulp.series('sass', 'reload'))
    gulp.watch(utils.getEntryPath('imageDir'), gulp.series('image_min', 'reload'))
    gulp.watch(utils.getEntryPath('htmlDir'), gulp.series('html', 'reload'))
    done()
  })
}
