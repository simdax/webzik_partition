import Tone from 'tone';

let Morceau = function (m,root,parent) {
  
  console.log(m);
   this.son = new Tone.Synth().toMaster();
  let mel = m.map((note)=>{
    return Tone.Frequency(note+root,"midi").toNote()
  });
  this.sequence= new Tone.Sequence(function(t,v){
    parent.getChild(parent.count-1).classList.remove("green");
    parent.getChild(parent.count).classList.add("green");     
    parent.count += 1;
    console.log(v,t);
    this.son.triggerAttackRelease(v,"4n",t);  
  }.bind(this),mel,"4n");

 this.sequence.loopEnd = this.getDuration();
  this.sequence.loop = true;
};

Morceau.prototype={
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