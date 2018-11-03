import Vue from 'vue'
import App from './App'
import router from './router'
// 重置样式
import 'styles/reset.css'
// 解决移动端1px问题
import 'styles/border.css'
// 使用faskclick库，来解决点击300毫秒颜延迟问题，来提高用户体验
// npm install faskclick
import fastClick from 'fastclick'
// 引入图标样式
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
