const gulp =  require('gulp'),
  fs = require('fs'),
  common = require('./gulpConfig/common.js')

// 载入任务
let taskPath = 'gulpConfig/task'

fs.readdirSync(taskPath).filter(function (file) {
  return file.match(/js$/); // 排除非 JS 文件，如 Vim 临时文件
}).forEach(function (_file) {
  require('./' + taskPath + '/' + _file)(gulp, common);
})


gulp.task('build', gulp.series('copy_lib', 'sass', 'css', 'image_min', 'ts', 'js', 'html', (done) => {
  done()
}))

gulp.task('default', gulp.series('connect', 'open_browser', 'watch', (done) => {
  done()
}))