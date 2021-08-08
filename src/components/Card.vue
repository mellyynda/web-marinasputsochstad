<template>
    <div class="card" @mouseover="focus">
      <h1>{{ card.title }}</h1>
      <img :src="require('../assets/services/' + card.imgXS + '.png')" :alt="card.title">
      <p>{{ card.price }}</p>
      <!-- <a :href='require("../downloads/" + card.img + ".pdf")' download> -->
      <p class="details"  @click="toggleModal">Se detaljer</p>

      <teleport to=".modals" v-if="showModal">
        <Modal theme="sale" @close="toggleModal" >
          <template v-slot:links>
            <a href="">sign up now</a>
            <a href="">more info</a>
          </template>
          <h1>Ninja Giveaway!</h1>
          <p>Grab your ninja swag for half price</p>
        </Modal>
      </teleport>
      <!-- </a> -->
      <!-- <div class="text" v-if="showDetails"> 
      <h1>details</h1>
      </div> -->
    </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  props: ['card'],
  components: {
    Modal
  },
  data() {
    return {
      hasFocus: false,
      showModal: false
    }
  },
  methods: { 
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal)
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
.card>.details {
  width: fit-content;
  text-transform: uppercase;
  background: #88C341;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  white-space: nowrap;
  cursor: pointer;
}
.text {
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(102, 107, 103, 0.4);
}
</style>