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
      alert("Oh wait...you just died :(");
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
