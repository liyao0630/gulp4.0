module.exports = (gulp, { utils, plugins: { connect } }) => {
  gulp.task('reload', (done) => {
    gulp.src(utils.getEntryPath('htmlDir')).pipe(connect.reload())
    done()
  })
}