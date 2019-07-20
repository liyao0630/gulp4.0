module.exports = (gulp, { utils, plugins: { clean } }) => {

  gulp.task('clean', (done) => {
    const path = utils.getOutput('outputDirClean')
    if (utils.existsSync(path)) {
      return gulp.src(utils.getOutput('outputDirClean'), {
        read: false
      })
        .pipe(clean())
    } else {
      console.log(`${path}不存在`)
      done()
    }
  });
}
