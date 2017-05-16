import Tone from 'tone';

let Morceau = function (m,root,parent) {
  
  console.log(m);
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
    console.log(v,t);
     if (this.son instanceof Tone.NoiseSynth) {  this.son.triggerAttackRelease("4n",t);  }
      else{
        this.son.triggerAttackRelease(v,"4n",t);  
      }
  }.bind(this),mel,"4n");

  this.sequence.loopEnd = this.getDuration();
  this.sequence.loop = true;
};

Morceau.prototype={
  transform(note){
    return  Tone.Frequency(note+this.root,"midi").toNote()
  },
  setTimbre(timbre){
    this.son = new Tone[timbre]().toMaster();
  },
  addNote(note){
    this.sequence.add(this.transform(note));
  },
  removeNote(){
    this.son = new Tone[timbre]().toMaster();
  },
  getDuration:function (){
    var times = [];
    this.sequence._events.forEach((v)=>{
      // LATER TODO : integrate sequence in sequence ??
        if (v instanceof Tone.Sequence) {

        }
        else{
          times.push(v)
        }
    });
    // calcul duration
    var res = Tone.Time("0");
    times.forEach((v)=>{
      res = res.add(Tone.Time(this.sequence.subdivision))
    });
    return Tone.Time(res).toNotation();
  }
};

export default Morceau;