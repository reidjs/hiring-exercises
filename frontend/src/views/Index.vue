<template>
  <main>
    <hero />
    <sign-in />
    <services />
  </main>
</template>

<script>
import Hero from "../components/index/Hero.vue"
import SignIn from "../components/index/SignIn.vue"
import Services from "../components/index/Services.vue"

export default {
  name: "Index",
  components: {
    Hero,
    SignIn,
    Services,
  },
}
</script>
