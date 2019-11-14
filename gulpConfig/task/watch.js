module.exports = (gulp, { utils }) => {
  gulp.task('watch', (done) => {
    // gulp.watch(utils.getOutput('entryOutput'), gulp.series('reload'))
    gulp.watch(utils.getEntryPath('tsDir'), gulp.series('ts', 'reload'))
    gulp.watch(utils.getEntryPath('sassDir'), gulp.series('sass', 'image_min', 'reload'))
    gulp.watch(utils.getEntryPath('jsDir'), gulp.series('js', 'reload'))
    gulp.watch(utils.getEntryPath('cssDir'), gulp.series('css', 'image_min', 'reload'))
    gulp.watch(utils.getEntryPath('imageDir'), gulp.series('image_min', 'css', 'sass', 'reload'))
    gulp.watch(utils.getEntryPath('htmlDir'), gulp.series('html', 'reload'))
    done()
  })
}
