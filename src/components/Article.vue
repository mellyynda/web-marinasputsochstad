<template>
  <section class="content-2-box">
    <div class="half">
      <h2>{{ title }}</h2>
      <img class="bubbles" src="../assets/other/bubbles.png" alt="bubbles">
      <p>{{ text }}</p>
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
  max-width: 1250px;
  margin: 0 auto;
  padding: 35px 0;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
}
.half {
  position: relative;
  flex: 0 0 50%;
}
.half h2, .half p {
  margin: 0 10% 25px 8%;
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
  width: 35%;
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