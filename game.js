var btnColor = ["green", "red", "yellow", "blue"];
var gameSequence = [];
var userSequence = [];
var level = 0;
var choice = 0;
$(".btn").click(handleClick);
$(document).keydown(handleGame);

function nextSequence(){
  var rand = Math.floor(Math.random()*4);
  gameSequence.push(btnColor[rand]);
  handleSound(btnColor[rand]);
}

function handleSound(input){
  //b for blue g green etc
  switch(input){
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      handleAnimation("blue");
      blue.play();
    break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      handleAnimation("green");
      green.play();
    break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      handleAnimation("red");
      red.play();
    break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      handleAnimation("yellow");
      yellow.play();
    break;
    case "wrong":
      var wrong = new Audio("sounds/wrong.mp3");
      handleAnimation("wrong");
      wrong.play();
    break;
    default: 
      console.log("Sound error");
  }
}

function handleAnimation(input){
  if(input == "wrong"){
    $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 100);
  }else {
    $("#" + input).addClass("pressed");
    setTimeout(function(){
      $("#" + input).removeClass("pressed");
    }, 100);
  }
}

function handleClick() {

  var btnPressed = $(this).attr("id");
  userSequence.push(btnPressed); 

  if(userSequence[choice] == gameSequence[choice]){
    handleSound(btnPressed);
    choice++;
    
  }else {
    handleSound("wrong");
    resetGame();
  }

  if(userSequence.length == gameSequence.length){
    setTimeout(nextSequence, 1500);
    userSequence = [];
    choice = 0;
    $("h1").text("Level " + (level +1));
    level++;
  }

}

function handleGame(event) {
  if(event.key = "Space"){
    setTimeout(nextSequence, 1500);
    level = 0;
    $("h1").text("Level " + (level +1));
  }else
    console.log("wrong input");
  resetGame();
  
}

function resetGame(){
  gameSequence = [];
  userSequence = [];
  choice = 0;
  level = 0;
}