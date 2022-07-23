<template>
  <div>
  <div>
      <h2>体育-改变人生</h2>
    <router-link to="/find1">体育的主页</router-link>
    <router-link to="/find2">国内体育</router-link>
    <router-link to="/find3">国外体育</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: "AA404",
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
