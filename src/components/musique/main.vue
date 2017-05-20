<template>
  <div class="boiteazik">    
    <div  class="part">
      <note @new='newChild' v-for="(v,k,i) in melodie" :index=k :key=i :note=v @change="update(k)"></note>
    </div>
      <settings :id='i'></settings>  
  </div>  
</template>


<script type="text/javascript">

  import Tone from 'tone';
  import _ from 'lodash';

  // js
  import Morceau from './morceau.js';

  //components
  import note from './note.vue';
  import settings from './settings.vue';

  export default{
    components:{note,settings},
    props:['i'],
    data(){
      return {
        count: 0,
        melodie: _.times(6, () => _.random(0,7)),
        root:60,
        triton: 1,
        scale:[0,2,4,5,7,9,11],
        musique:0,
        timbres:['MonoSynth','AMSynth','FMSynth','MembraneSynth','NoiseSynth','PluckSynth'],
        children:[]
      }
    },
    mounted(){
      this.musique = new Morceau(this.melodie,this.root,this.scale, this);
    },
    methods:{
      addNote(){
        var note = _.random(0,7);
        this.musique.addNote(note);
        this.melodie.push(note);
      },
      newChild(newEl){
        this.children.push(newEl);
      },
      removeNote(){
        this.musique.removeNote();
        this.melodie = this.melodie.slice(0,-1);
        this.children = this.children.slice(0,-1);
        if(this.children.length == 0 ){this.stop()}
      },
      paint(i){
        var i = Math.floor(i*this.children.length);
        var last = i-1;
        if (i==0) {last=this.children.length-1}
        this.children[i].classList.add('green')
        this.children[last].classList.remove('green')
      },
      stop(){
        // this.musique.sequence.cancel();
        this.musique.sequence.stop();
        Tone.Draw.cancel();
        this.children[Math.abs((this.count-1)%this.children.length)].classList.remove("green");
        this.count = 0;
      },
      play(){
        this.musique.sequence.start("@1n");
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
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   background-color: rgba(red,0.1);
   width: 45vw;
   height: 45vh;
   margin: 5px; 
 }
 .part{
  display: flex;
  flex-wrap: wrap;
  height: 23vh;
  width: 27vh;
  align-self: center;
  transform: rotate(-90deg);


  background-size: 100% 115.2px;
  box-shadow: 0 0 10px black;
  background-image:
  repeating-linear-gradient(90deg,
        // $staff-clr 0,
        // $staff-clr 1px,
        // transthis 1px,
        transthis $vunit,
        $staff-clr $vunit,
        $staff-clr $vunit + 1px,
        transthis $vunit + 1px,
        transthis $vunit * 2,
        $staff-clr $vunit * 2,
        $staff-clr $vunit * 2 + 1px,
        transthis $vunit * 2 + 1px,
        transthis $vunit * 3,
        $staff-clr $vunit * 3,
        $staff-clr $vunit * 3 + 1px,
        transthis $vunit * 3 + 1px,
        transthis $vunit * 4,
        $staff-clr $vunit * 4,
        $staff-clr $vunit * 4 + 1px,
        transthis $vunit * 4 + 1px);
  background-size: 100% $gap + $vunit * 4
}

</style>
