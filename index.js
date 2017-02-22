var images = [document.getElementById("red").src, document.getElementById("green").src, document.getElementById("blue").src, document.getElementById("yellow").src,
              document.getElementById("brown").src, document.getElementById("orange").src, document.getElementById("black").src, document.getElementById("white").src];

var answer = [];
var submissionCount=0;

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
  // assign the answer images to the answer row.
  document.getElementById("answer-image-one").src = answer[0];
  document.getElementById("answer-image-two").src = answer[1];
  document.getElementById("answer-image-three").src = answer[2];
  document.getElementById("answer-image-four").src = answer[3];
  document.getElementById("answer-key").style.display = "none";

  submissionCount=0;

}
function getRandomNumber(_min,_max) {
  var _randomNumber = Math.floor(Math.random() * (_max - _min)) + _min;  
  return _randomNumber;
}

function btnCheckAnswer()
{
  submissionCount++;

  
}

function checkAnswer(color1, color2, color3, color4) {
  var position_match = 0;
  var position_check = [color1, color2, color3, color4];
  var color1 = document.getElementById("");
  var verify_answer = Array.from(answer);

  for (i=0; i < 4; i++) {
    var color_position = verify_answer.indexOf(position_check[i]);
    if ( color_position != -1)
    {
      if (i == color_position) {
        position_match += 1;
      }
    }
  }
  for (i=0; i < position_match; i++) {
    // for every position match assign the red pin
    document.getElementById("identify"+i).src = "http://www.web-games-online.com/mastermind/images/bull.gif";
  }


  var color_match = 0;
  var color_check = [color1, color2, color3, color4];
  var verify_answer = Array.from(answer);

  for (i=0; i < verify_answer.length; i++) {
    for (k=0;k < color_check.length; k++) {
      if (color_check[k] == verify_answer[i] ) {
        color_match += 1;
      }
    }
  }
  var color_total = color_match - position_match;
  for (i=0; i < color_total; i++) {
    // for every position match assign the red pin
    document.getElementById("identify"+i).src = "http://www.web-games-online.com/mastermind/images/cow.gif";
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
