






//backend
  function rolldice1() {
    var dice1= document.getElementById("dice1");
    var dice2= document.getElementById("dice2");
    var status= document.getElementById("status");
    var double= document.getElementById("double1");
    var d1= Math.floor(Math.random()* 6)+ 1;
    var d2= Math.floor(Math.random()* 6)+ 1;
    var diceTotal= d1 + d2;
    dice1.innerHTML= d1;
    dice2.innerHTML= d2;
    status.innerHTML= diceTotal;
    if(d1 === d2) {
      double.innerHTML= " DOUBLE!, you get another turn";
      $("#clickable").click(function() {
        $(".kit").hide();
      });
    }

  };
  function rolldice() {
    var dice3= document.getElementById("dice3");
    var dice4= document.getElementById("dice4");
    var pitch= document.getElementById("pitch");
    var double= document.getElementById("double2");
    var d3= Math.floor(Math.random()* 6)+ 1;
    var d4= Math.floor(Math.random()* 6)+ 1;
    var diceTotal= d3 + d4;
    dice3.innerHTML= d3;
    dice4.innerHTML= d4;
    pitch.innerHTML= diceTotal;
    if(d3 === d4) {
      double.innerHTML= " DOUBLE!, you get another turn";
      $("#erase").click(function() {
        $("#double2").hide();
      });
    }
  };
