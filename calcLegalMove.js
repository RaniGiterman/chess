let isBlack = false;

function calcLegalMove(element) {
    let yIndex = Array.from(element.parentNode.children).indexOf(element);
    let xIndex = Array.from(element.parentNode.parentNode.children).indexOf(element.parentNode);

    // console.log(xIndex, yIndex);

    if (element.firstChild.src.includes("black")) {
        isBlack = true;
    } else {
        isBlack = false;
    }

    // black go +1, white go -1
    if (element.firstChild.src.includes("pawn"))
        calcPawn(xIndex, yIndex);
    else if (element.firstChild.src.includes("queen"))
        calcQueen(xIndex, yIndex);
    else if (element.firstChild.src.includes("rook"))
        calcRook(xIndex, yIndex);
    else if (element.firstChild.src.includes("bishop"))
        calcBishop(xIndex, yIndex);
    else if (element.firstChild.src.includes("knight"))
        calcKnight(xIndex, yIndex);
    else if (element.firstChild.src.includes("king"))
        calcKing(xIndex, yIndex);
}

function calcPawn(x, y) {
    // calc forward
    for (let i = 1; i <= 2; i++) {
        if (i == 2 && y != 1 && y != 6)
            break;

        let square;
        if (isBlack)
            square = board.children[x].children[y + i];
        else
            square = board.children[x].children[y - i];

        if (square.firstChild) {
            // if the square is occupied, we done. pawn can't eat forward
            break;
        }

        // legal move!!
        square.style.boxShadow = "red 0px 0px 10px inset";
    }

    // calc takes 
    let squareLeft;
    let squareRight;
    if (isBlack) {
        try {
            squareLeft = board.children[x - 1].children[y + 1];
            squareRight = board.children[x + 1].children[y + 1];
        } catch (error) {

        }
    }
    else {
        try {
            squareLeft = board.children[x - 1].children[y - 1];
            squareRight = board.children[x + 1].children[y - 1];
        } catch (error) {

        }
    }

    if (squareLeft && squareLeft.firstChild) {
        let enter = false;
        if (squareLeft.firstChild.src.includes("black") && isBlack)
            enter = true;

        if (squareLeft.firstChild.src.includes("white") && !isBlack)
            enter = true;

        // legal move!!
        if (!enter)
            squareLeft.style.boxShadow = "red 0px 0px 10px inset";
    }

    if (squareRight && squareRight.firstChild) {
        let enter = false;
        if (squareRight.firstChild.src.includes("black") && isBlack)
            enter = true;

        if (squareRight.firstChild.src.includes("white") && !isBlack)
            enter = true;

        // legal move!!
        if (!enter)
            squareRight.style.boxShadow = "red 0px 0px 10px inset";
    }

}

function calcQueen(x, y) {
    calcBishop(x, y);
    calcRook(x, y);
}

function calcRook(x, y) {
    console.log(x, y);
    // calc slide right
    for (let i = 1; i < 8; i++) {
        if (x + i > 7)
            break;

        let square = board.children[x + i].children[y];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";

    }

    // calc slide left
    for (let i = 1; i < 8; i++) {
        if (x - i < 0)
            break;

        let square = board.children[x - i].children[y];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";

    }

    // calc slide top
    for (let i = 1; i < 8; i++) {
        if (y - i < 0)
            break;

        console.log(y - i);
        let square = board.children[x].children[y - i];
        console.log(square);
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";

    }

    // calc slide bottom
    for (let i = 1; i < 8; i++) {
        if (y + i > 7)
            break;

        let square = board.children[x].children[y + i];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";

    }
}
function calcBishop(x, y) {
    // calc left diagonal top
    for (let i = 1; i < 8; i++) {
        if (x - i < 0 || y - i < 0)
            break;

        let square = board.children[x - i].children[y - i];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";
    }


    // calc right diagonal top
    for (let i = 1; i < 8; i++) {
        if (x + i > 7 || y - i < 0)
            break;

        let square = board.children[x + i].children[y - i];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";
    }

    // calc left diagonal bottom
    for (let i = 1; i < 8; i++) {
        if (x + i > 7 || y + i > 7)
            break;

        let square = board.children[x + i].children[y + i];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";
    }

    // calc right diagonal bottom
    for (let i = 1; i < 8; i++) {
        if (x - i < 0 || y + i > 7)
            break;

        let square = board.children[x - i].children[y + i];
        if (square.firstChild) {
            if (square.firstChild.src.includes("black") && isBlack)
                break;

            if (square.firstChild.src.includes("white") && !isBlack)
                break;


            square.style.boxShadow = "red 0px 0px 10px inset";
            break;
        }

        square.style.boxShadow = "red 0px 0px 10px inset";
    }

}

