module.exports = (gulp, { utils, config, plugins: { fg, browserify, source, uglify, buffer } }) => {
  let concat = require('concat-stream');

  gulp.task('browserify:compile', (done) => {
    let current = 0;
    let entry = fg.sync(utils.getEntryPath('entryDir'));
    let countFile = entry.length

    let outputs = entry.map(path => {
      path = path.split('/')
      return write(path[path.length - 1])
    })
    
    browserify(entry).
      plugin('factor-bundle', { outputs: outputs })
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
        bufferToStream(body).pipe(source(name))
          .pipe(buffer())
          .pipe(uglify())
          .pipe(gulp.dest(utils.getOutput('entryOutput')))
          if (current++ === countFile) {
            done()
          }
      });
    }
    /* 
    // 不能压缩
    let entry = await globby(utils.getEntryPath('entryDir'))
    var fs = require('fs');
    if (!utils.existsSync(utils.getOutput('entryOutput'))) {
      fs.mkdirSync(utils.getOutput('entryOutput'))
    }

    let outputs = entry.map(path => {
      path = path.split('/')
      return utils.getOutput('entryOutput') + path[path.length - 1]
    })
    var b = browserify(entry);
    b.plugin('factor-bundle', { outputs: outputs }).bundle()
      .pipe(source(config.commentModuleName))
      .pipe(gulp.dest(utils.getOutput('entryOutput'))) */


    /* 
    // 直接使用ts，多个合并一个
    await globby(utils.getEntryPath('entryDir')).then(entry => {
      browserify(entry)
      .plugin(tsify, { noImplicitAny: true })
      .bundle()
      .on('error', function (error) { console.error(error.toString()); })
      .pipe(source('commont2.js'))
      .pipe(gulp.dest(utils.getOutput('entryOutput')))
    }) */
    /*
    // 单个 
     browserify()
      .add('./src/utils/ts_modules/index.ts')
      .plugin(tsify, { noImplicitAny: true })
      .bundle()
      .on('error', function (error) { console.error(error.toString()); })
      .pipe(source('commont1.js'))
      .pipe(gulp.dest(utils.getOutput('entryOutput'))) */
  })

}
