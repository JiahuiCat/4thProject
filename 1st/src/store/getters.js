export const msgViewList=(state) => {//消息列表
	let result= []
	let friends=state.data.friends//获取state.data.firends
	if (!friends.length) {//判断如果friend的长度为空,没有好友
		return []
	}
	//遍历所有的消息列表获取给你发过信息的好友
	state.messageList.forEach(item =>{
		//获取当前聊天信息的好友
		let friendData=friends.find(f => f._id ===item._id)
		//获取未读消息的条目和最后一条
		let unreadNum=0
		let lastNum={}
		item.list.forEach( m => {//拿到msg
			if(!m.read){//如果m的read没有读,那么没读条目增加
				unreadNum++
			}
			lastNum=m//遍历覆盖一条一条的覆盖
		})
		result.push({
			...friendData,//将unread和lastNum传进去
			unreadNum,
			lastNum
		})
	})
	return result//result就出来了
}

export const friendsList=(state) => {//好友,获取好友的最后一条消息和未读消息
	let result =[ ]
	state.data.friends.forEach(item => {//遍历所有的好友找的对应的消息
		let msg=state.messageList.find(m => //根据当前好友的id获取对应的聊天消息
			m._id === item._id
		)
		let unreadNum=0
		let	lastNum=0
		if (msg) {
			msg.list.forEach(k =>{
				!k.read&& unreadNum++//&&和k.read为false时执行后面的
				lastNum=k
			})
		}
		result.push({
			...item,//将unread和lastNum传进去
			unreadNum,
			lastNum
		})
	})
	return result
}

export const mineUserData = (state) => {
	let id=state.mineUserId
	if(id ===0) {
		return state.data.self
	}else{
		let recode =state.data.friends.find(f =>f._id === id)
		return recode //用户消息
	}
}