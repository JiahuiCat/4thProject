<template>
  <div>
    <div class="four">
      <mu-list class="inbox">
        <mu-list-item button :ripple="false" class="Recommend">
          <mu-list-item-action>
            <mu-icon value="person_add"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>朋友推荐信息</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" class="room">
          <mu-list-item-action>
            <mu-icon value="group"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>聊天室</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" class="Label">
          <mu-list-item-action>
            <mu-icon value="loyalty"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>标签</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="assignment_ind"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>官方账号</mu-list-item-title>
        </mu-list-item>
      </mu-list>
  	</div>
      <div class="contentA" ref="contentA">
      <mu-list textline="two-line">
        <mu-sub-header>A</mu-sub-header>
        <mu-list-item avatar button v-for=" f in friendsList" :key="f._id" class="friendsList" @click="showMine(f._id)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="f.avatar"/>
        </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{f.name}}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'Friends',
  mounted() {
    this.$nextTick(() => {
      this.contentA = new BScroll(this.$refs.contentA, { click: true })
    })
  },
  computed:mapGetters(['friendsList']),
  methods:mapActions(['showChat','showMine']),
}

</script>
<style scoped>
.four {
	position: fixed;
	top: 60px;
	left: 0;
	bottom: 0;
  	width: 100%;
  	background-color: #fff;
}
.inbox {
  box-shadow: 2px 2px 2px #EBEBEB;
}
.Recommend {
  border-bottom: 1px solid #EBEBEB;
}
.room {
  border-bottom: 1px solid #EBEBEB;
}
.Label {
  border-bottom: 1px solid #EBEBEB;
}
.friendsList{
	border-bottom: 1px solid #EBEBEB;
}
.contentA{
	position: fixed;
	top: 280px;
	left: 0;
	bottom: 56px;
	width: 100%;
	overflow: hidden;
	background-color: #fff;
}
</style>
