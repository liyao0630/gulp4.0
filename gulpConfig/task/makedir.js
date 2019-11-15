const fs = require('fs')

module.exports = (gulp, { config, utils }) => {
  gulp.task('makedir', function (done) {
    let pathArr = (config.url + config.entryDir).split('/')
    let pathAll = ''
    pathArr.forEach(val => {
      pathAll += val +'/'
      if (!utils.existsSync(pathAll)) {
        utils.createFolder(pathAll)
      }
    })

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
