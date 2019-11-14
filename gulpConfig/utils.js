const config = require('./config')
const fs = require('fs')
const gutil = require('gulp-util')
const through = require('through2') // buffer 处理
const PluginError = gutil.PluginError

module.exports = exports = {
  existsSync(path) {
    return fs.existsSync(path)
  },

  createFolder(path) {
    if (fs.existsSync(path)) {
      return console.log(`目录${path}已存在!`)
    }
    fs.mkdirSync(path)
    console.log(`目录${path}创建成功。`)
  },

  createFile(path, data) {
    if (fs.existsSync(path)) {
      return console.log(`文件${path}已存在!`)
    }
    fs.writeFileSync(path, data)
    console.log(`文件${path}创建成功。`)
  },

  getEntryPath(outputPath) {
    outputPath = config[outputPath]
    if (Array.isArray(outputPath)) {
      return outputPath.map(path => {
        return config.url + config.entryDir + path
      })
    }
    if (typeof outputPath === 'string') {
      return config.url + config.entryDir + outputPath
    }
    console.log(`${outputPath}不存在`)
  },

  getOutput(outputPath) {
    outputPath = config[outputPath]
    if (typeof outputPath === 'string') {
      return config.url + config.outputDir + outputPath
    }
    console.log(`${outputPath}不存在`)
  },

  getMapOutput(outputPath) {
    outputPath = config[outputPath]
    if (typeof outputPath === 'string') {
      return config.mapOutputDir + outputPath
    }
    console.log(`${outputPath}不存在`)
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