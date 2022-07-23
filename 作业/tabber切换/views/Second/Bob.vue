<template>
  <div>
    <h1>Bob</h1>
    <ul>
      <li @click="but('/contacts/bob/bob1', 'Bob1')">blog</li>
      <li @click="but('/contacts/bob/bob1=2', 'Bob2')">fax</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    but( val , targetName){
        this.$router.push({
          name:targetName
        })
    }
  },
};
</script>

<style>
</style>