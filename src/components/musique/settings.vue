<template>
<div class="settings">  
    <form>    
      <label>
        Scale : 
        <input type="number" value="triton">      
      </label>
    </form>

   <div  class="bouttons">
   <div class="interface1">
     <label>lecture</label>
      <input type="button" value="play" @click="$parent.play">
      <input type="button" value="stop" @click="$parent.stop">
      <input type="button" value="plus" @click="$parent.addNote">
      <input type="button" value="moins" @click="$parent.removeNote">
   </div>
      <label>timbre</label>
      <input type="button" value="create instrument" @click="$root.$emit('show::modal',id)">
      <b-modal :id="id" @ok='addInstr' >
        <div slot="modal-header"> ta race</div>  
        <new-instrument ref='ni'></new-instrument>        
      </b-modal>
      <select @change='$parent.musique.setTimbre($event.target.value)'>
        <option v-for="timbre in $parent.timbres" v-text="timbre"></option>  
        <option v-for="timbre in createdInstr" v-text="timbre.name"></option>  
      </select>
    </div>
</div>
</template>

<script>  

import {bModal} from 'bootstrap-vue/lib/components';
import newInstrument from "./newInstrument.vue";
import _ from "lodash";

export default{
  name:'settings',
  components:{ bModal, newInstrument },
  props:['id'],
  data(){
    return{
      timbres:['MonoSynth','AMSynth','FMSynth','MembraneSynth','NoiseSynth','PluckSynth'],
      createdInstr:[]
    }
  },
  methods:{
    addInstr(){
      var child=this.$refs.ni;
      var instr= _.pickBy(child.$data,(v,k)=> {
          if(typeof v === 'function'){}{
            return v
          };
     });
      this.$parent.createdInstr.push(instr);
    }
  }
}
</script>

<style lang="sass">

.settings
  display: flex
  flex-direction: column 

.bouttons
  display: flex
  // flex-direction: column
  height: 5vh
  justify-content: center
  &:first-child
    border-radius: 10px 10px 5px 5px
  .interface1
    


label
  background-color: grey


</style>