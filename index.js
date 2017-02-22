var images = [document.getElementById("red").src, document.getElementById("green").src, document.getElementById("blue").src, document.getElementById("yellow").src,
              document.getElementById("brown").src, document.getElementById("orange").src, document.getElementById("black").src, document.getElementById("white").src];

var answer = [];
var submissionCount=0;

function startGame() {
  //initialize the game
  alert("Game has started!")
  answer.splice(0, answer.length);
  var availableColors = Array.from(images);
  do {
    var myRandomNum = getRandomNumber(0, availableColors.length);
    var myRandomCol = availableColors[myRandomNum];
    answer.push(myRandomCol);
    availableColors.splice(myRandomNum, 1);
  } while (answer.length < 4);
  submissionCount=0;

  for(i=2;i<8;i++)
  {
    $(".guess-row"+i).find("img").attr("ondrop","");
  }

}
function getRandomNumber(_min,_max) {
  var _randomNumber = Math.floor(Math.random() * (_max - _min)) + _min;  
  return _randomNumber;
}
function restartGame() {
  location.reload();
}
function btnCheckAnswer()
{

  submissionCount++;

  if (submissionCount <7) {
    var input =[];
    for(i=0; i<4; i++) {
      input.push($(".guess-row" + submissionCount ).children()[i].src);
    }
    // check if row is complete
    if (input.length < 4) {
      alert("Row is not complete");
      submissionCount -= 1;
    } else {
      checkAnswer(input);
    }
    // unique_input = $.unique(input);
  } else {
    document.getElementById("answer-image-one").src = answer[0];
    document.getElementById("answer-image-two").src = answer[1];
    document.getElementById("answer-image-three").src = answer[2];
    document.getElementById("answer-image-four").src = answer[3];
    alert("Sorry you're out of tries, Game will restart in 5 seconds!");
    setTimeout(restartGame,5000);
  }
    $(".guess-row"+(submissionCount+1)).find("img").attr("ondrop","drop(event)");

}

function checkAnswer(color) {
  var position_match = 0;
  var position_check = color;
  var verify_answer = Array.from(answer);

  for (i=0; i < 4; i++) {
    // check for position matches
    var color_position = verify_answer.indexOf(position_check[i]);
    if ( color_position != -1)
    {
      if (i == color_position) {
        position_match += 1;
      }
    }
  }

  for (i=5; i < 5 + position_match ; i++) {
    // for every position match assign the red pin
    $(".guess-row" + submissionCount).children()[i].src = "http://www.web-games-online.com/mastermind/images/bull.gif";
  }

  if (position_match == 4){
    alert("congrats you solved it!");
    document.getElementById("answer-image-one").src = answer[0];
    document.getElementById("answer-image-two").src = answer[1];
    document.getElementById("answer-image-three").src = answer[2];
    document.getElementById("answer-image-four").src = answer[3];
  }

  var color_match = 0;
  var color_check = $.unique(color);

  for (i=0; i < verify_answer.length; i++) {
    for (k=0;k < color_check.length; k++) {
      if (color_check[k] == verify_answer[i] ) {
        color_match += 1;
      }
    }
  }
  console.log(color_match);
  var color_total = color_match - position_match;
  console.log(color_total);
  for (i=5+position_match; i < 5 +position_match + color_total; i++) {
    // for every position match assign the red pin
    $(".guess-row" + submissionCount).children()[i].src = "http://www.web-games-online.com/mastermind/images/cow.gif";

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
}
