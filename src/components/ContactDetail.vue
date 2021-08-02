<template>
  <div>
    <img class="icon" :alt="alt" :src="$props.path">
    <span>{{ $props.details }} {{ $props.path }}</span>
  </div>  
</template>

<script>
export default {
props: [
  'path',
  'details',
  'alt'
]
}
</script>

<style scoped>

.icon {
  width: 30px;
  max-height: 50px;
  margin:0 5px 0 15px;
}
.contact-details span {
  font-family: 'Montserrat', 'Open Sans', sans-serif;
}
</style>