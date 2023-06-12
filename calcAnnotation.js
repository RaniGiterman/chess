let moveArr = "";
let moveCount = 0;
let funcCall = 0;
function calcAnnotation(x, y, hasChild, imgSrc) {
    let takes;

    if (hasChild) {
        takes = false;
    } else {
        takes = true;
    }

    let userX = 8 - x;
    let userY = letter[y];
    let startUserY = letter[startY];

    let pieceFirstLetter = "";

    if (imgSrc.includes("king"))
        pieceFirstLetter = "K";
    else if (imgSrc.includes("queen"))
        pieceFirstLetter = "Q";
    else if (imgSrc.includes("rook"))
        pieceFirstLetter = "R";
    else if (imgSrc.includes("knight"))
        pieceFirstLetter = "N";
    else if (imgSrc.includes("bishop"))
        pieceFirstLetter = "B";
    // pawn doesn't have annotation


    let move;

    if (takes) {
        if (imgSrc.includes("king"))
            move = pieceFirstLetter + "x" + userY + userX;
        else if (imgSrc.includes("pawn"))
            move = startUserY + "x" + userY + userX;
        else
            move = pieceFirstLetter + "x" + userY + userX;

    } else {
        if (imgSrc.includes("king") || imgSrc.includes("pawn"))
            move = pieceFirstLetter + userY + userX;
        else
            move = pieceFirstLetter + userY + userX;
    }


    if (funcCall % 2 == 0) {
        moveCount++;
        moveArr += moveCount + ". " + move + " ";
    } else {
        moveArr += move + "</br>";
    }

    funcCall++;


    document.getElementById("move").innerHTML = moveArr;

    const configHeaders = {
        Accept: "application/json",
    };

    let currentMoves = moveArr.replaceAll("</br>", " ");
    if (currentMoves[currentMoves.length - 1] == " ")
        currentMoves = currentMoves.substr(0, currentMoves.length - 1);


    // openings ususally end around move 20, and I don't want to spam the fuck out of this possible 20K loop
    // TODO: Should I optimize this?
    if (moveCount <= 20) {
        for (let i = 0; i < OPENING_API.length; i++) {
            // console.log(OPENING_API[i].moves, "|", currentMoves);
            if (OPENING_API[i].moves == currentMoves) {
                // console.log("FOUND!");
                document.getElementById("opening").innerHTML = OPENING_API[i].name;
                break;
            }
        }

    }
}
