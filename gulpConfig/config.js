const {NODE_ENV, url, img, rem, sprite} = require('yargs').argv // 命令行传参

module.exports = exports = {
  url: url ? ('./' + url + '/') : './',
  dev: (NODE_ENV ? NODE_ENV : 'development') === 'development',
  img: img || false,
  rem: rem || false,
  sprite:  sprite || false,
  protocol: 'http:',
  host: 'localhost',
  port: 4000,
  outputDirClean: 'dist',
  htmlDir: '*.html', // HTML文件
  imageDir: 'img/**/*.*', // 图片
  sassDir: 'sass/**/*.scss',
  spriteDir: 'img/**/+(icon)*.*',
  cssDir: 'css/**/*.css', // css
  fontDir: '**/*.+(eot|ttf)', // 字体图标
  tsDir: 'ts/**/*.ts', // typescript
  jsDir: 'js/**/*.js', // js
  libDir: 'lib/**', // lib
  proxys: [ // 代理
    {path: ['/user', '/game', '/order'], options: {
      target: 'http://www.target.com',
      changeOrigin: true
    }}
  ],
  outputDir: 'dist',
  htmlOutput: 'dist/', // 导出html
  imageOutput: 'dist/img', // 导出图片
  sassDevOutput: 'sass', // 导出sass
  sassOutput: 'dist/sass', // 导出css
  sassMap: '../map/sass', // cssMap 相对于css
  cssOutput: 'dist/css', // 导出css
  cssMap: '../map/css', // cssMap 相对于css
  tsDevDir: 'ts', //  ts dev 输出
  jsOutput: 'dist/js', // 导出js
  jsMap: '../map/js', // jsMap 相对于js
  tsOutput: 'dist/ts', // 导出ts
  tsMap: '../map/ts', // tsMap 相对于ts
  libOutput: 'dist/lib', // 导出lib
  fontOutput: 'dist/', // 导出字体图标
  spriteOut: 'dist/sprite',
  spriteCssOut: 'dist/img/spriteSheet.png',
  spriteCssPathOut: 'img/spriteSheet.png?v=' + Date.now()
}