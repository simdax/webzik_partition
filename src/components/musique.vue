<template id="">
  <div class="io">    
    <div class="part">
      <note v-for="(v,k,i) in melodie" :index=k :key=i :note=v @change="update(k)"></note>
    </div>
    <div class="bouttons">
      <input type="button" value="play" @click="play">
      <input type="button" value="stop" @click="stop">
    </div>
  </div>  
</template>


<script type="text/javascript">

  // import $ from 'jqueryui';
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
          console.log(v,t);
          son.triggerAttackRelease(v,"4n",t);  
        }.bind(this),[],"4n"),
        melodie:[1,2,5,0,5,1],
        root:60
      }
    },
    mounted(){
      
      this.children = this.$children.map((v)=>{ return v.$el });
      // console.log(this.melodie);
      this.musique = new Morceau(this.melodie,this.root,this);

      this.sequence.removeAll();
      this.melodie.forEach((v,i)=>{
        this.sequence.add(i,v)
      });
      // this.a = new Morceau(this.sequence);
      // var duration = this.a.getDuration();
      // this.sequence.loopEnd = duration;
      // this.sequence.loop = true;

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
        this.musique.sequence.start();
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
    height: 200px;
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