function calcKnight(x, y) {
    if (y + 2 <= 7) {
        let squareLeft;
        let squareRight;
        try {
            squareLeft = board.children[x - 1].children[y + 2];
            squareRight = board.children[x + 1].children[y + 2];
        } catch (error) {

        }

        let emptyLeft = true;
        let emptyRight = true;

        if (squareLeft && squareLeft.firstChild) {
            emptyLeft = false;
            if ((squareLeft.firstChild.src.includes("black") && !isBlack)) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareLeft.firstChild.src.includes("white") && isBlack) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
        }

        if (squareRight && squareRight.firstChild) {
            emptyRight = false;
            if ((squareRight.firstChild.src.includes("black") && !isBlack)) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareRight.firstChild.src.includes("white") && isBlack) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
        }


        if (squareLeft && emptyLeft)
            squareLeft.style.boxShadow = "red 0px 0px 10px inset";

        if (squareRight && emptyRight)
            squareRight.style.boxShadow = "red 0px 0px 10px inset";
    }

    if (y - 2 >= 0) {
        let squareLeft;
        let squareRight;
        try {
            squareLeft = board.children[x - 1].children[y - 2];
            squareRight = board.children[x + 1].children[y - 2];
        } catch (error) {

        }

        let emptyLeft = true;
        let emptyRight = true;

        if (squareLeft && squareLeft.firstChild) {
            emptyLeft = false;
            if ((squareLeft.firstChild.src.includes("black") && !isBlack)) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareLeft.firstChild.src.includes("white") && isBlack) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
        }

        if (squareRight && squareRight.firstChild) {
            emptyRight = false;
            if ((squareRight.firstChild.src.includes("black") && !isBlack)) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareRight.firstChild.src.includes("white") && isBlack) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
        }


        if (squareLeft && emptyLeft)
            squareLeft.style.boxShadow = "red 0px 0px 10px inset";

        if (squareRight && emptyRight)
            squareRight.style.boxShadow = "red 0px 0px 10px inset";
    }

    if (x + 2 <= 7) {
        let squareLeft;
        let squareRight;
        try {
            squareLeft = board.children[x + 2].children[y - 1];
            squareRight = board.children[x + 2].children[y + 1];
        } catch (error) {

        }

        let emptyLeft = true;
        let emptyRight = true;

        if (squareLeft && squareLeft.firstChild) {
            emptyLeft = false;
            if ((squareLeft.firstChild.src.includes("black") && !isBlack)) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareLeft.firstChild.src.includes("white") && isBlack) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
        }

        console.log(squareRight);
        if (squareRight && squareRight.firstChild) {
            emptyRight = false;
            if ((squareRight.firstChild.src.includes("black") && !isBlack)) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareRight.firstChild.src.includes("white") && isBlack) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
        }


        if (squareLeft && emptyLeft)
            squareLeft.style.boxShadow = "red 0px 0px 10px inset";

        if (squareRight && emptyRight)
            squareRight.style.boxShadow = "red 0px 0px 10px inset";
    }


    if (x - 2 >= 0) {
        let squareLeft;
        let squareRight;
        try {
            squareLeft = board.children[x - 2].children[y - 1];
            squareRight = board.children[x - 2].children[y + 1];
        } catch (error) {

        }

        let emptyLeft = true;
        let emptyRight = true;

        if (squareLeft && squareLeft.firstChild) {
            emptyLeft = false;
            if ((squareLeft.firstChild.src.includes("black") && !isBlack)) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareLeft.firstChild.src.includes("white") && isBlack) {
                squareLeft.style.boxShadow = "red 0px 0px 10px inset";
            }
        }

        console.log(squareRight);
        if (squareRight && squareRight.firstChild) {
            emptyRight = false;
            if ((squareRight.firstChild.src.includes("black") && !isBlack)) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
            if (squareRight.firstChild.src.includes("white") && isBlack) {
                squareRight.style.boxShadow = "red 0px 0px 10px inset";
            }
        }


        if (squareLeft && emptyLeft)
            squareLeft.style.boxShadow = "red 0px 0px 10px inset";

        if (squareRight && emptyRight)
            squareRight.style.boxShadow = "red 0px 0px 10px inset";
    }

}

function calcKing(x, y) {
    if (y + 1 <= 7)
        handle1SquareMove(x, y + 1);

    if (y - 1 >= 0)
        handle1SquareMove(x, y - 1);

    if (x - 1 >= 0)
        handle1SquareMove(x - 1, y);

    if (x + 1 <= 7)
        handle1SquareMove(x + 1, y);

    if (x + 1 <= 7 && y + 1 <= 7)
        handle1SquareMove(x + 1, y + 1);

    if (x + 1 <= 7 && y - 1 >= 0)
        handle1SquareMove(x + 1, y - 1);

    if (x - 1 >= 0 && y - 1 >= 0)
        handle1SquareMove(x - 1, y - 1);

    if (x - 1 >= 0 && y + 1 <= 7)
        handle1SquareMove(x - 1, y + 1);
}

function handle1SquareMove(x, y) {
    let square = board.children[x].children[y];
    let color = true;
    if (square.firstChild) {
        if (square.firstChild.src.includes("black") && !isBlack)
            square.style.boxShadow = "red 0px 0px 10px inset";
        else
            color = false;


        if (square.firstChild.src.includes("white") && isBlack)
            square.style.boxShadow = "red 0px 0px 10px inset";
        else
            color = false;
    }

    if (color)
        square.style.boxShadow = "red 0px 0px 10px inset";
}