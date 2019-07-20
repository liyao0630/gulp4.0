module.exports = (gulp, { utils }) => {
  gulp.task('watch', (done) => {
    gulp.watch([utils.getConfigPaht('htmlDir'), utils.getConfigPaht('imageDir'), utils.getConfigPaht('cssDir'), utils.getConfigPaht('jsDir')], gulp.series('reload'))
    gulp.watch(utils.getConfigPaht('sassDir'), gulp.series('sass', 'reload'))
    gulp.watch(utils.getConfigPaht('tsDir'), gulp.series('ts', 'reload'))
    done()
  })
}
