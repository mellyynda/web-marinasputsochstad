<template>
  <h1>{{ card.title }}</h1>
  <img :src="card.photoUrlXS" :alt="card.title">
</template>

<script>
export default {
  props: ['card'],
}
</script>

<style>

</style>