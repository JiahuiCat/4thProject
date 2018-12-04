<template>
  <div id="app">
    <div class="content-top">
      <TopNav></TopNav>
    </div>
    <router-view />
    <!-- 渲染路由的子组件 -->
    <div class="tabbar">
      <bottom-tab></bottom-tab>
    </div>
    <chatView v-if="chat"></chatView>
    <!-- 详情页 -->
    <mineView v-if="showMine"></mineView>
    <!-- 搜索页面 -->
    <sreachView v-if="closeSreach"></sreachView>
    <!-- 朋友圈 -->
    <circleOfFirends v-if="showCircle"></circleOfFirends>
    <!-- 聊天讯息 -->
    <chatMsg v-if="showChatMsg"></chatMsg>
    <!--钱包-->
    <wallet v-if="showWallet"></wallet>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TopNav from './components/top/TopNavigation.vue'
import BottomTab from './components/bottom/BottomTab.vue'
import ChatView from './components/chatView/ChatView'
import MineView from './components/MineView/MineView'
import SreachView from './components/sreachView/SreachView'
import CircleOfFirends from './components/circle/circleOfFirends.vue'
import ChatMsg from './components/chatMsg/chatMsg'
import Wallet from './components/wallet/wallet'
export default {
  name: 'App',
  computed: mapState({ allData: 'data', chat: 'chat', showMine: 'showMine', closeSreach: 'closeSreach',showCircle:'showCircle',showChatMsg:'showChatMsg',showWallet:'showWallet'}),
  components: {
    TopNav,
    BottomTab,
    ChatView,
    MineView,
    SreachView,
    CircleOfFirends,
    ChatMsg,
    Wallet
  }
}

</script>
<style>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>
