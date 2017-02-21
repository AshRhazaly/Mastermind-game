var images = [document.getElementById("red").src, document.getElementById("green").src, document.getElementById("blue").src, document.getElementById("yellow").src,
              document.getElementById("brown").src, document.getElementById("orange").src, document.getElementById("black").src, document.getElementById("white").src];

var answer = [];

function startGame() {
  //initialize the game
  answer.splice(0, answer.length);
  var availableColors = Array.from(images);
  do {
    var myRandomNum = getRandomNumber(0, availableColors.length);
    var myRandomCol = availableColors[myRandomNum];
    answer.push(myRandomCol);
    availableColors.splice(myRandomNum, 1);
  } while (answer.length < 4);
 	console.log (answer);
}
function getRandomNumber(_min,_max) {
  var _randomNumber = Math.floor(Math.random() * (_max - _min)) + _min;  
  return _randomNumber;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
    ev.target.src=nodeCopy.src;
}
