<template>
  <mu-appbar style="width: 100%;">
    <mu-button icon slot="right" @click="closeSreach(true)">
      <mu-icon color="#fff" value="search"></mu-icon>
    </mu-button>
    <div class="title">{{title}}</div>
    <mu-menu placement="top-start" open-on-hover slot="right">
      <mu-button color="#303030" style="margin-top: 8px">
        <mu-icon color="#fff" value="add"></mu-icon>
      </mu-button>
      <mu-list slot="content">
        <mu-list-item button>
          <mu-list-item-title>建立聊天室</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>新增好友</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>扫描QR Code</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>收付款</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>帮助与意见反馈</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </mu-appbar>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { TOGGLE_SREACH } from '../../store/mutation-types'
export default {
  name: 'TopNavigation',
  data() {
    return {
      open: false
    }
  },
  computed: mapState({ title: 'headerTitle' }),
  methods: mapMutations({ closeSreach: TOGGLE_SREACH })
}

</script>
<style scoped>
.title {
  float: left;
}

.mu-appbar {
  background: #303030;
}

.mu-appbar .title {
  color: white;
  text-align: center;
}

.mu-appbar .mu-avatar {
  margin-left: 12px;
}

</style>
