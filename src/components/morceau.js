import Tone from 'tone';
import _ from 'lodash';

let Morceau = function (m,root,scale,parent) {
  this.scale = scale;
  this.root = root;
  this.son = new Tone.Synth().toMaster();
  let mel = m.map((note)=>{
    return this.transform(note)
  });
  this.sequence= new Tone.Sequence(function(t,v){
    // draw
    Tone.Draw.schedule(function(){
      parent.paint(parseFloat(this.sequence.progress));
    }.bind(this), t);

    console.log(v);
    //play
    if (this.son instanceof Tone.NoiseSynth) { this.son.triggerAttackRelease("4n",t);  }
    else{this.son.triggerAttackRelease(v,"4n",t);  }
  }.bind(this),mel,"4n");
  this.sequence.loop = true;
};

Morceau.prototype={
  transform(note){
    var octave = Math.floor(note / this.scale.length);
    var degree = note % this.scale.length;
    note = this.scale[degree*(octave+1)]+this.root;
    return  Tone.Frequency(note,"midi").toNote()
  },
  addNote(note){
    this.sequence.add(this.sequence.length,this.transform(note));
    this.sequence.loopEnd = this.getDuration();
  },
  removeNote(){
    this.sequence.remove(this.sequence.length-1);
    this.sequence.loopEnd = this.getDuration();
  },
  update(index,note){
    this.sequence.at(index,this.transform(note))
  },
  setTimbre(timbre){
    this.son = new Tone[timbre]().toMaster();
  },
  getDuration:function (){
    var res = Tone.Time("0");
    _.times(this.sequence.length, ()=> res.add(this.sequence.subdivision));
    return Tone.Time(res).toNotation();
  }
};

export default Morceau;