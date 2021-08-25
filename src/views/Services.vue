<template>
  <div class="services">    
    <div class="content-box title-box">
      <h2>Vi erbjuder städtjänster av hög kvalitet</h2>
      <p>Vår städfirma erbjuder städtjänster för hemmet, företaget och flytten.</p>
      <p>*Alla priser anges med RUT-avdrag</p>
    </div>
    <div class="card-box content-box">
      <div v-for="card in filterCards(cards)" :key="card.title">
        <Card :card="card" />
      </div>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Services',
  components: {
    Card
  },
  data() {
    return {
      cards: 
      [
        {
          title: 'Hemstädning',
          img: 'home',
          imgXS: 'home',
          price: '200kr/timme*',
          use: true,
          details: [
            {
              room:"I VARJE BOSTADSRUM:",
              item:[
                "Moppning av golv.",
                "Dammsugning av golv, mattor och stoppade möbler.",
                "Avtorkning av dörrar, fönsterbänkar, dörrkarmar, kontakter och vägguttag.",
                "Putsning av speglar.",
                "Avdammning av möbler och lampor.",
                "Avtorkning av lister.",
                "Tömning av papperskorgar.",
                "Rengöring av tak och väggar från spindelnät."
              ]
            },
            {
              room:"KÖK:",
              item:[
                "Avtorkning av diskbänk, arbetsbänk, kranar samt rengöring av diskho.",
                "Avtorkning av kakel ovanför diskbänk/arbetsbänk/spis.",
                "Avtorkning av köksskåp utvändigt.",
                "Avtorkning av socklar ( en gång I månaden).",
                "Tömning och avtorkning i och runt sopbehållare.",
                "Avtorkning av spis och ugn utvändigt.",
                "Rengöring av micro in- och utvändigt.",
                "Avtorkning av spiskåpa utsida (ej inuti)."
              ]
            },
            {
              room:"BADRUM:",
              item:[
                "Avtorkning/rengöring av badkar.", 
                "Avtorkning av badrumsskåp utvändigt.", 
                "Avtorkning/rengöring av duschkabin.",
                "Avtorkning av golvbrunn utvändigt.",
                "Rengöring av väggar.",
                "Rengöring av toalettstol i och utanpå.", 
                "Rengöring av handfat inklusive avtorkning av undersida.", 
                "Avtorkning av tvättmaskin och torktumlare."
              ]
            },
            {
              room:"SOVRUM:",
              item:[
                "Vi utför de generella momenten och dessutom", 
                "Bäddar sängar",
                "Dammtorkar sänggavel" 
              ]
            },
            {
              room:"ÖVRIGA TJÄNSTER:",
              item:[
                "Rengöring av ugn/ kylskåp inuti – 200kr/timme*.",
                "Strykning – 200kr/timme*.", 
                "Städa inuti lådor och skåp - 200kr/timme*.",
                "Bäddar rent om nya lakan finns tillgängliga  - 200kr/timme*."
              ]
            },
            {
              room:"*Alla priser anges med RUT-avdrag"
            }
          ]
        },
        {
          title: 'Kontorstädning',
          img: 'office',
          imgXS: 'office',
          price: '200kr/timme*',
          use: true,
          details: [
            {
              room:"",
              item:[
                "Rengöring av toalett.",
                "Rengöring av eventuella kök.",
                "Moppning/våttorkning.",
                "Dammsugning.",
                "Avtorkning av ytor, lister, knappar osv."
              ]
            },
            {
              room:"Fönsterputsning ingår inte i en kontorsstädning men detta kan beställas som en extratjänst.",
              item:[
              ]
            }
          ]
        },
        {
          title: 'Flyttstädning',
          img: 'move',
          imgXS: 'move',
          price: 'Ring oss för offert!',
          use: true,
          details: [
            {
              room:"I VARJE BOSTADSRUM:",
              item:[
                "Rengöring av element.",
                "Rengöring av luftventiler.",
                "Rengöring av garderober utvändigt ( invändigt om de är tömda).",
                "Rengöring av fönsterbrädor.",
                "Rengöring av dörrar, dörrfoder, golvlister, lysknappar och elektriska kontakter.", 
                "Dammsugning och moppning.",  
                "Avdamning av väggar.",
                "Fönsterputsning."
              ]
            },
            {
              room:"KÖK:",
              item:[
                "Rengöring av skåpsdörrar/ skåpluckor.",
                "Rengöring av spisplattor/ spishäll.",
                "Rengöring av köksfläkt och filter.",
                "Rengöring av luftventiler utvändigt.",
                "Rengöring av diskmaskin in- och utvändigt, inte bakom.",
                "Rengöring av ugn in- och utvändigt, ugnsplåtar rengörs",
                "Rengöring av kyl, frys och sval in- och utvändigt, under och bakom.",
                "Rengöring av skåp, bänkar och lådor  (om de är tömda).",
                "Avtorkning av väggar.",
                "Avtorkning av fast belysning."
              ]
            },
            {
              room:"BADRUM:",
              item:[
                "Rengöring av badkar, in- och utvändigt.",
               " Rengöring av toalettstol.",
                "Rengöring av vattenledningar/rör.",
                "Rengöring av väggar.",
                "Rengöring av badrumsskåp, in- och utsida.",
                "Rengöring av golvbrunnar inuti.",
                "Rengöring av tvättmaskin, torktumlare och torkskåp in- och utvändigt.",
                "Fönsterputsning.",
                "Putsning av speglar.",
                "Avtorkning av fast belysning.",
              ]
            }
          ]
        },
        {
          title: 'Trappstädning',
          img: 'stairs',
          imgXS: 'stairs',
          price: '200kr/timme*',
          use: true,
          details: [
            {
              room:"TRAPPHUS OCH ENTRÉ:",
              item:[
                "Soppning och moppning av golv.",
                "Soppning och moppning av hissgolv.",
                "Glas putsas I entrédörr.",
                "Putsning av speglar.",
                "Dammsugning av mattor."
              ]
            },
            {
              room:"TVÄTTSTUGA:",
              item:[
                "Avtorkning av tvättmaskiner och torktumlare.",
                "Soppning och moppning av golv ."
              ]
            },
            {
              room:"ÖVRIGA TJÄNSTER:",
              item:[
                "Element våttorkas – 200kr/timme*.",
                "Ledstång våttorkas – 200kr/timme*.", 
                "Väggar i hiss rengörs - 200kr/timme*."
              ]
            },
            {
              room:"*Alla priser anges med RUT-avdrag"
            }
          ]
        },
        {
          title: 'Strykning',
          img: 'shirts',
          imgXS: 'shirts',
          price: '200kr/timme*',
          use: true,
          details: [
            {
              room:"Behöver du hjälp med strykning? Vi kan hjälpa dig med att både stryka kläder och hemtextilier.",
              item:[]
            },
          ]
        },
        {
          title: 'Fönsterputs',
          img: 'window',
          imgXS: 'window',
          price: 'Ring oss för offert!',
          use: true,
          details: [
            {
              room:"Vi utför alla typer av fönsterputs med toppen resultat. Kontakta oss för offert eller mer information!",
              item:[]
            },
          ]
        },
        {
          title: 'Storstädning',
          img: 'big',
          imgXS: 'big',
          price: 'Ring oss för offert!',
          use: true,
          details: [
            {
              room:"I VARJE BOSTADSRUM:",
              item:[
                "Dammsugning och moppning av golv.",
                "Avdamning av väggar.",
                "Fönsterputsning och rengöring av fönsterkarmar.",
                "Rengöring av element.",
                "Rengöring av garderober på utsidan.",
                "Rengöring av golvlister, dörrar, dörrfoder, elektriska kontakter, lysknappar.",
                "Rengöring av fönsterbrädor och karmar.",
                "Rengöring av luftventiler på utsidan.",
                "Fönsterputsning."
              ]
            },
            {
              room:"KÖK:",
              item:[
                "Rengöring av kyl, frys och sval in- och utvändigt.",
                "Rengöring av ugn in- och utvändigt och ugnsplåtar.",
                "Rengöring av spishäll och spisplattor.",
                "Rengöring av diskmaskin utvändigt ( invändigt och bakom bara om man kommer överens om det).",
                "Rengöring av skåp, lådor och bänkar.",
                "Rengöring av skåpsluckor/ skåpsdörrar.",
                "Rengöring av luftventiler på utsidan.",
                "Rengöring av köksfläkt på utsidan ( rengörs på insidan om man kommer överens om det).",
                "Avtorkning av väggar.",
                "Avtorkning av fast belysning.",
              ]
            },
            {
              room:"BADRUM:",
              item:[
                "Rengöring av toalettstol och handfat.",
                "Rengöring av badkar in- och utvändigt.",
                "Rengöring av vattenledningar/ rör.",
                "Rengöring av väggar.",
                "Rengöring av tvättmaskin, torktumlare och torkskåp utvändigt.",
                "Rengöring av badrumsskåp in- och utvändigt.",
                "Fönsterputsning.",
                "Putsning av speglar.",
                "Avtorkning av fast belysning.",
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    filterCards(cards) {
     return cards.filter(card => card.use)
    }
  }
}
</script>

<style scoped>
.services {
  margin: 25px auto;
}
.title-box{
  margin-bottom: 35px;
}
.card-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3%;
  align-items: center;
}
.card-box>div {
  flex: 0 1 245px;
  margin-bottom: 25px;
}
</style>