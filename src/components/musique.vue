<template id="">
  <div class="">
    <note v-for="(v,k,i) in melodie" :index=k :note=v @change="update(k)"></note>
    <input type="button" value="play" @click="play">
    <input type="button" value="stop" @click="stop">
    <div class="alert">

    </div>
  </div>
</template>


<script type="text/javascript">

  import Tone from 'tone';
  var son = new Tone.Synth().toMaster();
  Tone.Transport.start();

  import note from './note.vue';
  export default{
    components:{note},
    data(){
      return {
        sequence: new Tone.Sequence(function(t,v){
          console.log(this.progress, v);
        }),
        melodie:[8,7,5,1,4]
      }
    },
    mounted(){
      this.sequence.removeAll();
      this.melodie.forEach((v,i)=>{
        console.log(i,v);
        this.sequence.add(i,v)
      });
      this.sequence.loop=false;
    },
    methods:{
      update(index,val){
        this.sequence.at(index,parseInt(val));
      },
      stop(){
        this.sequence.stop();
      },
      play(){
        this.sequence.start();
      }
    }
  }
</script>

<style media="screen">
  .active{
    background: green
  }
</style>
