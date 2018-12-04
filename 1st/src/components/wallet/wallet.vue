<template>
  <div class="walletView">
    <!--导航栏-->
    <mu-appbar style="width: 100%;z-index:150;" color="#666F76" textColor="white" class="topNav">
      <mu-button icon slot="left" @click="showWallet(false)" >
        <mu-icon value="arrow_back" color="white"></mu-icon>
      </mu-button>
      <div class="title">钱包</div>
      <mu-button icon slot="right" @click="">
        <mu-icon value="widgets" color="white"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="walletTop">
      <div class="walletTopBox">
        <div class="BoxOne">
          <div class="BoxContent">
            <mu-button icon @click="" >
              <mu-icon value="filter_center_focus" color="white" :size="40"></mu-icon>
            </mu-button>
            <span>收付款</span>
          </div>
        </div>
        <div class="BoxTwo">
          <div class="BoxContent">
            <mu-button icon @click="" >
              <mu-icon value="monetization_on" color="white" :size="40"></mu-icon>
            </mu-button>
            <span>余额</span>
          </div>
        </div>
        <div class="BoxThree">
          <div class="BoxContent">
            <mu-button icon @click="" >
              <mu-icon value="credit_card" color="white" :size="40"></mu-icon>
            </mu-button>
            <span>银行卡</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {TOGGLE_WALLET} from '../../store/mutation-types'
  export default {
    name:'Wallet',
    methods:{
      ...mapMutations({showWallet:'TOGGLE_WALLET'})
    }
  }

</script>

<style lang="less" scoped>
  .walletView {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50;
    background-color: #666F76;
    background-size: 100%;
  }
  .walletTopBox{
    position: fixed;

    width: 100%;
    height: 90px;
    background-color: #666F76;
    .BoxOne{
      position: relative;
      left: 0px;
      top:1px;
      width: 34%;
      height: 88px;
      background-color:#666F76;
      .BoxContent{
        text-align: center;
        position: relative;
        top:10px;
        left: 20px;
        span{
          text-align: center;
          position: relative;
          top:15px;
          left: -47px;
          color: white;
        }
      }
    }
    .BoxTwo{
      position:relative;
      left: 34%;
      bottom: 87px;
      width: 34%;
      height: 88px;
      background-color:#666F76;
      .BoxContent{
        text-align: center;
        position: relative;
        top:10px;
        left: 15px;
        span{
          text-align: center;
          position: relative;
          top:15px;
          left: -43px;
          color: white;
        }
      }
    }
    .BoxThree{
      position:relative;
      left:68%;
      bottom: 175px;
      width: 34%;
      height: 88px;
      background-color:#666F76;
      overflow: hidden;
      .BoxContent{
        text-align: center;
        position: relative;
        top:10px;
        left: 18px;
        span{
          text-align: center;
          position: relative;
          top:15px;
          left: -47px;
          color: white;
        }
      }
    }
  }
</style>
