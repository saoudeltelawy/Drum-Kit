let drumButtons = document.querySelectorAll(".drum span"); //All Buttons related for Drumming Only

// Detecting Button Press

drumButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let buttonContent = this.textContent;
    // Call the Function to avoid 2 Switches
    makeSound(buttonContent);
  });
});

// For Keyboard Events (Clicks) // Detecting Button click
document.addEventListener("keydown", function (e) {
  makeSound(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let audio5 = new Audio("sounds/kick-bass.mp3");
      audio5.play();
      break;

    case "k":
      let audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;

    case "l":
      let audio7 = new Audio("sounds/snare.mp3");
      audio7.play();
      break;

    default:
      alert("Key is not assigned!");
      break;
  }
}
