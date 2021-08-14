<template>
    <div class="card">
      <h2>{{ card.title }}</h2>
      <img :src="require('../assets/services/' + card.imgXS + '.png')" :alt="card.title">
      <p>{{ card.price }}</p>
      <!-- <a :href='require("../downloads/" + card.img + ".pdf")' download> -->
      <p class="details"  @click="toggleModal">Se detaljer</p>

      <teleport to=".modals" v-if="showModal">
        <Modal theme="sale" @close="toggleModal" >
          <template v-slot:links>
            <a href="tel:+46760853358">ring oss</a>
            <a href="mailto:info@marinasputs.se?subject=Städning%20förfrågan">mejla oss</a>
          </template>
          <h2>{{ card.title }} ingår:
            <!-- <span @click="downloadPdf" title="download pdf">⬇</span> -->
          </h2>      
          <div v-for="room in card.details" :key="room.room">
            <h5>{{ room.room }}</h5>
            <ul>
              <li v-for="(item, index) in room.item" :key="index">{{ item }}</li>
            </ul>
          </div>          
        </Modal>
      </teleport>
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
    },
    // downloadPdf() {
    //   window.open("../downloads/home.pdf")
    // }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(223, 223, 223, 0.8);
  padding: 15px;
  border-radius: 25px;
  box-shadow: 0 0 4px 4px rgba(000, 000, 000, 0.1);
}
.card>* {
  margin-bottom: 20px;
}
.card>h2 {
  font-size: 1.6rem;
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
  padding: 5px 10px;
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