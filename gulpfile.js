const gulp = require('gulp'),
  fs = require('fs'),
  common = require('./gulpConfig/common.js')

// 载入任务
let taskPath = 'gulpConfig/task'

fs.readdirSync(taskPath).filter(function (file) {
  return file.match(/js$/); // 排除非 JS 文件，如 Vim 临时文件
}).forEach(function (_file) {
  require('./' + taskPath + '/' + _file)(gulp, common);
})

gulp.task('common', gulp.series('clean', 'copy_lib', 'sass', 'css', 'image_min', 'js', 'html',function common(done) {
  done()
}))


gulp.task('dev:ts', gulp.series('common', 'tsModules:dev', 'connect', 'open_browser', 'browserify:watch', function devTs(done) {
  done()
}))

gulp.task('build:ts', gulp.series('common', 'tsModules:build', function buildTs(done) {
  done()
}))

gulp.task('build', gulp.series('common', 'ts', function buildCallback(done) {
  done()
}))

gulp.task('default', gulp.series('common', 'ts', 'connect', 'open_browser', 'watch', function defaultCallback(done) {
  done()
}))