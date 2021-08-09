<template>
  <section class="contact-bar">
    <div class="contact-details content-box">
      <a href="tel:+46760853358">
        <img class="icon" alt="ring oss" src="../assets/icons/call.png">
        <span>0760853358</span>
      </a>
      <a href="mailto:info@marinasputs.se?subject=Städning%20förfrågan">
        <img class="icon" alt="mejla oss" src="../assets/icons/email.png">
        <span>info@marinasputs.se</span>
      </a>
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 100;
}
.contact-details,
.contact-details>a {
  display: flex;
  align-items: center;
  color: #fff;
  height: 100%;
}
.contact-details>a:first-child{
  margin-right: 5%;
}
.icon {
  width: 30px;
  max-height: 50px;
  margin-right:5px;
}
.contact-details a span {
  font-family: 'Raleway', 'Open Sans', sans-serif;
  font-size: 1.1rem;
}
</style>