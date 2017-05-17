import Tone from 'tone';
import _ from 'lodash';

let Morceau = function (m,root,parent) {
  
  this.root = root;
  this.son = new Tone.Synth().toMaster();
  let mel = m.map((note)=>{
    return Tone.Frequency(note+root,"midi").toNote()
  });
  this.sequence= new Tone.Sequence(function(t,v){
    Tone.Draw.schedule(()=>{
      parent.getChild(parent.count-1).classList.remove("green");
      parent.getChild(parent.count).classList.add("green");     
      parent.count += 1;      
    }, t);
    console.log(v,t,this.sequence.progress);
      if (this.son instanceof Tone.NoiseSynth) { this.son.triggerAttackRelease("4n",t);  }
      else{this.son.triggerAttackRelease(v,"4n",t);  }
  }.bind(this),mel,"4n");

  // this.sequence.loopEnd = this.getDuration();
  this.sequence.loop = true;
};

Morceau.prototype={
  transform(note){
    return  Tone.Frequency(note+this.root,"midi").toNote()
  },
  addNote(note){
    console.log(this.sequence.length);
    this.sequence.add(this.sequence.length,this.transform(note));
    this.sequence.loopEnd = this.getDuration();
  },
  removeNote(){
    // console.log(this.sequence._events);
    this.sequence.remove(this.sequence.length-1);
    this.sequence.loopEnd = this.getDuration();
  },
  setTimbre(timbre){
    this.son = new Tone[timbre]().toMaster();
  },
  getDuration:function (){
    // calcul duration
    var res = Tone.Time("0");
    _.times(this.sequence.length, ()=> res.add(this.sequence.subdivision));
    // console.log(Tone.Time(res).toNotation());
    return Tone.Time(res).toNotation();
  }
};

export default Morceau;