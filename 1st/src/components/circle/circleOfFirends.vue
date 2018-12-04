<template>
  <div class="circleOf">
    <mu-appbar style="width: 100%;z-index:150;background-color: transparent;">
      <mu-button icon slot="left" @click="showCircle(false)">
        <mu-icon value="arrow_back" color="white"></mu-icon>
      </mu-button>
      <div class="title"></div>
      <div class="nav-right" slot="right">
        <mu-icon value="linked_camera"></mu-icon>
      </div>
    </mu-appbar>
    <div class="content" ref="circleContent">
      <div>
        <div class="bg-img">
          <div class="img">
          </div>
        </div>
        <!-- ===== -->
        <mu-avatar class="avatar" :size="72">
          <img :src="userData.avatar">
        </mu-avatar>
          <mu-container>
            <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" v-for="f in userData">
              <mu-card-header :title="userData.name">
              </mu-card-header>
              <mu-card-media :sub-title="userData.birthday">
                <img :src="userData.circle">
                </mu-card-media>
                <mu-card-text>
                  {{userData.explain}}
                </mu-card-text>
                <mu-card-actions>
                  <mu-button flat>
                    <mu-icon value="thumb_up_alt"></mu-icon>
                  </mu-button>
                </mu-card-actions>
            </mu-card>
          </mu-container>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import { TOGGLE_CIRCLE } from '../../store/mutation-types'
export default {
  name: 'circleOfFirends',
  computed: mapGetters({ userData: 'mineUserData' ,user:'friendsList'}),
  mounted() {
    this.$nextTick(() => {
          this.circleContent = new BScroll(this.$refs.circleContent, {
            click: true
          })
        }
      )},
      methods: { ...mapMutations({ showCircle: TOGGLE_CIRCLE}) }
  }

</script>
<style lang="less" scoped>
.circleOf {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color:  #EBEBEB;
  background-size: 100%;
    .content {
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 40px;
    width: 100%;
    bottom: 0;
    z-index: 80;
  }
}

.circleOf 

.bg-img {
  box-sizing: border-box;
  height: 150px;
  width: 100%;
}


.content .avatar {
  position: relative;
  display: block;
  background: #fff;
  margin: -45px 250px;
  box-sizing: content-box;
  z-index: 50;
}

</style>
