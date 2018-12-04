<template>
  <div class="detail-view">
    <mu-appbar style="width: 100%;" color="#303030">
      <mu-button icon slot="left" @click="close(false)">
        <mu-icon value="keyboard_arrow_left" :size="30" color="#E3E3E3"></mu-icon>
      </mu-button>
      <span class="ChatName"></span>
      <mu-button flat slot="right" color="#E3E3E3" @click="openBotttomSheet">
        <mu-icon value="more_horiz" :size="35"></mu-icon>
      </mu-button>
      <!-- 底部 -->
      <mu-bottom-sheet :open.sync="open">
            <mu-list @item-click="closeBottomSheet">
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="border_color" color="blue"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设定备注和便签</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="grade" color="orange"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>加为超级好友</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="camera" color="blue"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设定朋友圈权限</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="launch" color="green"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>传送该名片</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="report_problem" color="cyan"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>投诉</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="cloud_off" color="black"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>加入黑名单</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="delete" color="black"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>删除</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action>
                  <mu-icon value="filter_none" color="pink"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>新增到桌面</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-bottom-sheet>
    </mu-appbar>
    <div class="person_box">
      <div>
        <img class="person_img" :src="userData.avatar"/>
          </div>
        <div class="person_cont">
          <span class="person_name">{{userData.name}}</span>
          <div class="CCA_id"><span>CCA_id:{{userData.phone}}</span></div>
          <mu-icon value="dashboard" class='Qr'></mu-icon>
        </div>
      </div>
      <div class="wallet_bar">
        <div class="wallet_img">
          <div class="wallet_span"><span>设定备注和便签</span></div>
        </div>
      </div>
      <div class="phone_bar">
        <div class="phone_span">电话号码:<span style="color:#CCD9DF;font-size: 14px">{{userData.phone}}</span></div>
      </div>
      <!-- ========= -->
      <div class="like">
        <div class="like_bar">
          <div class="wallet_img">
            <div class="wallet_span"><span>地区:<span>{{userData.address}}</span></span></div>
          </div>
        </div>
        <div class="like_bar">
          <div class="wallet_img">
            <div class="wallet_span"><span>个人相簿:</span></div>
          </div>
        </div>
        <div class="like_bar">
          <div class="wallet_img">
            <div class="wallet_span"><span>更多</span></div>
          </div>
        </div>
      </div>
      <!-- btn -->
      <mu-container class="button-wrapper">
        <mu-flex justify-content="center" align-items="center" >
          <mu-button full-width color="#18AC16" @click="start"><span style="color: #FCE8FD">发送消息</span></mu-button>
        </mu-flex>
        <mu-flex justify-content="center" align-items="center" class="VideoChat">
          <mu-button full-width color="#F8F8F8"><span style="color: #353535">视频聊天</span></mu-button>
        </mu-flex>
      </mu-container>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { TOGGLE_DELETE, TOGGLE_CHAT } from '../../store/mutation-types'
export default {
  name: 'MineView',
  data() {
    return {
      value: ' ',
      open: false
    }
  },
  computed: mapGetters({ userData: 'mineUserData' }),
  methods: {
    ...mapMutations({ close: TOGGLE_DELETE }),
    ...mapActions(['showChat']),
    start() {
        if (this.userData._id === 0) {
          return
        }
        this.close(false)
        this.showChat(this.userData)
      },
      closeBottomSheet() {
      this.open = false;
    },
    openBotttomSheet() {
      this.open = true;
    }
  }
}

</script>
<style scoped>
.VideoChat {
  margin-top: 20px;
}

.detail-view {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: #EBEBEB;
  background-size: 100%;
}

.person_img {
  margin: 10px;
  width: calc(36% - 50px);
  height: 70px;
  background-color: transparent;
}

.person_name {
  position: relative;
  bottom: 70px;
  left: 105px;
}

.CCA_id>span {
  position: relative;
  bottom: 70px;
  left: 105px;
  color: #E4E4E4;
}

.Qr {
  position: relative;
  bottom: 103px;
  right: -275px;
  font-size: 30px;
}

.person_box {
  margin: 20px auto;
  width: 100%;
  height: 90px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;
}

.wallet_bar {
  margin-bottom: 20px auto;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;
}

.wallet_span>span {
  display: block;
  margin-left: 20px;
  line-height: 50px;
  font-size: 20px;
  color: #090909
}

.wallet_span>span>span {
  color: #A4A4A4
}

/**/
.phone_bar {
  margin-bottom: 20px auto;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;
}

.phone_span {
  display: block;
  margin-left: 20px;
  line-height: 50px;
  font-size: 20px;
  color: #090909
}

.like {
  margin: 20px auto;
}

.like_bar {
  margin: 0 auto;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #EBEBEB;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;
}

</style>
