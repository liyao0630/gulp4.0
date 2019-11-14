module.exports = (gulp, { utils, config, plugins: { browserify, source, tsify, fg, buffer, uglify, sourcemaps, watchify, concat } }) => {
  gulp.task('tsModules:build', (done) => {
    let entry = fg.sync(utils.getEntryPath('testTsEntry'));
    let current = 0;
    let countFile = entry.length
    let outputs = entry.map(path => {
      if (path.includes('entry')) {
        path = path.split('/')
        return write(path[path.length - 1].replace('.ts', '.js'))
      }
    })
    browserify(entry)
      .plugin(tsify, { noImplicitAny: true })
      .plugin('factor-bundle', { outputs: outputs })
      .bundle()
      .pipe(write(config.commentModuleName))

    let Duplex = require('stream').Duplex;
    function bufferToStream(buffer) {
      let stream = new Duplex();
      stream.push(buffer);
      stream.push(null);
      return stream;
    }

    function write(name) {
      return concat(function (body) {
        bufferToStream(body)
          .pipe(source(name))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(uglify())
          .pipe(sourcemaps.write(utils.getOutput('testTsMap')))
          .pipe(gulp.dest(utils.getOutput('entryOutput')))
        if (current++ === countFile) {
          done()
        }
      });
    }
  })

  gulp.task('tsModules:dev', () => {
    let fs = require('fs')
    let entry = fg.sync(utils.getEntryPath('testTsEntry'));
    let outputPath = utils.getOutput('entryOutput')

    var outputPathArr = outputPath.split('/')
    var existsPath = ''
    outputPathArr.map((path) => {
      existsPath += path + '/'
      if (!fs.existsSync(existsPath)) {
        fs.mkdirSync(existsPath)
      }
    })
    let outputs = entry.map(path => {
      path = path.split('/')
      return outputPath + '/' + path[path.length - 1].replace('.ts', '.js')
    })
    var watchedBrowserify = watchify(browserify(entry).plugin(tsify));

    function bundle() {
      return watchedBrowserify
        .plugin('factor-bundle', { outputs: outputs })
        .bundle()
        .pipe(source(config.commentModuleName))
        .pipe(buffer())
        .pipe(gulp.dest(utils.getOutput('entryOutput')))
    }
    watchedBrowserify.on("update", bundle);
    // watchedBrowserify.on("log", (log) => {
    //   console.log(log)
    // });
    return bundle()
  })
}

