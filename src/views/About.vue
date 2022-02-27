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
        name:"",
        },
      img: "about/hands",
      imgXS:"about/hands-mobile",
      paras:[{
        class:"thick",
        text: "Marinas Puts & Städ AB är ett Stockholmsbaserat familjeföretag som startades 2021. De har över 18 år erfarenhet inom branschen och många fler ska det bli!",
      },{
        class:"",
        text: "Vi utför städtjänster för privat- och företagskunder i hela Stockholm. ",
      }, {
        class:"thick",
        text: "Vår målsättning är att göra kunden nöjd genom att leverera bra kvalité och sätta i fokus kundens behov och önskemål.",
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