"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct NUmber!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  // when no inputs
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No number!";
    displayMessage("⛔ No number!");
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct NUmber!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector(".message").textContent =
        //   guess > secretNumber ? "Too high!" : "Too small!";
        displayMessage(guess > secretNumber ? "Too high!" : "Too small!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        // document.querySelector(".message").textContent = "You lost the games!";
        displayMessage("You lost the games!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
  //   // when guess is to hight
  // } else if (guess > secretNumber) {
  //   // when guess is to small
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too small!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the games!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start quessing ...";
  displayMessage("Start quessing ...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
