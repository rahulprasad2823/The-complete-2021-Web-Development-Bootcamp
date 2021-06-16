//Detecting Button Press

// the dom method here will give all the buttoms with drum class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// here we are using anonymous function so that we use one function for all drum clicks
for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);

});

}

//Detecting Keyboard Press

document.addEventListener('keydown',function(event){

  makeSound(event.key);
  makeAnimation(event.key);

});

function makeSound(key){

  switch (key) {
    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "r":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "f":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "n":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "d":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    default: console.log();

  }

}

function makeAnimation(currentKey){

  var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
    }