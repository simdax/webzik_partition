<template id="note">
  <div class="note">
    <input min=0 max=7 type="range" step="1" v-model="n" >
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      note:{default:0},
      index:{required:true}
    },
    data(){
      return {
        n:0
      }
    },
    mounted(){
      this.n=this.note;
    },
    methods:{
    },
    watch:{
      n(){
        this.$parent.update(this.index,this.n);
      }
    }
  }
</script>

<style media="screen">
  .note{
    height: 15px;
    width:  5px;
    background: red;
  }
</style>
