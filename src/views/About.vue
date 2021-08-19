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
        name:"Det lilla familjeföretag",
        },
      img: "about/hands",
      imgXS:"about/hands-mobile",
      paras:[{
        class:"thick",
        text: "Marinas Puts & Städ AB är ett Stockholmsbaserat familjeföretag som startades 2021. De har över 18 år erfarenhet inom branschen och många fler ska det bli!"
      },{
        class:"",
        text: "Allt började en sommarnatt när vi satt på balkongen och hade en mysig familjestund. Då kom det plötsligt tanken om att starta eget. Tillsammans med min fru och dotter gick vi igenom alla detaljer och skrev ner på ett papper hur processen skulle se ut så att vi kan skapa verklighet av våra tankar."
      }, {
        class:"thick",
        text: "Livet har inte varit enkelt men vi har alltid kämpat för att komma så långt som möjligt och få en bättre framtid."
      },{
        class:"",
        text: "Vi har alltid strävat efter utveckling och förbättring. Nu kände vi att det var dags att förverkliga våra drömmar. Det viktigaste för oss är att göra kunden nöjd genom att leverera kvalite och sätta i fokus kundens behov och önskemål."
      },{
        class:"thick",
        text: "Nu har Marinas Puts & Städ AB blivit verklighet och det värmer oss i hjärtat för att nu kan vi göra era liv enklare och era hem fräschare!"
      },{
        class:"thick red",
        text: "Välkommen som kund! ☆ Marinas Puts och Städ AB"
      }]
    }
  }
}
</script>

<style scoped>

</style>