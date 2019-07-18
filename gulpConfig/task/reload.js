module.exports = (gulp, { utils, plugins: { connect } }) => {
  gulp.task('reload', (done) => {
    gulp.src(utils.getConfigPaht('htmlDir')).pipe(connect.reload())
    done()
  })
}