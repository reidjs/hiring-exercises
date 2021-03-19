<template>
  <div id="app" class="min-h-screen w-full bg-gray-100">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("initializeStore")
  },
}
</script>

<style></style>
