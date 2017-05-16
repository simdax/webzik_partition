<template id="">
  <div class="io">    
    <div class="part">
      <note v-for="(v,k,i) in melodie" :index=k :note=v @change="update(k)"></note>
    </div>
    <div class="bouttons">
      <input type="button" value="play" @click="play">
      <input type="button" value="stop" @click="stop">
    </div>
  </div>  
</template>


<script type="text/javascript">

  import $ from 'jqueryui';

  import Morceau from './morceau.js';

  import Tone from 'tone';
  var son = new Tone.Synth().toMaster();
  Tone.Transport.start();

  import note from './note.vue';
  export default{
    components:{note},
    data(){
      return {
        count: 0,
        sequence: new Tone.Sequence(function(t,v){
          this.getChild(this.count-1).classList.remove("green");
          this.getChild(this.count).classList.add("green");     
          this.count += 1;
        }.bind(this),[],"4n"),
        melodie:[1,2,3,1,0,5,1],
      }
    },
    mounted(){
      
      this.children = this.$children.map((v)=>{ return v.$el });

      this.sequence.removeAll();
      this.melodie.forEach((v,i)=>{
        this.sequence.add(i,v)
      });
      this.sequence.loop=false;
      this.a = new Morceau(this.sequence);
      var duration = this.a.getDuration();
      this.sequence.loopEnd = duration;
      this.sequence.loop = true;
    },
    methods:{
      getChild(i){
        var index = Math.abs(i % this.melodie.length);
        return this.children[index];
      },
      update(index,val){
        this.sequence.at(index,parseInt(val));
      },
      stop(){
        this.sequence.stop();
        this.getChild(this.count-1).classList.remove("green");    
        this.count = 0;
      },
      play(){
        this.sequence.start();
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

  .io{
      display: inline-block;
      background-color: rgba(255,02,0,0.1)
    }
  .part{
    height: 300px;
    display: inline-block;
    box-shadow: 0 0 10px black;
    background-image:
      linear-gradient(180deg,
        $staff-clr 0,
        $staff-clr 1px,
        transparent 1px,
        transparent $vunit,
        $staff-clr $vunit,
        $staff-clr $vunit + 1px,
        transparent $vunit + 1px,
        transparent $vunit * 2,
        $staff-clr $vunit * 2,
        $staff-clr $vunit * 2 + 1px,
        transparent $vunit * 2 + 1px,
        transparent $vunit * 3,
        $staff-clr $vunit * 3,
        $staff-clr $vunit * 3 + 1px,
        transparent $vunit * 3 + 1px,
        transparent $vunit * 4,
        $staff-clr $vunit * 4,
        $staff-clr $vunit * 4 + 1px,
        transparent $vunit * 4 + 1px);
    background-size: 100% $gap + $vunit * 4
  }
  .bouttons{

    }

</style>
