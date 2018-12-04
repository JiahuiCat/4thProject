import *as types from './mutation-types'

//Ajax的状态正在请求中和请求完毕
export default {
	//这是事件
	[types.RECEVIVE_DATA](state,data) {
		state.data =data
	},
	[types.CHANGE_NAV_TITLE](state,name){
		state.headerTitle=state.titleDesc[name]//键值对取值
	},
	[types.REFRESH_AJAX](state,stutas){//正在请求中和请求完毕
		state.isAjax=stutas
	},
	[types.DELETE_MSG_LIST](state,item){
		let ccc=state.messageList.find(m=> m._id === item._id)//因为所在的对象不同
		let index=state.messageList.indexOf(ccc)//找到点击的那个
		state.messageList.splice(index,1)//第三步删除找到点击的那个
	},
	[types.TOGGLE_CHAT](state,val){
		state.chat = val//传参是true或者false
	},
	[types.TOGGLE_MINE](state,val){//个人信息
		state.showMine =val
	},
	[types.TOGGLE_DELETE](state,val){
		state.showMine = val
	},
	[types.TOGGLE_SREACH](state,val){
		state.closeSreach=val
	},
	[types.TOGGLE_CIRCLE](state,val){//Circle的显示和隐藏
		state.showCircle=val
	},
	[types.TOGGLE_CHAT_MSG](state,val){
		state.showChatMsg=val
	},
  [types.TOGGLE_WALLET](state,val){
    state.showWallet=val
  },
	[types.RECEVIVE_USER_ID](state,id){//friends的个人主页
		state.mineUserId=id
	},
	[types.RECEVIVE_CURRENT_USER](state,user){//通过user找到对应的聊天记录
		//val为我们的当前聊天用户
		state.currentUser=user
		//根据user查询当前聊天数据，将队列中所有的read改为true
		let ccc=state.messageList.find(m=> m._id === user._id)
		let index=state.messageList.indexOf(ccc)
		//user的id找到对应的消息列表
		ccc.list.forEach(m => {m.read= true})//遍历ccc中的msg的read等于true的
		state.currentMsgList=ccc
	},
	[types.ADD_MESSAGE](state,{_id,msg,time,self}){
		state.currentMsgList.list.push({
			msg,
			time,
			self,
			read:true
		})
	}
}
