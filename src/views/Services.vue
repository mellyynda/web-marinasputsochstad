<template>
  <div class="services">
    <div v-for="card in filterCards(cards)" :key="card.title">
      <Card :card="card" />
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
          title: 'HEMSTÄDNING',
          img: 'home',
          imgXS: 'home-xs',
          price: '250 kr/timme',
          use: true
        },{
          title: 'KONTORSTÄDNING',
          img: 'office',
          imgXS: 'office-xs',
          price: 'Ring oss för offert!',
          use: false
        },{
          title: 'FLYTTSTÄDNING',
          img: 'move',
          imgXS: 'move-xs',
          price: '40 kr/mp',
          use: true
        },{
          title: 'FÖNSTERPUTS',
          img: 'window',
          imgXS: 'window-xs',
          price: 'Ring oss för offert!',
          use: false
        },{
          title: 'STORSTÄDNING',
          img: 'big',
          imgXS: 'big-xs',
          price: 'Ring oss för offert!',
          use: true
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
  width: 95%;
  max-width: 1024px;
  margin: 45px auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
  align-items: center;
}
.services>div {
  width: 280px;
  margin-bottom: 25px;
}
</style>