import * as types from './mutation-types'

//网络请求action commit
export default {
  async getAllData({ commit }, axios) {
    commit(types.REFRESH_AJAX, true) //正在请求中
    let self = await axios.get('/api/self')
    //网络请求api/self和friends
    let friends = await axios.get('/api/friends')
    self = self.data.data
    friends = friends.data.data
    commit(types.RECEVIVE_DATA, { self, friends })
    commit(types.REFRESH_AJAX, false) //请求完毕
  },
  deleteMsg({ commit }, item) {
    commit(types.DELETE_MSG_LIST, item)
  },
  showChat({ commit }, user) { //item当前聊天的对象
    //修改当前聊天对象
    //第二个buguser要和commit({},user)参数要一致
    commit(types.RECEVIVE_CURRENT_USER, user) //提交
    commit(types.TOGGLE_CHAT, true)
  },
  showMine({ commit },id){
    commit(types.RECEVIVE_USER_ID,id)//主页id
    commit(types.TOGGLE_MINE,true)//展示页面
  },
  showChatMsg({commit,id}){
    commit(typesTOGGLE_CHAT_MSG,id)//指定的聊天信息
  },
  sendNewMsg({ commit }, payload) {
    //将自己的发送消息添加到对应的消息列表中
    commit(types.ADD_MESSAGE, payload)
    return new Promise((resolve, reject) => {
      //做网络请求，将发送的内容发送给好友，并等待好友的回调
      let query = `?id=${payload.id}&msg=${payload.msg}`
      payload.axios.get('/api/robot' + query)
        //获取到回调数据时，将聊天信息加入到对应的消息列表中
        .then((msgData) => { //做网络请求网络请求完毕后.then 会得到数据,再将数据传过来
          let time = new Date().getTime()
          let msg = JSON.parse(msgData.data.data)
          msg = msg.text
          commit(types.ADD_MESSAGE, { msg, time })
          resolve() //resolve代表上面的代码全部执行完毕
        })
    })
  },
  sendMeMsg({ commit }, payload) {
    return new Promise(resolve => {
    	let time = new Date().getTime()
      commit(types.ADD_MESSAGE,{ time })
      resolve()
    })
  }
}
