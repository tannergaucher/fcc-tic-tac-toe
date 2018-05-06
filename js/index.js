let board = document.getElementById("board");
let turn = 0;
let free = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let taken = [];
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

let delay;

function click() {
  board.addEventListener("click", function(e) {
    let clicked = e.target;
    if (clicked.innerHTML === "" && turn % 2 === 0) {
      clicked.innerHTML = "x";
      x.push(Number(clicked.className));
      taken.push(Number(clicked.className))
      checkWin(x);
      console.log("turn", turn);
      turn += 1;

    } else if (clicked.innerHTML === "") {
      clicked.innerHTML = "o";
      o.push(Number(clicked.className));
      taken.push(Number(clicked.className));
      checkWin(o);
      turn += 1;
    }
  });
}
click();

function move(player, square) {
  document.getElementById(square).innerHTML = player;
  console.log("turn", turn);
  turn++;
}

function checkWin(player) {
  wins.forEach(function(win) {
    if (player.includes(win[0]) && player.includes(win[1]) && player.includes(win[2])) {
      alert("win");
      clearBoard();
    }
  })
}

function getFree() {
  taken.forEach(function(number) {
    let index = free.indexOf(number);
    if (index > -1) {
      free.splice(index, 1);
    }
  })
}
board.addEventListener("click", getFree);

let easy = function() {
  var rand = free[Math.floor(Math.random() * free.length)];

  if (turn % 2 !== 0) {
    board.classList.add('no-click');
    let delay = setTimeout(function() {
      move("o", rand)
      board.classList.remove('no-click');
    }, 1200);
    taken.push(rand);
  }
}
easy();
board.addEventListener("click", easy);

function clearBoard() {
  window.clearInterval(delay);
  for (let i = 0; i < 10; i++) {
    if (board.children[i] !== undefined) {
      board.children[i].innerHTML = "";
    }
  }
}

function setOpponent() {
  let h = document.getElementById("human");
  let m = document.getElementById("machine");
  h.addEventListener("click", function() {
    opponent = "human";
    console.log(opponent)
  })
  m.addEventListener("click", function() {
    opponent = "machine";
    console.log(opponent)
  })
}
setOpponent();

function setMode() {
  let e = document.getElementById("easy");
  let m = document.getElementById("medium");
  let h = document.getElementById("hard");
  e.addEventListener("click", function() {
    mode = "easy";
    console.log(mode);
  })
  m.addEventListener("click", function() {
    mode = "medium";
    console.log(mode);
  })
  h.addEventListener("click", function() {
    mode = "hard";
    console.log(mode);
  })
}
setMode();