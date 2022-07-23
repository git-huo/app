<template>
  <div>
    <div>
      <router-link to="/find"> 主页</router-link>
      <router-link to="/list">新闻</router-link>
      <router-link to="/my">体育</router-link>
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