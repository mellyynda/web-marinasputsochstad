<template>
  <section class="contact-bar">
    <TheContactDetails/>
    <div class="social"></div>
  </section>
</template>

<script>
import TheContactDetails from './TheContactDetails.vue'

export default {
  name: 'TheContactBar',
  components: {
    TheContactDetails
  }
}
</script>

<style scoped>
.contact-bar {
  height: 50px;
  background-color:#27763D;
}
</style>