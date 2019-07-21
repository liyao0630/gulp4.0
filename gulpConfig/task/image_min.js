module.exports = (gulp, { config, utils, plugins: { image } }) => {
  gulp.task('image_min', () => {
    return gulp.src([utils.getConfigPaht('imageDir')])
      .pipe(config.img ? image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        jpegoptim: true,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10
      }) : utils.continue())
      .pipe(gulp.dest(utils.getOutput('imageOutput')))
  })
}
