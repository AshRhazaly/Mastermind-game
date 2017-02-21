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
  // assign the answer images to the answer row.
  document.getElementById("answer-image-one").src = answer[0]
  document.getElementById("answer-image-two").src = answer[1]
  document.getElementById("answer-image-three").src = answer[2]
  document.getElementById("answer-image-four").src = answer[3]
}
function getRandomNumber(_min,_max) {
  var _randomNumber = Math.floor(Math.random() * (_max - _min)) + _min;  
  return _randomNumber;
}

function checkAnswer(color1, color2, color3, color4) {
  var color_match = 0;
  var position_check = 0;
  var color_check = [color1, color2, color3, color4];

  var verify_answer = Array.from(answer);


  for (i=0; i < 4; i++) {
    var color_position = verify_answer.indexOf(color_check[i]);
    console.log(color_position);
    if ( color_position != -1)
    {
      if (i == color_position) {
        verify_answer[color_position] = "GOOD";
        position_check += 1;
      }
      else if (i== color_match) {
        verify_answer[color_match] = "ok";
        color_match += 1;
      }
    }
  }
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
    ev.target.src=nodeCopy.src;
    ev.target.color="red";
}
