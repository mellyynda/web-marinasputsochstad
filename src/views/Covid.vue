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
        name:"Så jobbar vi för att stoppa smittspridningen av Covid-19",
        },
      img: "covid/corona",
      imgXS:"covid/corona-mobile",
      paras:[{
        class:"",
        text: "Vi följer noggrant Folkhälsomyndighetens rekommendationer gällande Covid-19."
      },{
        class:"thick",
        text: "För att minska smittspridningen:"
      },{
        class:"",
        text: "♡ Medarbetarna arbetar inte när de har minsta symptom."
      },{
        class:"",
        text: "♡ Desinfektionsmedel och handskar används regelbundet."
      },{
        class:"",
        text: "♡ Vi använder munskydd (om kunden begär det)"
      },{
        class:"",
        text: "♡ Inga extra avgifter tillkommer om kunden ombokar / avbokar pga Covid- 19 symptomer"
      },{
        class:"thick red",
        text: "Kontakta oss gärna för andra frågor eller mer information, vi finns här för dig!"
      }]
    }
  }
}
</script>

<style scoped>

</style>