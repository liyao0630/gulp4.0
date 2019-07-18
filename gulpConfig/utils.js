var config = require('./config')
var path = require('path')
var gutil = require('gulp-util')
var through = require('through2') // buffer 处理
var PluginError = gutil.PluginError

module.exports = exports = {
  getConfigPaht(outputPath) {
    outputPath = config[outputPath]
    if (typeof outputPath === 'string') {
      return path.resolve(config.BASE + outputPath)
    }
    throw new Error(`${outputPath}不存在`)
  },
  getOutput(outputPath) {
    outputPath = config[outputPath]
    if (typeof outputPath === 'string') {
      return path.resolve(config.BASE + outputPath)
    }
    throw new Error(`${outputPath}不存在`)
  },
  getMapOutput(outputPath) {
    outputPath = config[outputPath]
    if (typeof outputPath === 'string') {
      return outputPath
    }
    throw new Error(`${outputPath}不存在`)
  },
  continue() {
    var stream = through.obj(function (file, enc, cb) {
      if (file.isStream()) {
        this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
        return cb();
      }

      if (file.isBuffer()) {
        // 啥也不做
      }

      // 确保文件进入下一个 gulp 插件
      this.push(file);

      // 告诉 stream 引擎，我们已经处理完了这个文件
      cb();
    });

    // 返回文件 stream
    return stream;
  }
}