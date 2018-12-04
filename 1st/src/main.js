// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Muse from './muse-ui.config'
import vueTouch from 'vue-touch'

Vue.use(Muse)
Vue.use(VueAxios,axios)
Vue.use(vueTouch,{name:'v-touch'})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//直接分发
store.dispatch('getAllData',axios)
//全局监听页面跳转
router.beforeEach((to,from,next) =>{
	store.commit('CHANGE_NAV_TITLE', to.name)//提交这个事件
	next()
})
//to.name跳转要在后面
//跳转至message触发路由守卫
// router.push('message')//要先设置配置在去push
//先监听再跳转