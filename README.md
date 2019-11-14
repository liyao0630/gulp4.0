## 文档结构
| 目录 | 描述 |
| ---- | ---- |
| img | 图片，图片压缩 命令行参数 --img |
| css | css，不加引号的图片会作为精灵图合并处理，命令行参数 --sprite。有引号的图片自动添加版本号。px 转 rem(rootsize=100) --rem |
| sass | sass |
| js | javascript |
| ts | typescript |
| entry | ts入口 |
| ts_modules | ts模块 |


## 命令行参数
环境配置(默认开发环境)  
--NODE_ENV=production 

构建目录相对当前目录 
--url=path     