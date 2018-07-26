
//global var
//global var 2



var runnerFunction = [];
var myRunners= [];
var runnerCount = 0;







//runner object
var runner = function(name) {
  this.name = name;
  this.left = 0;
  var parent = this;
  this.arr = [];

  //creating elements

  //main class
  var divMain = document.createElement("DIV");
  divMain.setAttribute("class", "main");

  //1st block

  var divImage = document.createElement("DIV");
  divImage.setAttribute("class", "inlineBlock sam");

  var imgMain = document.createElement("IMG");
  imgMain.setAttribute("src", "athlete-sam.png");
  // imgMain.setAttribute("id",this.name);
  imgMain.setAttribute("alt", this.name);
  divImage.appendChild(imgMain);

  //2nd block

  var divResetBlock = document.createElement("DIV");
  divResetBlock.setAttribute("class", "inlineBlock resetBlock");
  var divResetBlocknested = document.createElement("DIV");
  divResetBlocknested.setAttribute("class", "inlineBlock");

  var divResetBlocknestedP = document.createElement("P");
  divResetBlocknestedP.setAttribute("class", "name");
  divResetBlocknestedPText = document.createTextNode(this.name);
  divResetBlocknestedP.appendChild(divResetBlocknestedPText);
  divResetBlocknested.appendChild(divResetBlocknestedP);

  var divResetBlocknestedButton = document.createElement("BUTTON");
  divResetBlocknestedButtonText = document.createTextNode("GO");
  divResetBlocknestedButton.appendChild(divResetBlocknestedButtonText);
  divResetBlocknested.appendChild(divResetBlocknestedButton);

  divResetBlock.appendChild(divResetBlocknested);

  //3rd block
  var raceTrack = document.createElement("DIV");
  raceTrack.setAttribute("class", "inlineBlock raceTrack");
  var imgRaceTrack = document.createElement("IMG");
  imgRaceTrack.setAttribute("src", "ruler-background.png");
  imgRaceTrack.setAttribute("alt", "ruler-background.png");
  raceTrack.appendChild(imgRaceTrack);

  //4th block

  var raceLines = document.createElement("DIV");
  raceLines.setAttribute("class", "inlineBlock raceLines");
  var imgLineTrack = document.createElement("IMG");
  imgLineTrack.setAttribute("src", "ruler-lines.png");
  imgLineTrack.setAttribute("alt", "ruler-lines.png");
  raceLines.appendChild(imgLineTrack);

  //5th block
  //hello worls
  var runnerDiv = document.createElement("DIV");
  runnerDiv.setAttribute("class", "inlineBlock runnerDiv");
  var runner = document.createElement("DIV");
  runner.setAttribute("class", "inlineBlock runner");
  runner.setAttribute("id", this.name);
  runnerDiv.appendChild(runner);

  //appending everything
  var breakLines = document.createElement("BR");

  divMain.appendChild(divImage);
  divMain.appendChild(divResetBlock);
  divMain.appendChild(raceTrack);
  divMain.appendChild(raceLines);
  divMain.appendChild(runnerDiv);
  document.body.appendChild(divMain);
  document.body.appendChild(breakLines);
  document.body.appendChild(breakLines);

  this.run = function() {
    var random = Math.random() * 5000 + 3000;
    console.log(random);
    var count = 10;
    var step = random / count;
    var startTime = new Date().getTime();

    var interval = setInterval(function() {
      if (parent.left > 629) {
        console.log("everything is fine");
        clearInterval(interval);
        return;
      }

      for (var i = 0; i < 10000; i++) {
        parent.left += 0.0063;
        document.getElementById(parent.name).style.left = parent.left + "px";
      }

        count--;
        var timeGoneBy = new Date().getTime() - startTime;
        parent.arr.push(timeGoneBy);
        var remainingTime = random - timeGoneBy;
        step = remainingTime / count;
        console.log(parent.name +" "+   step + " " + count + " \ntime elapsed =  " +  timeGoneBy + "  remianing_time = "  + remainingTime );


    }, step);
  };

  runnerFunction.push(this.run);
};




//create new Runners

var createRunner = function(name){
      myRunners.push(new runner(name));
      runnerCount++;
}


//function for race

var runEveryone = function(){
  var k;
  for( k   = 0; k < runnerCount;k++)
    {
      console.log("running " + k);
      runnerFunction[k]();
    }
}
