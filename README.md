# anywhere
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

