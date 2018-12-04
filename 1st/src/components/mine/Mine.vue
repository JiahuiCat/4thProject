<template>
  <div class="personal">
    <div class="mineO" ref="mineO">
      <div>
        <div class="person_box">
          <div >
             <img :src="self.avatar" class="person_img"/>
          </div>
          <div class="person_cont">
            <span class="person_name">{{self.name}}</span>
            <div class="CCA_id"><span>CCA_id:{{self.phone}}</span></div>
            <mu-icon value="dashboard" class='Qr'></mu-icon>
          </div>
        </div>
      </div>
      <!-- wallet -->
      <div class="wallet_bar">
        <div class="wallet_img">
          <mu-button icon @click="showWallet(true)" >
            <mu-icon value="payment" class='sdo'></mu-icon>
          </mu-button>
          <div class="change_span">钱包</div>
        </div>
      </div>
      <div class="like">
        <div class="like_bar">
          <div class="wallet_img">
            <mu-icon value="loyalty" class='sdo'></mu-icon>
            <div class="wallet_span">收藏</div>
          </div>
        </div>
        <div class="like_bar">
          <div class="wallet_img">
            <mu-icon value="perm_media" class='sdo'></mu-icon>
            <div class="wallet_span">相簿</div>
          </div>
        </div>
        <div class="like_bar">
          <div class="wallet_img">
            <mu-icon value="redeem" class='sdo'></mu-icon>
            <div class="wallet_span">优惠券</div>
          </div>
        </div>
        <div class="like_bar">
          <div class="wallet_img">
            <mu-icon value="face" class='sdo'></mu-icon>
            <div class="wallet_span">贴图市集</div>
          </div>
        </div>
      </div>
      <!-- setting -->
      <div class="setting">
        <div class="like_bar">
          <div class="wallet_img">
            <mu-icon value="settings" class='sdo'></mu-icon>
            <div class="wallet_span">设定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
import {TOGGLE_WALLET} from '../../store/mutation-types'
export default {
  name: 'Mine',
  mounted() {
    this.$nextTick(() => {
      this.mineO = new BScroll(this.$refs.mineO, { click: true })
    })
  },
  computed:mapState({
    self:state => state.data.self
  }),
  methods:{
    ...mapMutations({showWallet:TOGGLE_WALLET})
  }
}

</script>
<style scoped>
.personal {
  background-color: #EBEBEB;
}
.mineO{
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  overflow: hidden;
}
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
.CCA_id>span {
  position: relative;
  bottom: 70px;
  left: 105px;
  color: #E4E4E4;
}
.Qr {
  position: relative;
  bottom: 103px;
  left: 270px;
  font-size: 30px;
}
.person_box {
  margin: 20px auto;
  width: 100%;
  height: 90px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;
}
.change_span{
  position: relative;
  bottom: 37px;
  left: 62px;
  font-size: 18px;
}
.wallet_bar {
  margin-bottom: 20px auto;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 2px #EBEBEB;
  background-color: #fff;
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
.sdo {
  margin: 13px 20px;
  float: left;
}
.wallet_span {
  font-size: 17px;
  line-height: 50px;
}

</style>
