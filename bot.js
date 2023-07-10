let bitMap = [];
let legalMoves = [];

const site = window.location;
for (let i = 0; i < 8; i++) {
    bitMap.push(Array.from(new Int8Array(8)));
}

// modifies legalMoves array to contain all legal moves for black in the position
function getAllMoves() {
    legalMoves = [];
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            // make sure the piece is black
            if (bitMap[y][x] < 0) {
                // calc legal moves for the piece
                calcLegalMove(board.children[x].children[y]);
                // update from attribute to needed target squares
                for (let i = 0; i < legalMoves.length; i++) {
                    if (legalMoves[i].from === undefined)
                        legalMoves[i].from = board.children[x].children[y];
                }
            }
        }
    }
    cleanLegalMoves();
}

function botMove() {
    getAllMoves();

    let randomNumber = Math.floor(Math.random() * (legalMoves.length - 1));
    let chosenSquare = legalMoves[randomNumber].square;
    let fromSquare = legalMoves[randomNumber].from;

    let img = document.createElement("img");
    img.src = fromSquare.children[0].src;
    img.classList.add("piece");

    calcAnnotation(Array.from(chosenSquare.parentNode.children).indexOf(chosenSquare),
        Array.from(chosenSquare.parentNode.parentNode.children).indexOf(chosenSquare.parentNode), chosenSquare.parentNode.firstChild, img.src);

    // remove all last children
    if (chosenSquare.lastChild != null) {
        if (chosenSquare.lastChild.src.includes("king")) {
            if (isWhiteTurn) {
                document.getElementById("gameWon").innerHTML = "White won!";
            }
            else {
                document.getElementById("gameWon").innerHTML = "Black won!";
            }

            document.getElementsByClassName("playAgain")[0].style.display = "inline";
            disablePiece = true;
        }

        chosenSquare.removeChild(chosenSquare.lastChild);
    }


    // add new child
    if (img.src.includes("pawn")) {
        if (img.src.includes("black")) {
            // if black pawn reached it's last rank
            if (Array.from(chosenSquare.parentNode.children).indexOf(chosenSquare) == 7) {
                img.src = "./img/piece/queen_black.jpg";
            }
        } else {
            // if white pawn reached it's last rank
            if (Array.from(chosenSquare.parentNode.children).indexOf(chosenSquare) == 0) {
                img.src = "./img/piece/queen_white.jpg";
            }
        }
    }

    // insert to bitmap
    let x = Array.from(chosenSquare.parentNode.children).indexOf(chosenSquare);
    let y = Array.from(chosenSquare.parentNode.parentNode.children).indexOf(chosenSquare.parentNode);
    insertBitMapIMG(x, y, img.src);

    // remove from original bitmap square
    x = Array.from(fromSquare.parentNode.children).indexOf(fromSquare);
    y = Array.from(fromSquare.parentNode.parentNode.children).indexOf(fromSquare.parentNode);
    removeBitMap(x, y);


    chosenSquare.appendChild(img);
    isWhiteTurn = !isWhiteTurn;


    // remove from original square
    try {
        // from.removeChild(child)
        fromSquare.replaceChildren();
    } catch (error) {

    }
}

function removeBitMap(x, y) {
    bitMap[x][y] = 0;
}

function insertBitMapIMG(x, y, img) {
    let val = 0;
    switch (img) {
        case site.protocol + "//" + site.host + '/img/piece/pawn_black.jpg':
            val = -1;
            break;
        case site.protocol + "//" + site.host + '/img/piece/pawn_white.jpg':
            val = 1;
            break;
        case site.protocol + "//" + site.host + '/img/piece/bishop_black.jpg':
            val = -3;
            break;
        case site.protocol + "//" + site.host + '/img/piece/bishop_white.jpg':
            val = 3;
            break;
        case site.protocol + "//" + site.host + '/img/piece/knight_black.jpg':
            val = -3;
            break;
        case site.protocol + "//" + site.host + '/img/piece/knight_white.jpg':
            val = 3;
            break;
        case site.protocol + "//" + site.host + '/img/piece/rook_black.jpg':
            val = -5;
            break;
        case site.protocol + "//" + site.host + '/img/piece/rook_white.jpg':
            val = 5;
            break;
        case site.protocol + "//" + site.host + '/img/piece/queen_black.jpg':
            val = -9;
            break;
        case site.protocol + "//" + site.host + '/img/piece/queen_white.jpg':
            val = 9;
            break;
        case site.protocol + "//" + site.host + '/img/piece/king_black.jpg':
            val = -99;
            break;
        case site.protocol + "//" + site.host + '/img/piece/king_white.jpg':
            val = 99;
            break;

        default:
            break;
    }

    bitMap[x][y] = val;
}

function insertBitMap(x, y, letter) {
    let val = 0;
    switch (letter) {
        case 'p':
            val = -1;
            break;
        case 'P':
            val = 1;
            break;
        case 'b':
            val = -3;
            break;
        case 'B':
            val = 3;
            break;
        case 'n':
            val = -3;
            break;
        case 'N':
            val = 3;
            break;
        case 'r':
            val = -5;
            break;
        case 'R':
            val = 5;
            break;
        case 'q':
            val = -9;
            break;
        case 'Q':
            val = 9;
            break;
        case 'k':
            val = -99;
            break;
        case 'K':
            val = 99;
            break;

        default:
            break;
    }
    bitMap[y][x] = val;
}

function cleanBitMap() {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            bitMap[y][x] = 0;
        }
    }
}