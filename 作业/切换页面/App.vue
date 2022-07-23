<template>
  <div>
    <div>
      <router-link to="/find"> 首页</router-link>
      <router-link to="/list">分类</router-link>
      <router-link to="/part">订单</router-link>
      <router-link to="/my">我的</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>