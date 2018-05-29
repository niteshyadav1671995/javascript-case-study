function CokeSong(){
  firstLine = " cans of coke in the box, ";
  secondLine = " cans of coke.\nTake one down and pass it around, "
  thirdLine = " cans of coke in the box.\n"
  verseIsOne= " can of coke in the box.\n"
  verseIsZero=" no more cans of coke in the box.\n";
  this.verse = function(verse){
    if(verse==2){
      return verse+firstLine+verse+secondLine+(verse-1)+verseIsOne;
    }
    if(verse==1){
      return verse+ " can of coke in the box, "+verse+ " can of coke.\nTake it down and pass it around,"+verseIsZero;
    }
    if(verse==0){
      return 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n'
    }
    return verse+firstLine+verse+secondLine+(verse-1)+thirdLine;
  }

  this.sing = function (start,end){
    if(end==undefined){
      var verse="";
      do{
        if(start<2){
          verse = verse + (start+ " can of coke in the box, "+start+ " can of coke.\nTake it down and pass it around,"+verseIsZero+"\n");
          verse = verse + 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n'
        }else if(start==2){
          verse =verse + (start+firstLine+start+secondLine+(start-1)+verseIsOne)+"\n";
        }
        else{
          verse =verse + (start+firstLine+start+secondLine+(start-1)+thirdLine)+"\n";
        }
        start--;
      }while(start!=0);
      return verse;
    }
    var verse ="";
    end--;
    for(;start!==end;){
      if((start-1)==end){
        verse =verse + (start+firstLine+start+secondLine+(start-1)+thirdLine);
      }else{
        verse =verse + (start+firstLine+start+secondLine+(start-1)+thirdLine)+"\n";
      }
       console.log("Hello");
      start--;
    }
  
    return verse ;
  }
}

module.exports = CokeSong