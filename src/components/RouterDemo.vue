<template>
  <div>
    <router-link to="/foo">主页</router-link>
    <br/>
    <router-link to="/Home">博客</router-link>
    <br/>
    <router-link to="/Reply">回答</router-link>
    <br/>
    <router-link to="/Shopping">商城</router-link>
    <br/>
    <router-link to="/Personal/胡鑫">个人中心</router-link>
    <br/>
    <a href="https://www.baidu.com/">百度</a>
    <br/>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route
      return {
        fullPath, path, name, params, query, meta
      }
    }
  }
}
</script>

