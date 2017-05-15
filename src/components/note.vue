<template id="note">
    <input  class="note" min=0 max=15 type="range" step="1" v-model="n" >
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
 
.green{
  background-color: green !important
}

.note{
  /* height is thin */
  height: 10px;
  width: 100px;
  /*negative is tricky, its du to transform rotation*/
  margin: 0 -30px; 
  -webkit-appearance: none;
  transform: rotate(270deg) scaleX(2) translateX(-60px);
  background-color: transparent;
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 500px;
  height: 100%;
  cursor: pointer;
  /*animate: 0.2s;*/
}
input[type=range]::-webkit-slider-thumb {
  height: 20px;
  width: 10px;
  border-radius: 100%;
  background: black;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}
/*input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}*/

</style>
