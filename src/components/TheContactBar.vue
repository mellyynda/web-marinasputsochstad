<template>
  <section class="contact-bar">
    <div class="contact-details">
      <img class="icon" alt="ring oss" src="../assets/icons/call.png">
      <span>0123456789</span>
      <img class="icon" alt="mejla oss" src="../assets/icons/email.png">
      <span>info@marinasputs.se</span>
    </div>
    <div class="social"></div>
  </section>
</template>

<script>

export default {
  name: 'TheContactBar',
}
</script>

<style scoped>
.contact-bar {
  height: 50px;
  background-color:#27763D;
  position: fixed;
  width: 100%;
}
.contact-details {
  display: flex;
  align-items: center;
  color: #fff;
  height: 100%;
}
.icon {
  width: 30px;
  max-height: 50px;
  margin:0 5px 0 15px;
}
.contact-details span {
  font-family: 'Montserrat', 'Open Sans', sans-serif;
}
</style>