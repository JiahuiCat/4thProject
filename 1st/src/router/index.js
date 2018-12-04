import Vue from 'vue'
import Router from 'vue-router'
import Message from '../components/message/Message'
import Friends from '../components/friend/Friends'
import Discover from '../components/discover/Discover'
import Mine from '../components/mine/Mine'

Vue.use(Router)
//这是全局路由
const router = new Router({
  routes: [
  	//根据name来变,全局导航去做监听name发生变化时name:'发生改变'
    { path: '/message', name: 'message', component: Message },
    { path: '/friends', name: 'friends', component: Friends },
    { path: '/discover', name: 'discover', component: Discover },
    { path: '/Mine', name: 'mine', component: Mine },
  ]
})

//将默认/路径替换成信息页面
router.push('message')

export default router
