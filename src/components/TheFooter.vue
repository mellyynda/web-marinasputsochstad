<template>
  <footer>
    <div class="half">
      <h4>FÖLJ OSS</h4>
      <img src="../assets/icons/social/facebook.png" alt="gå till facebook">
      <img src="../assets/icons/social/instagram.png" alt="gå till instagram">
      <a href="">Så hanterar vi Covid-19</a>
      <small>Marinas Puts &#38; Städ  AB 2021</small>
      <small><a href="https://github.com/mellyynda">Website created by @mellyynda © Alla rättigheter förbehållna</a></small>
    </div>
    <div class="half">
      <h4>KONTAKTA OSS</h4>
      <TheContactDetails />
    </div>
  </footer>
</template>

<script>
import TheContactDetails from './TheContactDetails.vue'

export default {
  components: {
    TheContactDetails
  }
}
</script>

<style scoped>
footer {
  background-color: #27763D;
  color: #fff;
}
</style>