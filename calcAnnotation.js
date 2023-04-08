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
        moveArr += moveCount + "." + move + " ";
    } else {
        moveArr += move + "</br>";
    }

    funcCall++;


    document.getElementById("move").innerHTML = moveArr;

    const configHeaders = {
        Accept: "application/json",
    };

    let data = {
        "movetext": moveArr.replaceAll("</br>", " ")
    };

    // openings ususally end around move 10, so I don't want to spam the fuck out of this poor api for no reason
    if (moveCount <= 10)
        axios({
            url: "https://pchess.net/api/opening",
            method: "POST",
            data: JSON.stringify(data),
            headers: configHeaders
        })
            .then(res => {
                console.log(res);
                if (res.data && res.data.length)
                    document.getElementById("opening").innerHTML = res.data[0].name;
            })
            .catch(error => {
                console.log(error);
            });
}