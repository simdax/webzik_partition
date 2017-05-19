<template lang="pug">
  b-nav
    b-nav-item
      p salut
    b-nav-item
      input(type="button",  @click="$root.$emit('show::modal', 'add')", value="ajouter un nouveau son !")
      b-modal(id="add", @ok="$emit('add')")
        p salut cocotte
        p ajoute un instru !
</template>

<script>
  import {bModal} from 'bootstrap-vue/lib/components';
  export default{
    name:"header",
    component: {bModal},
    data(){
      return {
        name: ""
      }
    },
  }

</script>