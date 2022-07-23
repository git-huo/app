<template>
  <div>
    <div>
      <ul>
        <li>
          <router-link to="/contacts/all_contacts">ALL_Contacts</router-link>
        </li>
        <li><router-link to="/contacts/alice">Alice</router-link></li>
        <li><router-link to="/contacts/bob">Bob</router-link></li>
      </ul>
      <button @click="but(arr[Math.floor(Math.random() * 3)])">随机显示</button>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AA404",
  data() {
    return {
      arr: ["/contacts/all_contacts", "/contacts/alice", "/contacts/bob"],
    };
  },
  methods: {
    but(targetPath, targetName) {
      console.log(this.$route);
      this.$router.push({
        // name: targetName,
        path: targetPath,
      });
    },
  },
  // mounted(){
  //   console.log(this.$router);
  // }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
