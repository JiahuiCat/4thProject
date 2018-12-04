<template>
  <mu-col class="SreachUI">
    <mu-row gutter>
      <mu-button icon slot="left" @click="closeSreach(false)">
        <mu-icon value="keyboard_arrow_left" :size="30" color="#000"></mu-icon>
      </mu-button>
      <mu-auto-complete :data="fruits" v-model="value1" class="complete" placeholder="搜索friends"></mu-auto-complete>
    </mu-row>
    <div class="center">
      <div class="sreachcenter"><span>搜索指定内容</span></div>
      <div class="sreach_bar">
        <mu-chip class="demo-chip" color="#F2F2F2">
          朋友圈
        </mu-chip>
        <mu-chip class="demo-chip" color="#F2F2F2">
          文章
        </mu-chip>
        <mu-chip class="demo-chip" color="#F2F2F2">
          官方账号
        </mu-chip>
      </div>
      <div class="sreach_bar">
        <mu-chip class="demo-chip" color="#F2F2F2">
         	小说
        </mu-chip>
        <mu-chip class="demo-chip" color="#F2F2F2">
          音乐
        </mu-chip>
        <mu-chip class="demo-chip" color="#F2F2F2">
          贴图
        </mu-chip>
      </div>
    </div>
  </mu-col>
</template>
<script>
const fruits = [
  '仙女山的月亮', '小清新', '森系', '嘉瀚花园物业服务中心', 'Meatball', 'YifangCat',
  'MeiLing', 'Min090', '13232860005', '13232860000', '13232860001',
  '13232860002', '上海', '深圳', '佛山'
];
import {mapMutations} from 'vuex'
import {TOGGLE_SREACH} from '../../store/mutation-types'
export default {
  name: 'SreachView',
  data() {
    return {
      fruits,
      value1: ''
    }
  },
  methods:(
  	mapMutations({closeSreach:TOGGLE_SREACH})
  )
}

</script>
<style lang="less" scoped>
.SreachUI {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: #F2F2F2;
  background-size: 100%;
}

.sreachcenter {
  text-align: center;
  color: #BABABA;
}
.sreach_bar{
	text-align:center;
}
.demo-chip {
  color: #01860D;
  margin: 8px;
}

</style>
