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
import TheContactBar from './components/TheContactBar.vue'
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheContactBar,
    TheNavBar,
    TheFooter,
  }
}
</script>

<style scoped>

</style>
