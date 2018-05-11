//backend
$(document).ready(){
  function rolldice() {
    var dice1= document.getElementById("dice1");
    var dice2= document.getElementById("dice2");
    var satus= document.getElementById("status");
    var d1= Math.floor(Math.random()* 6)+ 1;
    var d2= Math.floor(Math.random()* 6)+ 1;
    var diceTotal= d1 + d2;
    dice1.innerHTML= d1;
    dice2.innerHTML= d2;
    status.innerHTML= "you rolled "+diceTotal+".";
    if(d1 === d2) {
      status.innerHTML= "You rolled a DOUBLE!, you get another turn"
    };

  }

};
