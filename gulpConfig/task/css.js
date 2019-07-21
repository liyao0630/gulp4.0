module.exports = (gulp, { utils, config, plugins: { sourcemaps, rev, spriter, pxtorem, cleanCSS } }) => {
  gulp.task('css', () => {
    return gulp.src(utils.getConfigPaht('cssDir'))
      .pipe(sourcemaps.init())
      .pipe(rev())
      .pipe(config.sprite ? spriter({
        'spriteSheet': utils.getOutput('spriteCssOut')/* config.spriteCssOut */,
        'pathToSpriteSheetFromCSS': config.spriteCssPathOut,
        'filter': {
          parttner: '\\?v=',  // 筛选
          attributes: 'i' // 非必须，(i,g,m)
        },
        spriteSheetBuildCallback: function (err, result) {
          // console.log(result.image)
          // console.log(result.coordinates)
          // console.log(result.properties)
        },
        spritesmithOptions: {
          padding: 50,
        }
      }) : utils.continue())
      .pipe(config.rem ? pxtorem({
        rootValue: 100, // 根元素字体大小
        unitPrecision: 5, // 允许REM单位增长的十进制数
        propList: ['*'],  //替换的属性
        replace: true, //替换包含rems的规则，而不是添加回退
        minPixelValue: 0, //设置要替换的最小像素值
        mediaQuery: false, //（布尔值）允许在媒体查询中转换px
        selectorBlackList: [] //要忽略的选择器并保留为px
      }) : utils.continue())
      // .pipe(cleanCSS())
      .pipe(sourcemaps.write(utils.getMapOutput('cssMap')))
      .pipe(gulp.dest(utils.getOutput('cssOutput')))
  })
}
