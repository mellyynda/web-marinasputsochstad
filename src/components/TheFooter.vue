<template>
  <footer>
    <div class="content-box wrapper">
      <div class="half">
        <h4>FÖLJ OSS</h4>
        <div class="footer-elem">
          <img class="social" src="../assets/icons/social/facebook.png" alt="gå till facebook">
          <img class="social" src="../assets/icons/social/instagram.png" alt="gå till instagram">
        </div>
        <div class="footer-elem">
          <span><router-link to="/covid-info">Så hanterar vi Covid-19</router-link></span>
        </div>
        <div class="footer-elem">
          <span>Marinas Puts &#38; Städ  AB 2021</span>
        </div>
        <div class="footer-elem">
          <span><a href="https://github.com/mellyynda" target="_blank">Website created by @mellyynda © Alla rättigheter förbehållna</a></span>
        </div>
      </div>

      <div class="half">
        <h4>KONTAKTA OSS</h4>
        <div class="contact-details">
          
          <a href="tel:+46760853358">
            <img class="icon" alt="ring oss" src="../assets/icons/call.png">
            <span>0760853358</span>
          </a>
          
          <a href="mailto:info@marinasputs.se?subject=Städning%20förfrågan">
            <img class="icon" alt="mejla oss" src="../assets/icons/email.png">
            <span>info@marinasputs.se</span>
          </a>
          
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
}
.wrapper {
  display: flex;
  gap: 6%;
}
.half {
  flex: 0 0 47%;
  height: 100%;
  font-size: 0.68rem;
}
h4 {
  font-size: 1.2rem;
  margin: 20px 0;
}
.footer-elem {
  margin: 10px 0;
}
.social {
  width: 32px;
  margin-right: 15px;
  cursor: pointer;
  display: none;
}
.contact-details>a {
 display: flex;
 align-items: center;
 margin-top: 10px;
}
.icon {
  width: 20px;
  max-height: 50px;
  cursor: pointer;
  margin:0 5px 0 0;
}
.contact-details span {
  font-family: 'Montserrat', 'Open Sans', sans-serif;
}
a {
  color: #fff;
}
</style>