<template>
    <div class="cover">
      <img src="../assets/home/clean-desk.jpg" alt="ren skrivbord">
      <h1>PRISVÄRD STÄDNING OCH FÖNSTERPUTS</h1>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
.cover {
  height: 100%;
  /* object-fit: cover; */
  overflow: hidden;
  position:relative;
  /* background-image: url("../assets/home/clean-desk-wide.jpg");
  background-size: cover;
  background-position:50% 85%;
  background-repeat: no-repeat; */
}
.cover>img{
  /* max-height: 100%; */
  width: 150%;
  position: absolute;
  bottom: 0;
  left: -25%;
  z-index: -1;
}

@media screen and (min-width:950px) {
  .cover>img {
    /* bottom: 55%; */
     /* background-image: url("../assets/home/clean-desk-mobile.png"); */
     /* height: 50%; */
  }
}
</style>
