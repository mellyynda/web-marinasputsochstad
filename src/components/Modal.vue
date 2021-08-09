<template>
<div class="backdrop" @click.self="closeModal">
  <div class="modal"> 
    <div @click="closeModal" class="close">X</div>
    <slot>default content</slot>
    <div class="actions">
      <slot name="links"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>


<style>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 95%;
  max-width: 600px;
  max-height: 80%;
  overflow: scroll;
  padding: 28px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  position: relative;
}
.modal .close {
  position: fixed;
  top: 120px;
  right:calc(20px + 5%);
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bolder;
}
.modal h2{
  border: none;
  padding:0;
  margin-bottom: 20px;
}
.modal h2>span{
  border-bottom: 2.8px solid #000;
  margin-left: 5%;
  cursor: pointer;
}
.modal h5{
  margin-top: 18px;
}
.modal ul{
  list-style: disc;
  list-style-position: inside;
  margin-left: 20px;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #27763D;
  padding: 8px;
  border: 1px solid #27763D;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px;
}

/* sale styles */
.modal.sale {
  background: crimson;
  color: ivory;
}
.modal.sale h1{
  color: lavender;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}

/* dark styles */
.modal.dark{
  background: darkolivegreen;
  color:gainsboro;
}
.modal.dark h1{
  color:gainsboro;
}
.modal.dark .actions {
  color: gainsboro;
}
.modal.dark .actions a {
  color: gainsboro;
}
@media screen and (min-width:636px) {
  .modal .close {
    right:calc(50% - 270px);
  }
}
</style>