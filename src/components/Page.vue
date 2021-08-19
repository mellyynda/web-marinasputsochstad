<template>
  <div class="page content-box">
   
    <div class="title">
      <h2>{{ title.name }}</h2>
    </div> 
    <img v-if="bigScreen" :src="require('../assets/' + img + '.png')" :alt="img">
    <img v-else :src="require('../assets/'+ imgXS + '.png')" :alt="img">
    
    <p v-for="(para, index) in paras" :class="para.class" :key="index">{{ para.text }}</p>
  </div>
</template>

<script>
export default {
  props:['title', 'paras', 'img', 'imgXS'],
  data() {
    return {
      bigScreen: window.innerWidth > 481
    }
  }
}
</script>

<style scoped>
.page {
  margin: 25px auto;
}
.page>img, .page .title, .page p {
  margin-bottom:25px;
}
.page>img{
  float: right;
  width: 40%;
  max-width: 400px;
  border-radius: 50%;
  margin-left:3%;
}
.page .title {
  display: flex;
  align-items: center;
}
.page .title>img {
  width: 50px;
  border-radius: 50%;
  margin-right: 8px;
}
.red {
  color: #db1a13;
}
.thick {
  font-weight: 600;
}
@media screen and (max-width:581px) {
  .page {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .page h2 {
    width: 100%;
  }
  .page>img {
    float: none;
    margin-left: 0;
    align-self: center;
    order: -1;
  }
}
</style>