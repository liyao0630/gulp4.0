const { NODE_ENV, url, img, rem, sprite, ts } = require('yargs').argv // 命令行传参
const package = require("../package.json");

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
.clearfix{zoom:1;}`

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
</html>`

// 路径结尾统一不加/
module.exports = {
  url: './src' + package.entryPath,
  dev: (NODE_ENV ? NODE_ENV : 'development') === 'development',
  img: img || false,
  rem: rem || false,
  sprite: sprite || false,
  ts: ts || false,
  protocol: 'http:',
  host: 'localhost',
  // host: '192.168.3.227',
  port: 4012,
  makedir: {
    js: ['/js', '/img', '/css'],
    ts: ['/entry', '/ts_module', '/css', '/img']
  },
  touch: [
    '/js/index.js',
    {
      path: '/css/style.css',
      content: cssRest
    },
    {
      path: '/index.html',
      content: htmlTemplate
    }
  ],
  // 统一出口入口
  outputDir: '/dist',
  mapOutputDir: '../map',
  entryDir: '/src',
  outputDirClean: '/',
  // HTML
  htmlDir: '/**/*.html',
  htmlOutput: '/',
  // 图片
  imageDir: '/img/**/*.*',
  imageSpriteDir: '/img/**/!(sprite)*.*',
  imageOutput: '/img',
  // 精灵图
  // spriteDir: '/img/**/+(icon)*.*',
  // spriteOut: '/sprite',
  spriteCssOut: '/img/spriteSheet.png',
  spriteCssPathOut: '../img/spriteSheet.png?v=' + Date.now(),
  // sass
  sassDir: '/sass/**/*.scss',
  sassMap: '/sass',
  sassOutput: '/sass',
  // css
  cssDir: '/css/**/*.css',
  cssOutput: '/css',
  cssMap: '/css',
  // 字体图标
  fontDir: '**/*.+(eot|ttf)',
  fontOutput: '/',
  // typescript
  tsDir: '/ts/**/*.ts',
  tsOutput: '/ts',
  tsMap: '/ts', // 相对于ts
  // js
  jsDir: '/js/**/*.js',
  jsOutput: '/js',
  jsMap: '/js',
  libDir: '/lib/**', // lib
  libOutput: '/lib', // 导出lib
  // ts modules 
  commentModuleName: 'common.js',
  testTsEntry: '/entry/*.ts',
  testTsMap: '/../../../map/js',
  entryOutput: '/js', // ts模块编译导出
  // 代理
  proxys: [
    {
      path: ['/index.php'], options: {
        // target: 'http://localhost:8080',
        target: 'http://gm0.mxw2.youxi567.com/',
        changeOrigin: true
      }
    }
  ]
}