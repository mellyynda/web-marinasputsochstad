<template>
    <div class="cover">
      <!-- <img src="../assets/home/clean-desk.jpg" alt="ren skrivbord"> -->
      <h1>PRISVÄRD STÄDNING OCH FÖNSTERPUTS I STOCKHOLMS LÄN</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla ipsam alias nisi! Fugit corrupti molestias provident ut? Facere molestias beatae eius quos perspiciatis hic porro maxime placeat dolorem at.</p>
    </div>
    <div>somedfdh
      <h2>a new title here</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur nostrum debitis, veniam magnam, recusandae ad repellat dolore asperiores minus aut iusto quis id architecto inventore sapiente quas, maxime blanditiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptatem, commodi beatae molestiae a perspiciatis sunt. Modi recusandae temporibus itaque consequatur cupiditate placeat culpa nobis accusamus, quo molestiae reiciendis!Lorem</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit quis adipisci quas incidunt quos soluta. Dolores nisi ad corporis impedit ab voluptatem beatae delectus tempora mollitia nobis, enim obcaecati!</p>
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
  height: 500px;
  background-image: url("../assets/home/clean-desk-wide.jpg");
  background-size: cover;
  background-position:50% 85%;
  background-repeat: no-repeat;
}

@media screen and (max-width:800px) {
  .cover {
    background-image: url("../assets/home/clean-desk-wide-mob.jpg");
    height: 400px;
  }
}
</style>
