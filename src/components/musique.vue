<template id="">
  <div class="boiteazik">    
    <div class="part">
      <note v-for="(v,k,i) in melodie" :index=k :key=i :note=v @change="update(k)"></note>
    </div>
    <div class="bouttons">
      <input type="button" value="play" @click="play">
      <input type="button" value="stop" @click="stop">
      <select @change='musique.setTimbre($event.target.value)'>
        <option>MonoSynth</option>
        <option>AMSynth</option>
        <option>FMSynth</option>
        <option>MembraneSynth</option>
        <option>NoiseSynth</option>
        <option>PluckSynth</option>
      </select>
    </div>
  </div>  
</template>


<script type="text/javascript">

  // import $ from 'jqueryui';
  import Morceau from './morceau.js';

  import Tone from 'tone';
  var son = new Tone.Synth().toMaster();

  import note from './note.vue';
  export default{
    components:{note},
    data(){
      return {
        count: 0,
        melodie:[1,2,5,0,5,1],
        root:60,
      }
    },
    mounted(){
      
      this.children = this.$children.map((v)=>{ return v.$el });
      // console.log(this.melodie);
      this.musique = new Morceau(this.melodie,this.root,this);
      this.melodie = this.melodie.map((note)=>{
        return Tone.Frequency(note+this.root,"midi").toNote()
      })
    },
    methods:{
      getChild(i){
        var index = Math.abs(i % this.melodie.length);
        return this.children[index];
      },
      update(index,val){
        this.musique.sequence.at(index,Tone.Frequency(parseInt(val)+60,"midi").toNote());
      },
      stop(){
        this.musique.sequence.stop();
        this.getChild(this.count-1).classList.remove("green");    
        this.count = 0;
      },
      play(){
        this.musique.sequence.start("1n");
      }
    }
  }
</script>

<style lang="scss">

  $unit: 16px*3;
  $vunit: $unit * 2 / 5;
  $hvunit: $vunit / 2;
  $gap: 2*$vunit;
  $staff-clr: #999;

  .boiteazik{
      background-color: rgba(red,0.1);
      width: 45vw;
      height: 40vh;
      margin: 5px; 
    }
  .part{
    display: flex;
    flex-wrap: wrap;
    height: 25vh;
    transform: rotate(-90deg);
    box-shadow: 0 0 10px black;
    background-size: 100% 115.2px;
    box-shadow: 0 0 10px black;
    // background-image:
    //   linear-gradient(0deg,
    //     $staff-clr 0,
    //     $staff-clr 1px,
    //     transparent 1px,
    //     transparent $vunit,
    //     $staff-clr $vunit,
    //     $staff-clr $vunit + 1px,
    //     transparent $vunit + 1px,
    //     transparent $vunit * 2,
    //     $staff-clr $vunit * 2,
    //     $staff-clr $vunit * 2 + 1px,
    //     transparent $vunit * 2 + 1px,
    //     transparent $vunit * 3,
    //     $staff-clr $vunit * 3,
    //     $staff-clr $vunit * 3 + 1px,
    //     transparent $vunit * 3 + 1px,
    //     transparent $vunit * 4,
    //     $staff-clr $vunit * 4,
    //     $staff-clr $vunit * 4 + 1px,
    //     transparent $vunit * 4 + 1px);
    // background-size: 100% $gap + $vunit * 4
  }
  .bouttons{
    padding: 32px;
    /* margin: 5px; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    input{
          height: 50px;
          width: 50px
        }
  }

</style>
