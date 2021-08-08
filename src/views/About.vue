<template>
  <Page 
   :title="title"
   :paras="paras"  
   :img="img"
   :imgXS="imgXS"
  />
</template>

<script>
import Page from '../components/Page'

export default {
  components: {
    Page
  },
  data() {
    return {
      title: {
        name:"Den lilla familjeföretag",
        icon:true,
        iconPath:"about/house.png"
        },
      img: "about/hands",
      imgXS:"about/hands-mobile",
      paras:[{
        class:"",
        text: "Marinas Puts & Städ är den lilla städfirman med det stora hjärtat och anpassar alltid tjänsterna efter kundernas behov. Vi är baserade i Västerås och utför städningar inom Västerås med omnejd."
      },{
        class:"red",
        text: "Vi vårdar våra kunder väl - utan dem vore vi ingenting!"
      },{
        class:"",
        text: "David Hertze är företagsledare och har lång och bred erfarenhet av det mesta inom städning. Han har arbetat med städning i alla former sedan 1999 och 2003 startade han eget eftersom det fanns ett behov av en städfirma med hög kvalitet och personlig prägel."
      },{
        class:"thick",
        text: "- Jag hade en ambition att skapa något eget, där jag kunde använda mitt driv, erfarenhet och kunskap till att skapa något nytt. En personlig städfirma där medarbetarna har hög kompetens och trivs och där kunderna får en professionell och effektiv städning med hög kvalitet."
      },{
        class:"",
        text: "Idag är det sju personer som arbetar på Davids Puts & Städ och tillsammans har de nästan 80 års erfarenhet av städning. Medarbetarna trivs och stannar kvar på Davids Puts & Städ vilket gör att det i stort sett alltid är samma personer som städar ute hos kunderna."
      },{
        class:"thick",
        text: "- Min erfarenhet både som anställd och arbetsledare gör att jag vet vad som är viktigt, både för mina anställda och för våra kunder. Vår genuina passion för att skapa rena, trivsamma miljöer gör att våra kunder känner sig trygga med att vi alltid gör ett professionellt jobb och att det är samma personer som utför arbetet är en viktig del i att kunna göra det."
      },{
        class:"",
        text: "David driver städfirman själv och utöver sina fyra barn har han ett stort intresse för fotboll, hårdrock och matlagning."
      },{
        class:"thick",
        text: "- Att få göra en god plankstek till en skön låt av Alice Cooper eller Kizz är bland det bästa som finns! Plankstek är lite av min paradrätt men mina italienska frikadeller ligger inte långt efter, de får jag ofta beröm för!"
      }]
    }
  }
}
</script>

<style scoped>

</style>