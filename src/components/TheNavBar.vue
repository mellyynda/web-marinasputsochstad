<template>
<div class="content-box">
  <nav id="nav">
    <router-link to="/" class="logo-container">
      <img class="logo" alt="logo" src="../assets/logo.jpg">
    </router-link>
    <div class="nav-elem">
      <router-link to="/services" :class="{ 'nav-link': true, active: currentRoute === 'Services' }">Städtjänster</router-link>
      <router-link to="/about" :class="{ 'nav-link': true, active: currentRoute === 'About' }">Om oss</router-link>
    </div>
  </nav>
</div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const currentRoute = computed(() => {
      return useRoute().name
    })
    return { currentRoute }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 10%;
}
.logo-container {
  max-width: 250px;
}
.logo {
  width: 90%;
  padding: 25px 10px;
}
.nav-elem {
  flex-grow: 1;
  display: inline-flex;
  justify-content: center;
  gap: 10%;
}
.nav-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.26rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #818181;
  white-space: nowrap;
}
.active {
  color: #000;
  border-bottom: 2px solid #000;
}
nav .nav-elem a:hover,
nav .nav-elem a:active{
  transform: scale(1.04) ;
}
@media screen and (max-width:640px) {
  .nav-elem {
    align-self: stretch;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
}
</style>