const fs = require('fs'),
  argv = require('yargs').argv,
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  proxy = require('http-proxy-middleware'),
  open = require('gulp-open'),
  rev = require('gulp-rev-append-all'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  spriter = require('gulp-css-spriter-filter'),
  sass = require('gulp-sass'),
  image = require('gulp-image'),
  clean = require('gulp-clean'),
  ts = require("gulp-typescript"),
  tsProject = ts.createProject("tsconfig.json"),
  base = argv.url ? ('./' + argv.url + '/') : './',
  config = {
    protocol: 'http:',
    host: 'localhost',
    port: 4000,
    version: 10,
    outputClean: '/dist/*',
    htmlDir: '*.html', // HTML文件
    imageDir: 'img/**/*.+(jpg|jpeg|png|gif)', // 图片
    sassDir: 'sass/**/*.scss',
    spriteDir: 'img/**/+(icon)*.*',
    cssDir: 'css/**/*.css', // css
    fontDir: '**/*.+(eot|ttf)', // 字体图标
    tsDir: 'module/**/*.ts', // typescript
    jsDir: 'js/**/*.js', // js
    libDir: 'lib/**', // lib
    proxys: [ // 代理
      /* proxy(['/user', '/game', '/order'], {
        target: 'http://h5.7k7k.com',
        changeOrigin: true
      }) */
    ],
    htmlOutput: 'dist/', // 导出html
    imageOutput: 'dist/img', // 导出图片
    sassDevOutput: 'sass', // 导出sass
    sassOutput: 'dist/sass', // 导出css
    sassMap: '../../map/sass', // cssMap 相对于css
    cssOutput: 'dist/css', // 导出css
    cssMap: '../../map/css', // cssMap 相对于css
    tsDevDir: 'module', //  ts dev 输出
    jsOutput: 'dist/js', // 导出js
    jsMap: '../../map/js', // jsMap 相对于js
    tsOutput: 'dist/module', // 导出ts
    tsMap: '../../map/module', // tsMap 相对于ts
    libOutput: 'dist/lib', // 导出lib
    fontOutput: 'dist', // 导出字体图标
    spriteOut: base + 'dist/sprite',
    spriteCssOut: base + '/dist/img/spriteSheet.png',
    spriteCssPathOut: '../img/spriteSheet.png?v=' + new Date().getTime()
  };

sass.compiler = require('node-sass');

// cmd set cross-env NODE_ENV=development get process.env.NODE_ENV   
const utils = {
  getDevelopment() {
    return (argv.mode ? argv.mode : 'development') === 'development'
  },
  getConfigPaht(outputPath) {
    let path = config[outputPath]
    if (typeof path === 'string') {
      return base + config[outputPath]
    } else {
      return path.map(path => base + path)
    }
  },
  output(outputPath, done) {
    done && done()
    if (this.getDevelopment()) {
      return connect.reload()
    } else {
      return gulp.dest(this.getConfigPaht(outputPath))
    }
  },
  deleteFileRecursive(path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file, index) {
        if (/^main/i.test(file)) {
          console.log(base + '/module/' + file)
        }
      });
    } else {
      console.log('路径: ' + path + '不存在');
    }
  }
}

gulp.task('clean', () => {
  return gulp.src(utils.getConfigPaht('outputClean'), {
    read: false
  })
    .pipe(clean())
})

gulp.task('server', (done) => {
  connect.server({
    host: config.host,
    port: config.port,
    root: base, // 服务器根目录
    livereload: true, //实时刷新
    middleware: function (connect, opt) { // 代理 配合http-proxy-middleware
      return config.proxys
    }
  });
  done();
});

gulp.task('open', () => {
  return gulp.src(base + './index.html')
  .pipe(open({
    uri: config.protocol + '//' + config.host + ':' + config.port,
    app: 'Google Chrome'
  }));
})

gulp.task('lib', () => {
  return gulp.src(utils.getConfigPaht('libDir'))
    .pipe(utils.output('libOutput'))
});

gulp.task('html', () => {
  return gulp.src(utils.getConfigPaht('htmlDir'))
    .pipe(rev(config.version))
    .pipe(utils.output('htmlOutput'))
});

gulp.task('image', (done) => {
  gulp.src([utils.getConfigPaht('imageDir')/* , '!' + base + 'img/sprite/**' */])
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(utils.output('imageOutput', done))
});

gulp.task("fontIcon", () => {
  return gulp.src(utils.getConfigPaht('fontDir'))
    .pipe(gulp.dest(utils.getConfigPaht('fontOutput')));
})

