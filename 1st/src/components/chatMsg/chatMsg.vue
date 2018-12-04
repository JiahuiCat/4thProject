<template>
  <div class="chatMsg">
    <div class="chatMsgContent">
      <mu-appbar style="width: 100%;z-index:150;" textColor="#6b6b6b" class="topNav">
        <mu-button icon slot="left" @click="showMsg(false)" color="#F5F5F5">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <div class="title">聊天讯息</div>
      </mu-appbar>
      <div class="MsgContent">
        <div class="person_box">
          <div>
            <img :src="currentUser.avatar" class="person_img"/>
          </div>
            <span class="person_name"></span>
            <div><span class="CCA_id"></span></div>
            <mu-icon value="add" class='Qr'></mu-icon>
          </div>
          <!-- ====== -->
          <div class="wallet_bar">
            <div class="wallet_img">
              <div class="wallet_span">聊天小程序</div>
            </div>
          </div>
          <div class="chat_bar">
            <div class="chat_img">
              <div class="chat_span">查找聊天信息</div>
            </div>
          </div>
          <div class="like">
            <div class="like_bar">
              <div class="wallet_img">
                <div class="wallet_span">置顶会话</div>
                <div class="sdo">
                  <mu-switch style="margin-left: 16px" v-model="docked"></mu-switch>
                </div>
              </div>
            </div>
            <div class="like_bar">
              <div class="wallet_img">
                <div class="wallet_span">新消息勿扰</div>
                <div class="sdo">
                  <mu-switch style="margin-left: 16px" v-model="dockedvalue2"></mu-switch>
                </div>
              </div>
            </div>
          </div>
          <!-- four -->
          <div class="chat_bar">
            <div class="chat_img">
              <div class="chat_span">设定当前聊天背景</div>
            </div>
          </div>
          <div class="chat_bar">
            <div class="chat_img">
              <div class="chat_span">投诉</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { TOGGLE_CHAT_MSG } from '../../store/mutation-types'
export default {
  name: 'chatMsg',
  data() {
    return {
      docked: false,
      dockedvalue2:true
    }
  },
  computed: {
    ...mapState({ currentUser: 'currentUser' })
  },
  methods: {
    ...mapMutations({ showMsg: 'TOGGLE_CHAT_MSG' })
  }
}

</script>
<style lang="less" scoped>
.chatMsgContent {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 50;
  background-color: #ECECEC;
  background-size: 100%;

  .topNav {
    background-color: #303030;
  }

  .title {
    color: #F5F5F5;
    font-size: 17px;
  }
}

.person_box {
  margin: 20px auto;
  width: 100%;
  height: 90px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;

  .person_img {
    margin: 10px;
    width: calc(38% - 50px);
    height: 70px;
    background-color: #f0f;
  }

  .person_name {
    position: relative;
    bottom: 70px;
    left: 105px;
  }

  .CCA_id {
    position: relative;
    bottom: 70px;
    left: 105px;
    color: #E4E4E4;
  }

  .Qr {
    position: relative;
    top: -65px;
    left: 100px;
    font-size: 30px;
  }

}

.wallet_bar {
  margin-bottom: 20px auto;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;

  .wallet_span {
    display: block;
    position: relative;
    top: 11px;
    left: 10px;
    font-size: 17px;
  }
}

.chat_bar {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;

  .chat_span {
    display: block;
    position: relative;
    top: 11px;
    left: 10px;
    font-size: 17px;
  }
}

.like {
  margin: 20px auto;

  .like_bar {
    margin: 0 auto;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #EBEBEB;
    box-shadow: 2px 2px 2px #EBEBEB;
    background-color: #fff;
  }

  .sdo {
    position: relative;
    bottom: 35px;
    left: 80%;
  }

  .wallet_span {
  	 position: relative;
  	 left:10px;
    font-size: 17px;
    line-height: 50px;
  }
}

</style>
