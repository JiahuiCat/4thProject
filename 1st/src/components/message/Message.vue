<template>
  <div class="hj">
    <!-- friends有数据 -->
    <div v-if="ajax">加载中
      <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
    </div>
    <!-- v-if和v-else为vue判断 -->
    <mu-list textline="two-line" v-else>
      <div v-for="item in friends" class="itemList" :key="item._id" ref="OneViwe">
        <!-- v-for为遍历 @click后加.stop可以阻止冒泡-->
        <v-touch @tap="itemClick(item)" @swipeleft="onSwipeleft(item._id)" @swiperight="cancelSwiper" :key="item._id">
          <!--item._id将item的id传过来-->
          <mu-list-item class="item" :class="{remove:item._id===removeId}" avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar :size="30" slot="left">
                <img :src="item.avatar">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{item.name}}</mu-list-item-title>
              <mu-list-item-sub-title>{{item.lastNum.msg}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-list-item-title><span class="getTime">{{item.lastNum.time|getTime}}</span></mu-list-item-title>
              <mu-badge :content="item.unreadNum+' '" color="red" circle v-show="item.unreadNum"></mu-badge>
              <!-- :为绑定随着value的变化而变化 +' '为字符串-->
            </mu-list-item-action>
          </mu-list-item>
          <div class="deleteButton" @click="deleteMsg(item)">
            Delete
          </div>
        </v-touch>
      </div>
    </mu-list>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import { timeDess } from '../../assets/js/computingTime'
//引入属性
export default {
  name: 'Message',
  data() { //定义一个removeId
    return {
      removeId: null
    }
  },
computed: { //计算属性的东西不能修改
    ...mapState({ //取两个为ajax和friends数据,网络请求过来的self和friend数据
      ajax: 'isAjax', //网络请求状态true时不请求
      friends: state => state.data.friends //es6写法,es5为function(state){return state.date.friends}
    }),
    ...mapGetters({ friends: 'msgViewList' })
  },
  methods: {
    ...mapActions(['deleteMsg', 'showChat']),
    onSwipeleft(id) {
      this.removeId = id //修改这个id
    },
    cancelSwiper() {
      this.removeId = null
    },
    itemClick(user) { //将当前聊天对象传过去
      //还原左滑
      this.cancelSwiper() //触发cancelSwiper()
      //跳转下一个页面
      this.showChat(user)
    }
  },
  filters: { //过滤器
    getTime(val) {
      return timeDess(val)
    }
  }
}

</script>
<style scoped>
.hj {
  background-color: rgba(255, 255, 255, .9);
  z-index: 10;
}

.getTime {
  float: right;
}

.itemList {
  position: relative;
}

.itemList .item {
  position: relative;
  margin: 1px;
  background-color: #fff;
  border-bottom: 0.5px solid #DDE1E4;
  transition: all 0.25s linear;
  z-index: 10;
  /*transition为过渡动画*/
}

.item.remove {
  transform: translateX(-50px);
}

.itemList .deleteButton {
  margin: 2px;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 93%;
  background-color: red;
  line-height: 70px;
  text-align: center;
}

</style>
