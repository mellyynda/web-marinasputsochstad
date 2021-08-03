<template>
  <section>
    <div class="half">
      <h2>Städfirma i toppklass{{}}</h2>
      <img class="bubbles" src="../assets/other/bubbles.png" alt="bubbles">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <img class="visual" src="../assets/home/glove.png" alt="glove cleaning table">
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
  padding: 35px 0;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
}
.half {
  /* display: inline-block;
  width: 50%; */
  position: relative;
  flex: 0 0 50%;
}
.half h2, .half p {
  margin: 0 10% 25px 0;
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
</style>