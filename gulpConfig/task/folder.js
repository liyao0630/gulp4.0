const fs = require('fs')

module.exports = (gulp, { config }) => {
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

  gulp.task('folder', function (done) {
    function createFolder(path) {
      if (fs.existsSync(path)) {
        console.log(`${path}已存在!`)
        return true
      }
      fs.mkdirSync(path)
      console.log(`${path}创建成功。`)
    }

    function createFile(path, data) {
      if (fs.existsSync(path)) {
        console.log(`${path}已存在!`)
        return true
      }
      fs.writeFileSync(path, data)
      console.log(`${path}创建成功。`)
    }

    createFolder(config.BASE + 'img')
    createFolder(config.BASE + 'css')
    createFolder(config.BASE + 'js')

    createFile(config.BASE + 'css/style.css', cssRest)
    createFile(config.BASE + 'js/index.js', '')
    createFile(config.BASE + 'index.html', htmlTemplate)

    done()
  })
}
