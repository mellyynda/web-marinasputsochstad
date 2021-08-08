<template>
  <div class="page">
   
    <div class="title">
      <img src="../assets/about/house.png" alt="house">
      <h2> Den lilla familjeföretag </h2>
    </div> 
    <img v-if="bigScreen" src="../assets/about/hands.png" alt="holding hands">
    <img v-else src="../assets/about/hands-mobile.png" alt="holding hands">
    <p>Marinas Puts &#38; Städ är den lilla städfirman med det stora hjärtat och anpassar alltid tjänsterna efter kundernas behov. Vi är baserade i Västerås och utför städningar inom Västerås med omnejd.</p>
    <p class="red">Vi vårdar våra kunder väl - utan dem vore vi ingenting!</p>
    <p>David Hertze är företagsledare och har lång och bred erfarenhet av det mesta inom städning. Han har arbetat med städning i alla former sedan 1999 och 2003 startade han eget eftersom det fanns ett behov av en städfirma med hög kvalitet och personlig prägel.</p>
    <p class="thick">- Jag hade en ambition att skapa något eget, där jag kunde använda mitt driv, erfarenhet och kunskap till att skapa något nytt. En personlig städfirma där medarbetarna har hög kompetens och trivs och där kunderna får en professionell och effektiv städning med hög kvalitet.</p>
    <p>Idag är det sju personer som arbetar på Davids Puts &#38; Städ och tillsammans har de nästan 80 års erfarenhet av städning. Medarbetarna trivs och stannar kvar på Davids Puts &#38; Städ vilket gör att det i stort sett alltid är samma personer som städar ute hos kunderna.</p>
    <p class="thick">- Min erfarenhet både som anställd och arbetsledare gör att jag vet vad som är viktigt, både för mina anställda och för våra kunder. Vår genuina passion för att skapa rena, trivsamma miljöer gör att våra kunder känner sig trygga med att vi alltid gör ett professionellt jobb och att det är samma personer som utför arbetet är en viktig del i att kunna göra det.</p>
    <p>David driver städfirman själv och utöver sina fyra barn har han ett stort intresse för fotboll, hårdrock och matlagning.</p>
    <p class="thick">- Att få göra en god plankstek till en skön låt av Alice Cooper eller Kizz är bland det bästa som finns! Plankstek är lite av min paradrätt men mina italienska frikadeller ligger inte långt efter, de får jag ofta beröm för!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bigScreen: window.innerWidth > 481
    }
  }
}
</script>

<style scoped>
.page {
  max-width: 1025px;
  margin: 40px auto;
}
.page>img, .page .title, .page p {
  margin: 0 8% 25px 8%;
}
.page>img{
  float: right;
  width: 40%;
  max-width: 400px;
  border-radius: 50%;
  margin-left:3%;
}
.page .title {
  display: flex;
  align-items: center;
}
.page .title>img {
  width: 50px;
  border-radius: 50%;
  margin-right: 8px;
}
.red {
  color: #FF1D15;
}
.thick {
  font-weight: 600;
}
@media screen and (max-width:581px) {
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page>img {
    float: none;
    margin-left: 8%;
  }
}
</style>