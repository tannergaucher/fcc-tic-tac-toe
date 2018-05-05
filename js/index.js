let turn = 0;
let x = [];
let o = [];
let mode;
let wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

let xInput = document.getElementById("x-input");
let oInput = document.getElementById("o-input");
let board = document.getElementById("board");


function click(player, square) {
  board.addEventListener("click", function(e) {
    let clicked = e.target;

    xInput.classList.toggle("no-turn");
    oInput.classList.toggle("no-turn");

    if (clicked.innerHTML === "" && turn % 2 === 0) {
      clicked.innerHTML = "x";
      x.push(Number(clicked.className));
      checkWin(x);
      turn += 1;

    } else if (clicked.innerHTML === "") {
      clicked.innerHTML = "o";
      o.push(Number(clicked.className));
      checkWin(o);
      turn += 1;
    }
  });
}
click();

function move(player, square) {
  document.getElementById(square).innerHTML = player;
  if (player === "x") {
    x.push(square);
    checkWin(x);
    turn++
  } else if (player === "o") {
    o.push(square);
    checkWin(o);
    turn++
  }
}

function checkWin(player) {
  wins.forEach(function(win) {
    if (player.includes(win[0]) && player.includes(win[1]) && player.includes(win[2])) {
      alert("win");
    } else {
      console.log("still checking")
    }
  })
}

function setMode() {
  document.addEventListener("click", function(e) {
    if (e.target.id === "easy") {
      mode = "easy";
    } else if (e.target.id === "medium") {
      mode = "medium";
    } else if (e.target.id === "hard") {
      mode = "hard";
    }
  })
}
setMode();

function setOpponent() {

}
setOpponent();