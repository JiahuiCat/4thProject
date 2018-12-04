<template>
  <mu-bottom-nav class="bottom_nav" @change="change" :value.sync="tab" >
    <mu-bottom-nav-item value="message" title="WeChat" icon="chat_bubble_outline"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="friends" title="Mail list" icon="supervisor_account"></mu-bottom-nav-item>
    <mu-badge content="2" circle color="red">
      <mu-bottom-nav-item value="discover" title="Find" icon="explore"></mu-bottom-nav-item>
    </mu-badge>
    <mu-bottom-nav-item value="mine" title="Mine" icon="person_outline"></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>
<script>
export default {
  name: 'bottomTab',
  data() {
  	return {
      tab:'message'//修饰符进行双向绑定修改tab的值,sync反向传值
    }
  },
  methods: {
  	change(val) {
  		//页面跳转
  		this.$router.push(val)//路由跳转push
  	}
  }
}
</script>
<style scoped>
	.bottom_nav{
    z-index: 50;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>