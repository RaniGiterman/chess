// creating the board
const board = document.querySelector(".board");
const rowNums = document.querySelector(".rowNums");
for (let l = 0; l < 8; l++) {
  const rowNum = document.createElement("div");
  rowNum.style.marginTop = "3.5rem";
  rowNum.innerHTML = l + 1;
  rowNums.appendChild(rowNum);
}
for (let j = 0; j < 8; j++) {
  const column = document.createElement("div");
  column.innerHTML = j + 1;
  column.classList.add("column");

  for (let k = 0; k < 8; k++) {
    const square = document.createElement("div");
    square.classList.add("square");
    if ((j + k) % 2 === 0) {
      square.classList.add("black");
    } else {
      square.classList.add("white");
    }
    column.appendChild(square);
  }
  const rowNum = j + 1;
  board.appendChild(column);
}

// (pawn = "P", knight = "N", bishop = "B", rook = "R", queen = "Q" and king = "K").

let start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

let row = 0;
let column = 0;

for (let i = 0; i < start_fen.length; i++) {
  const letter = start_fen[i];
  if (letter === "r" || letter === "R") {
    insertIMG(
      letter === letter.toUpperCase()
        ? `<img class="piece" src="./img/piece/rook_white.jpg"></img>`
        : `<img class="piece" src="./img/piece/rook_black.jpg"></img>`,
      row,
      column
    );
  } else if (letter === "n" || letter === "N") {
    insertIMG(
      letter === letter.toUpperCase()
        ? `<img class="piece" src="./img/piece/knight_white.jpg"></img>`
        : `<img class="piece" src="./img/piece/knight_black.jpg"></img>`,
      row,
      column
    );
  } else if (letter === "b" || letter === "B") {
    insertIMG(
      letter === letter.toUpperCase()
        ? `<img class="piece" src="./img/piece/bishop_white.jpg"></img>`
        : `<img class="piece" src="./img/piece/bishop_black.jpg"></img>`,
      row,
      column
    );
  } else if (letter === "q" || letter === "Q") {
    insertIMG(
      letter === letter.toUpperCase()
        ? `<img class="piece" src="./img/piece/queen_white.jpg"></img>`
        : `<img class="piece" src="./img/piece/queen_black.jpg"></img>`,
      row,
      column
    );
  } else if (letter === "k" || letter === "K") {
    insertIMG(
      letter === letter.toUpperCase()
        ? `<img class="piece" src="./img/piece/king_white.jpg"></img>`
        : `<img class="piece" src="./img/piece/king_black.jpg"></img>`,
      row,
      column
    );
  } else if (letter === "/") {
    column++;
    start_fen = start_fen.slice(i + 1);
    i = -1;
    row = -1;
  } else if (letter === "p" || letter === "P") {
    insertIMG(
      letter === letter.toUpperCase()
        ? `<img class="piece" src="./img/piece/pawn_white.jpg"></img>`
        : `<img class="piece" src="./img/piece/pawn_black.jpg"></img>`,
      row,
      column
    );
  } else if (!isNaN(letter)) {
    row += parseInt(letter) - 1;
  }
  row++;
}

function insertIMG(img, row, column) {
  board.children[row].children[column].innerHTML += img;
}

function playMove() {
  const currentRow =
    document.querySelector(".currentRow").options[
      document.querySelector(".currentRow").selectedIndex
    ].value;

  const currentColumn =
    document.querySelector(".currentColumn").options[
      document.querySelector(".currentColumn").selectedIndex
    ].value;

  const moveToRow =
    document.querySelector(".moveToRow").options[
      document.querySelector(".moveToRow").selectedIndex
    ].value;

  const moveToColumn =
    document.querySelector(".moveToColumn").options[
      document.querySelector(".moveToColumn").selectedIndex
    ].value;

  //                                    x              y
  // grabbing whatever there is in (currentRow, currentColumn)

  let grabbedPiece =
    board.children[currentRow - 1].children[currentColumn - 1].innerHTML;

  if (grabbedPiece === "") {
    return alert(
      "Make sure you put the right row and column! (got an empty square)."
    );
  }

  board.children[currentRow - 1].children[currentColumn - 1].innerHTML = "";

  //                                                       x             y
  // putting the grabbed piece in it's moveTo location (moveToRow, moveToColumn)

  board.children[moveToRow - 1].children[moveToColumn - 1].innerHTML =
    grabbedPiece;
}
