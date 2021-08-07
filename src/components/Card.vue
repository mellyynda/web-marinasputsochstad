<template>
  <!-- <a href="../downloads/home.pdf" download> -->
    <div class="card" @mouseover="focus">
      <h1>{{ card.title }}</h1>
      <img :src="require('../assets/services/' + card.imgXS + '.png')" :alt="card.title">
      <p>{{ card.price }}</p>
      <p class="price">Se detaljer</p>
    </div>
  <!-- </a>   -->
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {
      hasFocus: false,
    }
  },
  methods: {
    focus() {

    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(223, 223, 223, 0.8);
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 0 4px 4px rgba(000, 000, 000, 0.1);
}
.card>* {
  margin-bottom: 20px;
}
.card>h1 {
  font-size: 1.5rem;
}
.card>img {
  width: 80%;
  border-radius: 50%;
}
.card>.price {
  width: fit-content;
  text-transform: uppercase;
  background: #88C341;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  white-space: nowrap;
}
</style>