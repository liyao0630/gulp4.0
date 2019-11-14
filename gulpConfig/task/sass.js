module.exports = (gulp, { utils, config, plugins: { sass, nodeSass, rev, sourcemaps } }) => {
  sass.compiler = nodeSass
  gulp.task("sass", () => {
    return gulp.src(utils.getEntryPath('sassDir'))
      .pipe(sourcemaps.init())
      .pipe(rev(config.version))
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(sourcemaps.write(utils.getMapOutput('sassMap')))
      .pipe(gulp.dest(utils.getOutput('sassOutput')))
  })
}
