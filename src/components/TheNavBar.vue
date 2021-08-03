<template>
  <nav id="nav">
      <router-link to="/" class="logo-container">
        <img class="logo" alt="logo" src="../assets/logo.png">
        <img class="logo" alt="logo" src="../assets/company-name.png">
      </router-link>
      <div class="nav-elem">
        <router-link to="/services" :class="{ 'nav-link': true, active: currentRoute === 'Services' }">Tjänster</router-link>
        <router-link to="/about" :class="{ 'nav-link': true, active: currentRoute === 'About' }">Om oss</router-link>
      </div>
    </nav>
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
}
.logo-container {
  margin-left: 5%;  
  max-width: 130px;
}
.logo {
  width: 100%;
  max-width: 130px;
}
.nav-elem {
  margin-right: 10%;
  flex-grow: 1;
  display: inline-flex;
  justify-content: flex-end;
  gap: 10%;
}
.nav-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #000;
  white-space: nowrap;
}
.active {
  color: #A09F9F;
}
@media screen and (max-width:500px) {
  .nav-elem {
    align-self: stretch;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
}
</style>