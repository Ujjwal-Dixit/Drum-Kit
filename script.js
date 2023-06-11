// DETECTING CLICK PRESS:
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", function (event) {
    const buttonKey = event.target.innerHTML.toLowerCase();
    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  });
});

// DETECTING KEYBOARD PRESS:
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  const soundMap = {
    "w": "crash",
    "a": "kick-bass",
    "s": "snare",
    "d": "tom-1",
    "j": "tom-2",
    "k": "tom-3",
    "l": "tom-4"
  };

  if (soundMap.hasOwnProperty(key)) {
    const audio = new Audio(`sounds/${soundMap[key]}.mp3`);
    audio.play();
  } else {
    alert("Invalid key pressed!");
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
};