module.exports = (gulp, { utils, plugins: { image } }) => {
  gulp.task('image_min', () => {
    return gulp.src([utils.getConfigPaht('imageDir')])
      /* .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        jpegoptim: true,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10
      })) */
      .pipe(gulp.dest(utils.getOutput('imageOutput')))
  })
}
