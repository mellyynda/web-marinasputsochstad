<template>
    <div class="cover">
      <div class="content-box flex-container">
        <div class="action-box">
          <h1>Prisvärd städning och fönsterputs i Stockholms län</h1>
          <router-link to="/services" >Ta mig till prislistan</router-link>
        </div>
      </div>
      
    </div>
    <div class="content-box">
      <Article 
        title="Toppklass städservice"
        text="Vi erbjuder professionell och effektiv städning till dig som har ett aktivt liv men ändå vill komma till ett skinande rent hem! Vi utför städning i hela Stockholms Län. Vi erbjuder tjänster för hem och företag av hög kvalite."
        bold="Din tid är värdefull. Gör det enkelt för dig, anlita oss!"
        img="home/glove.png"
        imgAlt="cleaning surface"
      />
    </div>

    <div class="welcome content-box">
      <h3>Marinas Puts &#38; Städ AB sätter kvaliten i fokus! </h3>
      <div class="text-box">
        <p>Vill du ha hjälp med till exempel hemstädning, storstädning, kontorsstädning, trappstädning, fönsterputs eller flyttstädning?  Kika i menyn ovan för att se vad vi har att erbjuda samt mer information. </p>
        <div class="list">
          <p>Varför ska du välja oss:</p>
          <ul>
            <li>Vi ger ditt hem kärlek- vi hjälper dig med allt.</li>
            <li>Städningen är anpassad efter dina behov.</li>
            <li>Du får alltid samma städare.</li>
            <li>Vi har företagsförsäkring.</li>
            <li>En nöjd kund är guld värd!</li>
          </ul>
        </div>
      </div>
      <router-link to="/about">Mer om oss →</router-link>
      
    </div>
</template>

<script>
import Article from '../components/Article.vue'

export default {
  name: 'Home',
  components: {
    Article
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px -30px 60px 0px inset;
}
.flex-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.action-box {
  width: 100%;
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
  text-transform: initial;
}
.action-box a {
  color: #fff;
  background: #88C341;
  padding: 8px 15px;
  border-radius: 20px;
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(255,255,255,0.5) inset;
}
.action-box a:hover,
.action-box a:active{
  background: #79ad3a;
}

.welcome{
  margin-bottom:40px;
}
.welcome h3, .welcome a {
  margin-bottom:25px;
}
.text-box {
  display: flex;
  gap: 6%;
  align-items: center;
  justify-content: space-between;
}
.text-box>p, .text-box>.list{
  flex: 0 0 47%;
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
.welcome>a {
  text-transform: uppercase;
  color: #27763D;
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px solid #27763D ;
  border-radius: 18px;
  padding: 9px;
}
.welcome>a:hover, .welcome>a:active, .welcome>a:focus {
  background: #27763D;
  color: #fff;
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
    align-items: flex-start;
  }
}
</style>
