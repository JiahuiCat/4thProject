<template>
  <div class="find_bg" ref="findBg">
    <div class="Discover" ref="Discover">
      <div class="CircleOfFriends_bar" @click="showCircle(true)">
        <div class="bar_img">
          <img src="../../assets/friends_logo.jpg" class="bar_img_logo">
        </div>
          <div class="bar_span">Circle Of Friends</div>
        </div>
        <!-- Qr -->
        <div class="Qr_bar">
          <div class="Qr_img">
            <mu-icon value="linked_camera" class='Qr'></mu-icon>
          </div>
          <div class="Qr_span">扫描QR Code</div>
        </div>
        <!-- 扫一扫 -->
        <div class="Scan_bar">
          <div class="Scan_img">
            <img src="../../assets/Yao.jpg" class="Yao_logo">
        </div>
            <div class="Scan_span">摇一摇</div>
          </div>
          <!-- 看一看 -->
          <div class="Qr_bar">
            <div class="Qr_img">
              <mu-icon value="filter_vintage" class='Qr'></mu-icon>
            </div>
            <div class="Qr_span">看一看</div>
          </div>
          <!-- 扫一扫 -->
          <div class="Scan_bar">
            <div class="Scan_img">
              <mu-icon value="plus_one" class='Scan'></mu-icon>
            </div>
            <div class="Scan_span">搜一搜</div>
          </div>
          <!--附近的人  -->
          <div class="CircleOfFriends_bar">
            <div class="bar_img">
              <img src="../../assets/friends_logo.jpg" class="bar_img_logo">
        </div>
              <div class="bar_span">附近的人</div>
            </div>
            <div class="CircleOfFriends_bar">
              <div class="bar_img">
                <img src="../../assets/friends_logo.jpg" class="bar_img_logo">
        </div>
                <div class="bar_span">游戏</div>
              </div>
            </div>
          </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'Discover',
  mounted() {
    this.$nextTick(() => {
      this.Discover = new BScroll(this.$refs.Discover, { click: true })
    })
  },
  methods:{
    ...mapMutations({showCircle:'TOGGLE_CIRCLE'})
  }
}

</script>
<style scoped>
.find_bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 50px;
  overflow: hidden;
}

.Discover {
  position: fixed;
  top: 40px;
  bottom: 50px;
  left: 0;
  right: 0;
  width: 100%;
}

.CircleOfFriends_bar {
  width: 100%;
  height: 53px;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 2px #EBEBEB;
}

.bar_img {
  margin: 10px;
}

.bar_img_logo {
  float: left;
  display: block;
  width: 35px;
  height: 30px;
  margin: 12px 10px;
}

.bar_span {
  font-size: 17px;
  line-height: 53px;
}

.Qr_bar {
  width: 100%;
  height: 53px;
  margin-top: 25px;
  background-color: #fff;
  box-shadow: 2px 2px 2px #EBEBEB;
}

.Qr_img {
  margin: 10px;
}

.Qr {
  float: left;
  display: block;
  margin: 12px 10px;
}

.Qr_span {
  font-size: 17px;
  line-height: 53px;
}

.Yao_logo {
  float: left;
  display: block;
  width: 40px;
  height: 40px;
  margin: 8px 6px;
}

.Scan_bar {
  width: 100%;
  height: 53px;
  background-color: #fff;
  box-shadow: 2px 2px 2px #EBEBEB;
}

.Scan_img {
  margin-left: 10px;
}

.Scan {
  float: left;
  display: block;
  margin: 12px 10px;
}

.Scan_span {
  font-size: 17px;
  line-height: 50px;
}

</style>
