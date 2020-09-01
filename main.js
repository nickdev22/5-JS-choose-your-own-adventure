function doorDeath() {
  document.getElementById("second-stage").innerHTML =
    "You fell into a hole and died :(";
}
function doorPass() {
  document.getElementById("second-stage").innerHTML =
    "You found two treasure chests! Choose which one you will open: Chest 1 or Chest 2?";
}
function chestButton1() {
  document.getElementById("chest-button1").innerHTML = "Chest 1";
}
function chestButton2() {
  document.getElementById("chest-button2").innerHTML = "Chest 2";
}
function chestDeath() {
  document.getElementById("third-stage").innerHTML =
    "A monster jumped out and killed you :(";
}
function chestPass() {
  document.getElementById("third-stage").innerHTML =
    "There are two potion bottles in this chest! Choose which one you will drink: Potion 1 or Potion 2?";
}
function potionButton1() {
  document.getElementById("potion-button1").innerHTML = "Potion 1";
}
function potionButton2() {
  document.getElementById("potion-button2").innerHTML = "Potion 2";
}
function potionPass() {
  document.getElementById("fourth-stage").innerHTML =
    "You became the Hulk! You can now save the world :)";
}
function potionDeath() {
  document.getElementById("fourth-stage").innerHTML =
    "It's just water...now you are hydrated :)";
}
function gameOver() {
  document.getElementById("result").innerHTML = "GAME OVER";
}
function youWin() {
  document.getElementById("result").innerHTML = "YOU WIN!";
}
function yourScore0() {
  document.getElementById("score").innerHTML = "Your score: 0/3";
}
function yourScore1() {
  document.getElementById("score").innerHTML = "Your score: 1/3";
}
function yourScore2() {
  document.getElementById("score").innerHTML = "Your score: 2/3";
}
function yourScore3() {
  document.getElementById("score").innerHTML = "Your score: 3/3";
}

/* WITHOUT HTML

alert("Welcome!");
const doorChoice = prompt("Choose a door: door1 or door2");
let doorDeath = false;
let chestDeath = false;
let potionDeath = false;

if (doorChoice === "door1") {
  alert("You fell into a hole and died :(");
  doorDeath = true;
} else if (doorChoice === "door2") {
  const chestChoice = prompt(
    "You found two treasure chests! Choose which one you will open: chest1 or chest2"
  );
  if (chestChoice === "chest2") {
    alert("A monster jumped out and killed you :(");
    chestDeath = true;
  } else if (chestChoice === "chest1") {
    const potionChoice = prompt(
      "There are two potion bottles in this chest! Choose which one you will drink: potion1 or potion2"
    );
    if (potionChoice === "potion1") {
      alert("You became the Hulk!");
      alert("You can now save the world :) Your score: 3/3");
    } else if (potionChoice === "potion2") {
      alert("It's just water...");
      alert("Now you are hydrated :)");
      potionDeath = true;
    }
  }
}
if (doorDeath === true) {
  alert("Your score: 0/3");
}
if (chestDeath === true) {
  alert("Your score: 1/3");
}
if (potionDeath === true) {
  alert("Your score: 2/3");
}
*/
