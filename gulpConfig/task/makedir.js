const fs = require('fs')

module.exports = (gulp, { config, utils }) => {
  gulp.task('makedir', function (done) {
    if (!utils.existsSync(config.url)) {
      utils.createFolder(config.url)
    }
    if (!utils.existsSync(config.url + config.entryDir)) {
      utils.createFolder(config.url + config.entryDir)
    }

    if (config.ts) {
      config.makedir.ts.forEach(path => utils.createFolder(config.url + config.entryDir + path))
      done()
      return
    }

    config.makedir.js.forEach(path => utils.createFolder(config.url + config.entryDir + path))
    config.touch.forEach(file => {
      if (file.path) {
        utils.createFile(config.url + config.entryDir + file.path, file.content)
      } else {
        utils.createFile(config.url + config.entryDir + file, '')
      }
    })
    done()
  })
}
