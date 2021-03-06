const plugins = {
  clean:      require('gulp-clean'),
  gutil:      require('gulp-util'),
  argv:       require('yargs').argv,              // 命令行传参
  connect:    require('gulp-connect'),            // webserver 热更
  proxy:      require('http-proxy-middleware'),   // 代理
  open:       require('gulp-open'),               // 打开浏览器
  rev:        require('gulp-rev-append-all'),     // 添加版本号
  sourcemaps: require('gulp-sourcemaps'),         // map文件
  uglify:     require('gulp-uglify'),             // js压缩
  pxtorem:    require('gulp-pxtorem'),            // px 转 rem
  cleanCSS:   require('gulp-clean-css'),          // css压缩
  spriter:    require('gulp-css-spriter-filter'), // css文件内精灵图
  sass:       require('gulp-sass'),               // sass编译
  nodeSass:   require('node-sass'),               // node 处理 sass
  image:      require('gulp-image'),              // 图片压缩
  babel:      require("gulp-babel"),              // bable
  through:    require('through2'),                // buffer 处理
  ts:         require("gulp-typescript"),         // ts
  browserify: require("browserify"),              // 所有的模块打包成单个文件
  tsify:      require('tsify'),                   // browserify调用ts编译
  source:     require('vinyl-source-stream'),     // stream转换为vinyl
  buffer:     require('vinyl-buffer'),            // buffer转换为vinyl
  fg:         require('fast-glob'),               // src转换
  changed:    require('gulp-changed'),            // 编译缓存
  watchify:   require("watchify"),                // browserify监听
  concat:     require('concat-stream'),           // factor-bundle(browserify编译ts后对依赖进行过滤)处理
}

const config = require('./config')
const utils = require('./utils')
module.exports = exports = {plugins, config, utils}