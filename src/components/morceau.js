import Tone from 'tone';

let Morceau = function (seq) {
    this.sequence=seq;
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