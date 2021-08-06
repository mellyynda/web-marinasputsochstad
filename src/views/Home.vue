<template>
    <div class="cover">
      <div class="action-box">
        <h1>Prisvärd städning och fönsterputs i Stockholms län</h1>
        <router-link to="/services" class="action-button">Ta mig till pris listan</router-link>
      </div>
    </div>
    <ShortTextAndImg/>
    <div class="welcome">
      <h3>Välkommen till oss på Marinas Puts och Städ!</h3>
      <div class="text-box">
        <p>Vill du ha hjälp med till exempel hemstädning, storstädning, kontorsstädning, trappstädning, fönsterputs eller flyttstädning? Kika gärna i menyn ovan vad vi kan hjälpa just dig med. <br> Vi kommer till dig oavset var du är i Stockholms län.</p>
        <div class="list">
          <p>Varfor ska du välja oss:</p>
          <ul>
            <li>Vi tar hand om ditt hus/kontor och använder miljövänliga produkter.</li>
            <li>Vi gillar att hjälpa dig med vad du vill, hur du behöver med personlig anpassade erbjudande.</li>
            <li>Om kunden är nöjd vi är nöjda! <span> Din glädje är vår prioritet! </span></li>
          </ul>
        </div>
      </div>
      <router-link to="/about">Mer om oss →</router-link>
      
    </div>
</template>

<script>
import ShortTextAndImg from '../components/ShortTextAndImg.vue'


export default {
  name: 'Home',
  components: {
    ShortTextAndImg
  }
}
</script>
<style scoped>
.cover {
  height: 500px;
  background-image: url("../assets/home/clean-desk.jpg");
  background-size: cover;
  background-position:50% 85%;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px -30px 60px 0px inset;
}
.action-box {
  width: 92%;
  max-width: 600px;
  text-align: center;
  background: rgba(223, 223, 223, 0.8);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.action-box h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-variant: small-caps;
}
.action-box a {
  color: #fff;
  background: #88C341;
  padding: 8px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(255,255,255,0.5) inset;
}

.welcome{
  max-width: 1250px;
  margin: 0 auto 40px auto;
}
.welcome h3, .welcome a {
  margin: 0 8% 25px 8%;
}
.text-box {
  margin: 0 8%;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: space-between;
}
.text-box>p, .text-box>.list{
  flex: 0 0 50%;
}
.text-box>p {
  margin-bottom: 25px;
}
.text-box>.list p {
  font-weight: 600;
}
.text-box>.list ul {
 list-style: inside;
 margin-bottom: 20px;
}
.text-box>.list>ul>li>span {
  color: #FF1D15;
}
.welcome>a {
  text-transform: uppercase;
  color: #27763D;
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px solid #27763D ;
  border-radius: 18px;
  padding: 9px;
}

@media screen and (max-width:800px) {
  .cover {
    background-image: url("../assets/home/clean-desk-mob.jpg");
    height: 400px;
  }
}
@media screen and (max-width:647px) {
  .text-box {
    flex-direction: column;
  }
}
</style>
