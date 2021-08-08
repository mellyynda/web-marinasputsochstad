<template>
<div class="backdrop" @click.self="closeModal">
  <div class="modal" :class="{ sale: theme === 'sale', dark: theme === 'dark' }"> 
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
.modal {
    width: 95%;
    max-width: 600px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1{
    color: #03cfb4;
    border: none;
    padding:0;
  }
  .modal p{
    font-style:normal;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
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
</style>