<template>

  <section class="top">
    <TheContactBar/>
    <TheNavBar/>
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
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheContactBar,
    TheNavBar,
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
  margin-top: 50px;
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
  width: 100%;
  max-width: 190px;
}
.active {
  color: #A09F9F;
}
</style>
