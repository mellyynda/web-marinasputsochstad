<template>
  <div class="services">
    <div v-for="card in cards" :key="card.title">
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
      cards: [{
        title: 'HEMSTÄDNING',
        photoUrl: '../assets/services/rainbow-clean.png',
        photoUrlXS: '../assets/services/rainbow-clean-mobile.png',
        price: '250 kr/timme'
      },{
        title: 'KONTORSTÄDNING',
        photoUrl: '../assets/services/office-clean.png',
        photoUrlXS: '../assets/services/office-clean-mobile.png',
        price: 'Kontakta oss för offert!'
      },{
        title: 'FLYTTSTÄDNING',
        photoUrl: '../assets/services/move-clean.png',
        photoUrlXS: '../assets/services/move-clean-mobile.png',
        price: '40 kr/mp'
      },{
        title: 'FÖNSTERPUTS',
        photoUrl: '../assets/services/window-clean.png',
        photoUrlXS: '../assets/services/window-clean-mobile.png',
        price: 'Kontakta oss för offert!'
      },{
        title: 'STORSTÄDNING',
        photoUrl: '../assets/services/big-clean.png',
        photoUrlXS: '../assets/services/big-clean-mobile.png',
        price: 'Kontakta oss för offert!'
      }]
    }
  }
}
</script>