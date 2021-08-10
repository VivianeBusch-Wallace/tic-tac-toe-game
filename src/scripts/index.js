// HTML elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// the overlay keeps the user from clicking more gridtiles after a winner is found
let overlay = document.querySelector(".overlay");

// check if there are 3 same symbols in a row
const checkWinner = () => {
  // cell's values
  const topLeft = document.querySelector(".cell1").innerHTML;
  const topMiddle = document.querySelector(".cell2").innerHTML;
  const topRight = document.querySelector(".cell3").innerHTML;
  const middleLeft = document.querySelector(".cell4").innerHTML;
  const middleMiddle = document.querySelector(".cell5").innerHTML;
  const middleRight = document.querySelector(".cell6").innerHTML;
  const bottomLeft = document.querySelector(".cell7").innerHTML;
  const bottomMiddle = document.querySelector(".cell8").innerHTML;
  const bottomRight = document.querySelector(".cell9").innerHTML;

  if (
    // horizontal top row wins
    topLeft &&
    topLeft == topMiddle &&
    topLeft == topRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topLeft} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // horizontal middle row wins
    middleLeft &&
    middleLeft == middleMiddle &&
    middleLeft == middleRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${middleLeft} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // horizontal bottom row wins
    bottomLeft &&
    bottomLeft == bottomMiddle &&
    bottomLeft == bottomRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${bottomLeft} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // vertical left column wins
    topLeft &&
    topLeft == middleLeft &&
    topLeft == bottomLeft
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topLeft} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // vertical middle column wins
    topMiddle &&
    topMiddle == middleMiddle &&
    topMiddle == bottomMiddle
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topMiddle} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // vertical right column wins
    topRight &&
    topRight == middleRight &&
    topRight == bottomRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topRight} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // diagonal topleft to bottomright wins
    topLeft &&
    topLeft == middleMiddle &&
    topLeft == bottomRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topLeft} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    // diagonal topright to bottomleft wins
    topRight &&
    topRight == middleMiddle &&
    topRight == bottomLeft
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topRight} is the winner!`;
    statusDiv.style.backgroundColor = "green";
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    statusDiv.innerHTML = "It's a tie!";
  }
};

// What happens on clicking a grid tile
let xTurn = true;
const clickEvent = (e) => {
  if (xTurn) {
    //   occupy the clicked grid tile
    e.target.innerHTML = "X";
    // decide who's turn it is
    xTurn = false;
    statusDiv.innerHTML = "It's O's turn.";
    // check if there is a winner
    checkWinner();
  } else {
    //   occupy the clicked grid tile
    e.target.innerHTML = "O";
    // decide who's turn it is
    xTurn = true;
    statusDiv.innerHTML = "It's X's turn.";
    checkWinner();
  }
};

// clicking reset
const reset = () => {
  overlay.style.display = "none";
  console.log("hi");
  cellDivs.forEach((e) => {
    e.innerHTML = "";
    e.classList.remove("x");
    e.classList.remove("o");
    xTurn = true;
    statusDiv.innerHTML = "It's X's turn.";
    statusDiv.style.backgroundColor = "rgb(0, 136, 84)";
  });
};

// event listeners
resetDiv.addEventListener("click", reset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", clickEvent);
}

let arr = [0, 1, 2, 3];
console.log(arr.slice(0, 2)); // output: [0, 1]
console.log(arr); // output: [0, 1, 2, 3]; slice does not affect the original array
console.log(arr.slice(0)); // output: [0, 1, 2, 3]
console.log(arr.splice(0, 2)); // output: [0, 1]
console.log(arr); // output: [2, 3]; splice DOES affect the original array
arr = [0, 1, 2, 3];
console.log(arr.splice(0)); // output: [0, 1, 2, 3]
console.log("Chetna's");
console.log([1, 2, 3].slice(2));
console.log([1, 2, 3, 4].slice(0, 2));
console.log([6, 7, 8].splice(0, 1, 5));
console.log([1, 2, 3, 4].shift());
console.log([1, 2, 3].unshift(4));
console.log([1, 2, 3].pop());

console.log([1, 2].concat(3));
console.log([1, 2].concat([3]));
