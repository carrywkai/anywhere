# anywhere
<<<<<<< HEAD

> 生活不止眼前的苟且，还有诗和远方

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
=======
生活不止眼前的苟且，还有诗和远方！
## 初始化
#### 使用stylus预编译，来提高CSS编写效率，需要安装二个依赖
``` javascript
npm install stylus --save
```
``` javascript
npm install stylus-loader --save
```
#### 解决移动端点击延迟300毫秒的问题，提高用户体验，使用fastclick库
先安装
``` javascript
npm install fastclick --save
```
在main.js中配置
``` javascript
import fastClick from 'fastclick'
fastClick.attach(document.body)
```

>>>>>>> 89a7ccf29ddb667dbd8e6f145f881b4b54120363
