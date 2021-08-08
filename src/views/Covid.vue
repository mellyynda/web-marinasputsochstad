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
        name:"Så jobbar vi för att stoppa smittspridningen",
        },
      img: "covid/corona",
      imgXS:"covid/corona-mobile",
      paras:[{
        class:"",
        text: "Vi håller oss uppdaterade och följer självklart Folkhälsomyndighetens rekommendationer när det gäller hanteringen av Covid-19."
      },{
        class:"thick",
        text: "Vi tar vårt ansvar och har förstärkt våra hygienrutiner för att minska smittspridningen:"
      },{
        class:"",
        text: "♡ Våra medarbetare arbetar inte när de har minsta symptom."
      },{
        class:"",
        text: "♡ Vi använder alltid desinfektionsmedel och handskar."
      },{
        class:"",
        text: "♡ Vi använder munskydd både på kunders begäran och när vi själva anser att det är lämpligt."
      },{
        class:"",
        text: "♡ Vi ombokar/avbokar utan extra avgifter om du som kund har minsta symptom."
      },{
        class:"thick",
        text: "Har du frågor om din städning eller hur vi arbetar utifrån Folkhälsomyndighetens rekommendationer så kontakta oss gärna, vi finns här för dig!"
      }]
    }
  }
}
</script>

<style scoped>

</style>