<template>
  <div class="newInstrument">      
    <p>Quel est le nom de votre instrument !</p>
    <input type="text" placeholder="name" v-model="name">
    <p>nombre de partials</p>
    <input type="number" v-model="partials">
    <p>filtre?</p>
    <p>effet?</p>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return  {
        name:'nouvelInstru',
        partials: [],
        effets:[],
      }
    },
  }
</script>