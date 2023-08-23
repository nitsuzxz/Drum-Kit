// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonPress = this.innerHTML;
//     switch (buttonPress) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "k":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         var kickBass = new Audio("sounds/kick-bass.mp3");
//         kickBass.play();
//         break;

//       default:
//         console.log("err:" + buttonPress);
//         break;
//     }
//   });
// }

// document.addEventListener("keydown", function (event) {
//   console.log(event.key);

//   triggerSound(event.key);
// });

// function triggerSound(key) {
//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "k":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       var kickBass = new Audio("sounds/kick-bass.mp3");
//       kickBass.play();
//       break;

//     default:
//       console.log("err:" + key);
//       break;
//   }
// }

const soundMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/crash.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

// Add event listeners for button clicks
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonClick = this.innerHTML;
    playSound(buttonClick);
  });
});

// Add event listener for key presses
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (soundMap.hasOwnProperty(key)) {
    playSound(key);
  }
});

function playSound(currentKey) {
  if (soundMap.hasOwnProperty(currentKey)) {
    const audio = new Audio(soundMap[currentKey]);
    audio.play();
    buttonAnimation(currentKey);
  } else {
    console.log("err:" + currentKey);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
