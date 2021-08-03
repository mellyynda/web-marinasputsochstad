<template>
    <div class="cover">
      <div class="action-box">
        <h1>Prisvärd städning och fönsterputs i Stockholms län</h1>
        <router-link to="/services" class="action-button">Ta mig till pris listan</router-link>
      </div>
    </div>
    <ShortTextAndImg/>
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
@media screen and (max-width:800px) {
  .cover {
    background-image: url("../assets/home/clean-desk-mob.jpg");
    height: 400px;
  }
}
</style>
