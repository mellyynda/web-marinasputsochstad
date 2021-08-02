<template>

  <section class="top">
    <TheContactBar/>
    <nav id="nav">
      <router-link to="/" class="logo">
        <img class="logo" alt="logo" src="./assets/logo.png">
        <img class="logo" alt="logo" src="./assets/company-name.png">
      </router-link>
      <div class="nav-elem">
        <router-link to="/services" :class="{ 'nav-link': true, active: currentRoute === 'Services' }">Tjänster</router-link>
        <router-link to="/about" :class="{ 'nav-link': true, active: currentRoute === 'About' }">Om oss</router-link>
      </div>
    </nav>
  </section>
  
  <main>
    <router-view/>
  </main>

  <TheFooter/>
  
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheContactBar from './components/TheContactBar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheContactBar,
    TheFooter,
  },
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
  justify-content: space-around;
}
.nav-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #000;
  margin-right: 100px;
  white-space: nowrap;
}
.logo {
  width: 80%;
  max-width: 220px;
}
.active {
  color: #A09F9F;
}
</style>
