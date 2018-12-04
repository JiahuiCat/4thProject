<template>
  <div class="chat">
    <mu-appbar style="width: 100%;" color="#303030">
      <mu-button icon slot="left" @click="closeChat(false)">
        <mu-icon value="keyboard_arrow_left" :size="30" color="#E3E3E3"></mu-icon>
      </mu-button>
      <span class="ChatName">{{currentUser.name}}</span>
      <mu-button flat slot="right" color="#E3E3E3"@click="showMsg(true)">
        <mu-icon value="more_horiz" :size="35"></mu-icon>
      </mu-button>
    </mu-appbar>
    <!-- 将currentUser直接打印 -->
    <div class="content-wrapper" ref="msgView">
      <!-- better-scroll是页面滑动 -->
      <MsgContent :user="currentUser" ref="msgContent">
      </MsgContent>
    </div>
    <div class="footer" ref="footer">
      <div class="top">
        <mu-button icon class="icon">
          <mu-icon value="directions_railway"></mu-icon>
        </mu-button>
        <mu-text-field class="input" v-model="value"></mu-text-field>
        <mu-container>
          <div class="button-wrapper">
            <mu-button icon color="primary" @click="openBotttomSheet">
              <mu-icon value="face"></mu-icon>
            </mu-button>
          </div>
          <mu-bottom-sheet :open.sync="open">
            <mu-list @item-click="closeBottomSheet">
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="grade" color="orange"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>表情</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="inbox" color="blue"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>图片</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="chat" color="green"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>信息</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="email" color="cyan"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>邮箱</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-bottom-sheet>
        </mu-container>
        <mu-button icon class="icon" @click="sendMsg">
          <mu-icon value="send"></mu-icon>
        </mu-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import MsgContent from './MsgContent'
import BScroll from 'better-scroll'
import { TOGGLE_CHAT,TOGGLE_CHAT_MSG } from '../../store/mutation-types'
export default {
  name: 'ChatView',
  data() {
    return {
      value: ' ',
      open: false
    }
  },
  mounted() { //生命周期
    this.$nextTick(() => { //当内容层多于容器层时才能滑动页面子组件渲染完毕better-scroll
      if (this.msgScroll) {
        this.msgScroll.refresh()
      } else {
        this.msgScroll = new BScroll(this.$refs.msgView, {
          click: true
        })
      }
      //滑动到底部
      this.msgScroll.scrollToElement(this.bottom)
    })
  },
  components: {
    MsgContent
  },
  methods: {
    ...mapMutations({ closeChat: TOGGLE_CHAT ,showMsg:TOGGLE_CHAT_MSG}),
    ...mapActions(['sendNewMsg', 'sendMeMsg']),
    //我去method少了个s,找的我眼都花了
    sendMsg() {
      let msg = this.value
      if (!msg.trim()) {
        return
      }
      let time = new Date().getTime()
      let id = this.currentUser._id
      this.sendMeMsg({ id, msg, time, self: true })
        .then(this.refreshmsgScroll)
      this.sendNewMsg({ id, msg, time, self: true, axios: this.axios }) //数据回来要做ajax的网络请求axios为vue的类似ajax
        .then(this.refreshmsgScroll)
      //清空输入框
      this.value = ""
    },
    refreshmsgScroll() {
      this.$nextTick(() => {
        this.msgScroll.refresh()
        this.msgScroll.scrollToElement(this.bottom, 500)
      })
    },
    closeBottomSheet() {
      this.open = false;
    },
    openBotttomSheet() {
      this.open = true;
    }
  },
  computed: { ...mapState({
      currentUser: 'currentUser'
    }), //获取getterscurrentMsgList的当前的聊天记录
    bottom() {
      return this.$refs.msgContent.bottom
    }
  }
}

</script>
<style scoped>
.chat {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #EBEBEB;
  z-index: 50;
}
.button-wrapper {
  text-align: center;
  float: right;
  .mu-button{
    margin: 8px;
    vertical-align: top;
  }
}
.ChatName {
  float: left;
  color: #E3E3E3;
  font-size: 20px;
}

.chat .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  height: 50px;
  background: #f6f6f6;
}

.footer .top {
  display: flex;
}

/*聊天*/
.chat .content-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 50px;
  overflow: hidden;
}

.top .input {
  width: 250%;
  margin: 0;
  margin-right: 10px;
  padding-bottom: 0;
  min-height: 32px !important;
  height: 30px;
}

</style>
