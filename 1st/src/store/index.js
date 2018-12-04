import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)//这是Vuex

const state = {
	chat:false,
	mineUserId:0,
	showMine:false,
	closeSreach:false,//搜索页面
	showCircle:false,//circle
	showChatMsg:false,
	showChatMsgId:false,
  showWallet:false,
	currentUser:{},//当前聊天用户
	currentMsgList:{},
	data:{
		self:{},
		friends:[]//这是一个数组
	},
	headerTitle:'WeChat',
	titleDesc:{
		//全局路由去做监听进行页面的跳转
		message:'WeChat',
		friends:'Friends',
		discover:'Find',
		mine:'Mine'
	},
	isAjax:false,//判断是否正在请求网络数据
	//消息列表
	messageList:[
		{_id:1,list:[
			{msg:'新出了<哥布林杀手>连载',time:1923454522878,read:false},
			{msg:'OneDay',time:1923454542878,read:false},
			{msg: '我TwoDay', time: 1923454592878, read: true, self: true}
			]},
		{_id:2,list:[{msg:'我哪一点最吸引你?',time:1923454122878,read:true}] },
		{_id:3,list:[{msg:'是否实现过年初制定的目标？',time:1923454326878,read:false}]},
		{_id:4,list:[{msg:'你最害怕什么？',time:1923454722878,read:false}]},
		{_id:5,list:[{msg:'[地址]',time:1923454922878,read:true}]},
		{_id:6,list:[{msg:'后天去江海广场走起。。',time:1923451522878,read:true}]}
	]
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
