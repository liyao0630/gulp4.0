var plugins = {
  clean: require('gulp-clean'),
  gutil: require('gulp-util'),
  // PluginError: gutil.PluginError,
  argv: require('yargs').argv, // 命令行传参
  connect: require('gulp-connect'), // webserver 热更
  proxy: require('http-proxy-middleware'), // 代理
  open: require('gulp-open'), // 打开浏览器
  rev: require('gulp-rev-append-all'),  // 添加版本号
  sourcemaps: require('gulp-sourcemaps'), // map文件
  uglify: require('gulp-uglify'), // js压缩
  pxtorem: require('gulp-pxtorem'), // px 转 rem
  cleanCSS: require('gulp-clean-css'), // css压缩
  spriter: require('gulp-css-spriter-filter'), // css文件内精灵图
  sass: require('gulp-sass'), // sass编译
  nodeSass:require('node-sass'),
  image: require('gulp-image'), // 图片压缩
  babel: require("gulp-babel"), // bable
  through: require('through2'), // buffer 处理
  // ts: require("gulp-typescript"), // ts
  // tsProject: ts.createProject("tsconfig.json"),
}
console.log(plugins.image);

/* var plugins = require('gulp-load-plugins')({
  rename: {
    'gulp-clean': 'clean',
  }
}) */
var config = require('./config')
var utils = require('./utils')
module.exports = exports = {plugins, config, utils}