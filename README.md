## task任务
* 创建基本结构
* 热更新
* 打开浏览器
* 代理
* css,js压缩并生成map文件
* sass
* ts
* bable
* 雪碧图
  >需要作为雪碧图的图片不加引号
* 图片压缩
* 静态文件添加版本号
  > 如果需要控制版本号长度,gulp-rev-append-all->index.js两处'?v=' + hash.digest('hex')添加字符串截取即可


## 命令行参数
环境配置(默认开发环境)  
--NODE_ENV=production 

构建目录相对当前目录(不用每个项目都重新安装依赖，默认当前目录)  
--url=path   

px 转 rem(rootsize=100)  
--rem  

精灵图(移动端注意背景大小)  
--sprite  

图片压缩  
--img  

## 脚本命令

注意修改脚本命令的url参数(工作目录)  

folder 创建基本结构  
dev 开发环境(不会构建,只是热更新、代理)  
clean 删除dist的文件  
build 构建 