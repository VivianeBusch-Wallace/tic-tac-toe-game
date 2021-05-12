// HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// toggle who's turn it is in status
// Add x or O on click into cells
// add class of x or o to classlist
// check if 3 align (8cases) or if no winner
// clicked cell cannot take another symbol

let xTurn = true;

const checkWinner = () => {
  const topLeft = document.querySelector(".cell1").classList[2];
  const topMiddle = document.querySelector(".cell2").classList[2];
  const topRight = document.querySelector(".cell3").classList[2];
  const middleLeft = document.querySelector(".cell4").classList[2];
  const middleMiddle = document.querySelector(".cell5").classList[2];
  const middleRight = document.querySelector(".cell6").classList[2];
  const bottomLeft = document.querySelector(".cell7").classList[2];
  const bottomMiddle = document.querySelector(".cell8").classList[2];
  const bottomRight = document.querySelector(".cell9").classList[2];
  let overlay = document.querySelector(".overlay");

  if (
    // horizontal top row wins
    topLeft &&
    topLeft == topMiddle &&
    topLeft == topRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topLeft} is the winner!`;
  } else if (
    // horizontal middle row wins
    middleLeft &&
    middleLeft == middleMiddle &&
    middleLeft == middleRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${middleLeft} is the winner!`;
  } else if (
    // horizontal bottom row wins
    bottomLeft &&
    bottomLeft == bottomMiddle &&
    bottomLeft == bottomRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${bottomLeft} is the winner!`;
  } else if (
    // vertical left column wins
    topLeft &&
    topLeft == middleLeft &&
    topLeft == bottomLeft
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topLeft} is the winner!`;
  } else if (
    // vertical middle column wins
    topMiddle &&
    topMiddle == middleMiddle &&
    topMiddle == bottomMiddle
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topMiddle} is the winner!`;
  } else if (
    // vertical right column wins
    topRight &&
    topRight == middleRight &&
    topRight == bottomRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topRight} is the winner!`;
  } else if (
    // diagonal topleft to bottomright wins
    topLeft &&
    topLeft == middleMiddle &&
    topLeft == bottomRight
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topLeft} is the winner!`;
  } else if (
    // diagonal topright to bottomleft wins
    topRight &&
    topRight == middleMiddle &&
    topRight == bottomLeft
  ) {
    overlay.style.display = "flex";
    statusDiv.innerHTML = `${topRight} is the winner!`;
  }
};
const clickEvent = (e) => {
  if (xTurn) {
    e.target.innerHTML = "X";
    e.target.classList.add("x");
    xTurn = false;
    statusDiv.innerHTML = "It's O's turn.";
    checkWinner();
  } else {
    e.target.innerHTML = "O";
    e.target.classList.add("o");
    xTurn = true;
    statusDiv.innerHTML = "It's X's turn.";
    checkWinner();
  }
};

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", clickEvent);
}

// ============================================ Guide =======================

// // game constants
// const xSymbol = "×";
// const oSymbol = "○";

// // game variables
// let gameIsLive = true;
// let xIsNext = true;

// // functions
// const letterToSymbol = (letter) => (letter === "x" ? xSymbol : oSymbol);

// const handleWin = (letter) => {
//   // change the gameIsLive status to false and add the winning message to the statusDiv
// };

// const checkGameStatus = () => {
//   // grab the cells second class from the cellDivs array and assign them to the variables (topLeft,topMiddle,topRight, middleLeft, middleMiddle,...)

//   // check winner
//   if (topLeft && topLeft === topMiddle && topLeft === topRight) {
//   }
// };

// // event Handlers
// const handleReset = () => {};

// const handleCellClick = (e) => {
//   const classList = e.target.classList;

//   // check if the game is still live and the targeted div has no 'X' or 'O' class

//   // check whose turn it is and then check the game status
// };

// // event listeners
// resetDiv.addEventListener("click", handleReset);

// for (const cellDiv of cellDivs) {
//   cellDiv.addEventListener("click", handleCellClick);
// }
