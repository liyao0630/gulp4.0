const argv = require('yargs').argv // 命令行传参


module.exports = exports = {
  BASE: argv.url ? ('./' + argv.url + '/') : './',
  DEV: (argv.NODE_ENV ? argv.NODE_ENV : 'development') === 'development',
  REM: argv.REM ? argv.REM : false,
  SPRITE: argv.SPRITE ? argv.SPRITE : false,
  protocol: 'http:',
  host: 'localhost',
  port: 4000,
  outputDirClean: '/dist/*',
  htmlDir: '*.html', // HTML文件
  imageDir: 'img/**/*.+(jpg|jpeg|png|gif)', // 图片
  sassDir: 'sass/**/*.scss',
  spriteDir: 'img/**/+(icon)*.*',
  cssDir: 'css/**/*.css', // css
  fontDir: '**/*.+(eot|ttf)', // 字体图标
  tsDir: 'module/**/*.ts', // typescript
  jsDir: 'js/**/*.js', // js
  libDir: 'lib/**', // lib
  proxys: [ // 代理
    /* proxy(['/user', '/game', '/order'], {
      target: 'http://www.target.com',
      changeOrigin: true
    }) */
  ],
  outputDir: 'dist',
  htmlOutput: 'dist/', // 导出html
  imageOutput: 'dist/img', // 导出图片
  sassDevOutput: 'sass', // 导出sass
  sassOutput: 'dist/sass', // 导出css
  sassMap: '../map/sass', // cssMap 相对于css
  cssOutput: 'dist/css', // 导出css
  cssMap: '../map/css', // cssMap 相对于css
  tsDevDir: 'module', //  ts dev 输出
  jsOutput: 'dist/js', // 导出js
  jsMap: '../map/js', // jsMap 相对于js
  tsOutput: 'dist/module', // 导出ts
  tsMap: '../map/module', // tsMap 相对于ts
  libOutput: 'dist/lib', // 导出lib
  fontOutput: 'dist/', // 导出字体图标
  spriteOut: 'dist/sprite',
  spriteCssOut: 'dist/img/spriteSheet.png',
  spriteCssPathOut: 'img/spriteSheet.png?v=' + new Date().getTime()
}