gulp.task("sass", () => {
  if (utils.getDevelopment()) {
    return gulp.src(utils.getConfigPaht('sassDir'))
      .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
      .pipe(gulp.dest(utils.getConfigPaht('sassDevOutput')));
  } else {
    return gulp.src(utils.getConfigPaht('sassDir'))
      .pipe(sourcemaps.init())
      .pipe(rev(config.version))
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(sourcemaps.write(utils.getConfigPaht('sassMap')))
      .pipe(utils.output('sassOutput'))
  }

});

var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src(utils.getConfigPaht('spriteDir')).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest(config.spriteOut));
});

gulp.task('css', gulp.series(function css(done) {
  gulp.src(utils.getConfigPaht('cssDir'))
    .pipe(sourcemaps.init())
    .pipe(rev(config.version))
    .pipe(spriter({
      'spriteSheet': config.spriteCssOut,
      'pathToSpriteSheetFromCSS': config.spriteCssPathOut,
      'filter': {
        parttner: '\\?v=',  // 筛选出 url 中带有 ?__spliter 的图片合成一张雪碧图
        attributes: 'i' // 非必须，(i,g,m)
      }
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(utils.getConfigPaht('cssMap')))
    .pipe(utils.output('cssOutput'))
  done()
}));

gulp.task('js', function js() {
  return gulp.src(utils.getConfigPaht('jsDir'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write(utils.getConfigPaht('jsMap')))
    .pipe(utils.output('jsOutput'));
});

gulp.task('ts', () => {
  if (utils.getDevelopment()) {
    return gulp.src(utils.getConfigPaht('tsDir'))
      .pipe(tsProject())
      .pipe(gulp.dest(utils.getConfigPaht('tsDevDir')))
  } else {
    return gulp.src(utils.getConfigPaht('tsDir'))
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .pipe(uglify())
      .pipe(sourcemaps.write(utils.getConfigPaht('tsMap')))
      .pipe(gulp.dest(utils.getConfigPaht('tsOutput')))
  }
});

gulp.task('watch', (done) => {
  gulp.watch([utils.getConfigPaht('htmlDir'), utils.getConfigPaht('imageDir'), utils.getConfigPaht('cssDir'), utils.getConfigPaht('jsDir')], gulp.series('html'));
  gulp.watch(utils.getConfigPaht('sassDir'), gulp.series('sass', 'html'));
  gulp.watch(utils.getConfigPaht('tsDir'), gulp.series('ts', 'html'));
  done()
});

gulp.task('default', gulp.series('server', 'open', 'watch', function defaultFn(done) {
  done()
}));
gulp.task('build', gulp.series('lib', 'sass', 'css', 'image', 'ts', 'js', 'html', function build(done) {
  done()
}))
gulp.task('build:clean', gulp.series('clean', 'build', function buildClean(done) {
  done()
}));

const cssRest = `body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{ margin:0; padding:0;}
body,input,textarea{font-family:"Microsoft Yahei";}
textarea{resize:none;outline:none;}
fieldset,img{border:0;}
table{ border-collapse: collapse; border-spacing:0;}
input{vertical-align:middle;outline:none;}
img,object,embed{vertical-align:middle;}
h1,h2,h3,h4,h5,h6{font-size:14px;}
address,caption,cite,code,dfn,em,strong,th,var{ font-style:normal; font-weight:normal;}
fieldset,img,abbr{border:0;}
ul,ol{list-style-type:none;}
caption,th{text-align:left;}
a:focus,embed{outline:0;}
p:before,p:after{ content:''}
a{text-decoration:none;cursor:pointer;color:#7ea4cc;outline:none;}
.clearfix:after{clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}
.clearfix{zoom:1;}`;


const htmlTemplate = `<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <title></title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <script type="text/javascript" src="./js/index.js"></script>
  </body>
</html>`;

gulp.task('folder', function (done) {
  function createFolder(path) {
    if (fs.existsSync(path)) {
      console.log(`${path}已存在!`)
      return true
    }
    fs.mkdirSync(path)
    console.log(`${path}创建成功。`);
  }

  function createFile(path, data) {
    if (fs.existsSync(path)) {
      console.log(`${path}已存在!`)
      return true
    }
    fs.writeFileSync(path, data);
    console.log(`${path}创建成功。`);
  }

  createFolder(base + 'img')
  createFolder(base + 'css')
  createFolder(base + 'js')

  createFile(base + 'css/style.css', cssRest)
  createFile(base + 'js/index.js', '')
  createFile(base + 'index.html', htmlTemplate)

  done();
});




