module.exports = (gulp, { config, utils, plugins: { image } }) => {
  gulp.task('image_min', () => {
  entry = config.sprite ? utils.getEntryPath('imageSpriteDir') : utils.getEntryPath('imageDir')
    return gulp.src(entry)
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
