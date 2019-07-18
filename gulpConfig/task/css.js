module.exports = (gulp, { utils, config, plugins: { sourcemaps, rev, spriter, pxtorem, cleanCSS } }) => {
  gulp.task('css', () => {
    return gulp.src(utils.getConfigPaht('cssDir'))
      .pipe(sourcemaps.init())
      .pipe(rev())
      .pipe(config.SPRITE ? spriter({
        'spriteSheet': config.spriteCssOut,
        'pathToSpriteSheetFromCSS': config.spriteCssPathOut,
        'filter': {
          parttner: '\\?v=',  // 筛选
          attributes: 'i' // 非必须，(i,g,m)
        },
        /* spriteSheetBuildCallback: function (err, result) {
          console.log(result.properties)
        }, */
        /* spritesmithOptions: {
          padding: 20
          cssTemplate:(data)=>{
          // data为对象，保存合成前小图和合成打大图的信息包括小图在大图之中的信息
             let arr = [],
                  width = data.spritesheet.px.width,
                  height = data.spritesheet.px.height,
                  url =  data.spritesheet.image
              // console.log(data)
              data.sprites.forEach(function(sprite) {
                  arr.push(
                      ".icon-"+sprite.name+
                      "{"+
                          "background: url('"+url+"') "+
                          "no-repeat "+
                          sprite.px.offset_x+" "+sprite.px.offset_y+";"+
                          "background-size: "+ width+" "+height+";"+
                          "width: "+sprite.px.width+";"+                       
                          "height: "+sprite.px.height+";"+
                      "}\n"
                  ) 
              })
              // return "@fs:108rem;\n"+arr.join("")
              return arr.join("")
          }
        } */
      }) : utils.continue())
      .pipe(config.REM ? pxtorem({
        rootValue: 100, // 根元素字体大小
        unitPrecision: 5, // 允许REM单位增长的十进制数
        propList: ['*'],  //替换的属性
        replace: true, //替换包含rems的规则，而不是添加回退
        minPixelValue: 0, //设置要替换的最小像素值
        mediaQuery: false, //（布尔值）允许在媒体查询中转换px
        selectorBlackList: [] //要忽略的选择器并保留为px
      }) : utils.continue())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write(utils.getMapOutput('cssMap')))
      .pipe(gulp.dest(utils.getOutput('cssOutput')))
  })
}
