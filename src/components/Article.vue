<template>
  <section>
    <div class="half">
      <h2>{{ title }}</h2>
      <img class="bubbles" src="../assets/other/bubbles.png" alt="bubbles">
      <p class="first">{{ text }}</p>
      <p>{{ bold }}</p>
    </div>
    <img class="visual" :src="require('../assets/' + img)" :alt="imgAlt">
  </section>
</template>

<script>
export default {
  props:['title', 'text', 'bold', 'img', 'imgAlt']
}
</script>

<style scoped>
section {
  padding: 35px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.half {
  position: relative;
  flex: 0 0 50%;
}
.half h2, .half p {
  margin-bottom: 25px;
} 
.half h2, .half>.first {
  margin-right: 15%;
}
.half p:last-child {
  font-weight: bolder;
}
.bubbles {
  position: absolute;
  top: -20px;
  right: 0;
  width: 20%;
  z-index: -1;
}
.visual {
  width: 40%;
  max-width: 300px;
  border-radius: 50%;
}
@media screen and (max-width:647px) {
  section {
    flex-direction: column;
  }
  .visual {
    width: 50%;
  }
}
</style>