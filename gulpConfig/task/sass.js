module.exports = (gulp, { utils, config, plugins: { sass, nodeSass, rev, sourcemaps } }) => {
  sass.compiler = nodeSass
  gulp.task("sass", () => {
    if (config.dev) {
      return gulp.src(utils.getConfigPaht('sassDir'))
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(gulp.dest(utils.getOutput('sassDevOutput')));
    } else {
      return gulp.src(utils.getConfigPaht('sassDir'))
        .pipe(sourcemaps.init())
        .pipe(rev(config.version))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write(utils.getMapOutput('sassMap')))
        .pipe(gulp.dest(utils.getOutput('sassOutput')))
    }
  })
}
