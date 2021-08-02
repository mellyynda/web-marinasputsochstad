<template>
  <footer>

    <div class="half">
      <h4>FÖLJ OSS</h4>
      <img class="icon" src="../assets/icons/social/facebook.png" alt="gå till facebook">
      <img class="icon" src="../assets/icons/social/instagram.png" alt="gå till instagram">
      <a href="">Så hanterar vi Covid-19</a>
      <small>Marinas Puts &#38; Städ  AB 2021</small>
      <small><a href="https://github.com/mellyynda">Website created by @mellyynda © Alla rättigheter förbehållna</a></small>
    </div>

    <div class="half">
      <h4>KONTAKTA OSS</h4>
      <div class="contact-details">
        <div>
          <img class="icon" alt="ring oss" src="../assets/icons/call.png">
          <span>0123456789</span>
        </div>
        <div>
          <img class="icon" alt="mejla oss" src="../assets/icons/email.png">
          <span>info@marinasputs.se</span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
footer {
  background-color: #27763D;
  color: #fff;
  display: flex;
}
.half {
  flex: 0 0 50%;
  height: 100%;
  padding-left: 8%;
}
h4 {
  font-size: 1.6rem;
  margin-top: 20px;
}
.contact-details>div {
 display: flex;
 align-items: center;
 margin-top: 20px;
}
.icon {
  width: 30px;
  max-height: 50px;
  cursor: pointer;
  margin:0 5px 0 0;
}
.contact-details span {
  font-family: 'Montserrat', 'Open Sans', sans-serif;
}
</style>