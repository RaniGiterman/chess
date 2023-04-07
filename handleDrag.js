/* Events fired on the drag target */

let parent;
let child;
let disablePiece = false;

document.addEventListener("dragstart", function (event) {
    if (disablePiece) {
        // game has ended.
        event.preventDefault();
        return;
    }

    if (isWhiteTurn) {
        if (!event.target.src.includes("white")) {
            // tried picking black when white turn
            event.preventDefault();
            return;
        }
    } else {
        if (event.target.src.includes("white")) {
            // tried picking white when black turn
            event.preventDefault();
            return;
        }
    }

    parent = event.target.parentElement;
    child = event.target;
    calcLegalMove(parent);
});

document.addEventListener("drag", function (event) {
    // console.log(event);
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function (event) {
    // event.target.style.opacity = "1";
});

/* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function (event) {

    if (event.target.className.includes("square")) {
        event.target.style.border = "3px solid white";
    } else if (event.target.className.includes("piece")) {
        setTimeout(() => {
            try {
                event.target.parentNode.style.border = "3px solid white";
            } catch (error) {

            }
        }, 10);
    }
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function (event) {
    event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function (event) {
    if (event.target.className.includes("square")) {
        event.target.style.border = "";
    } else if (event.target.className.includes("piece")) {
        setTimeout(() => {
            event.target.parentNode.style.border = "";
        }, 15);
    }
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
   Reset the color of the output text and DIV's border color
   Get the dragged data with the dataTransfer.getData() method
   The dragged data is the id of the dragged element ("drag1")
   Append the dragged element into the drop element
*/
document.addEventListener("drop", function (event) {
    if (event.target.className.includes("square")) {
        event.target.style.border = "";

        // check if legal move
        if (event.target.style.boxShadow != "red 0px 0px 10px inset") {
            cleanLegalMoves();
            return;
        }

        cleanLegalMoves();
        let img = document.createElement("img");
        img.src = event.dataTransfer.getData("text/plain");
        img.classList.add("piece");

        // remove all last children
        if (event.target.lastChild != null) {
            if (event.target.lastChild.src.includes("king")) {
                if (isWhiteTurn) {
                    document.getElementById("gameWon").innerHTML = "White won!";
                }
                else {
                    document.getElementById("gameWon").innerHTML = "Black won!";
                }

                document.getElementsByClassName("playAgain")[0].style.display = "inline";
                disablePiece = true;
            }

            event.target.removeChild(event.target.lastChild);
        }

        // add new child
        if (img.src.includes("pawn")) {
            if (img.src.includes("black")) {
                // if black pawn reached it's last rank
                if (Array.from(event.target.parentNode.children).indexOf(event.target) == 7) {
                    img.src = "./img/piece/queen_black.jpg";
                }
            } else {
                // if white pawn reached it's last rank
                if (Array.from(event.target.parentNode.children).indexOf(event.target) == 0) {
                    img.src = "./img/piece/queen_white.jpg";
                }
            }
        }

        event.target.appendChild(img);
        isWhiteTurn = !isWhiteTurn;


        // remove from original square
        try {
            parent.removeChild(child);
        } catch (error) {

        }
    } else if (event.target.className.includes("piece")) {
        event.target.parentNode.style.border = "";

        // check if legal move
        if (event.target.parentNode.style.boxShadow != "red 0px 0px 10px inset") {
            cleanLegalMoves();
            return;
        }

        cleanLegalMoves();
        let img = document.createElement("img");
        img.src = event.dataTransfer.getData("text/plain");
        img.classList.add("piece");

        let parentX = event.target.parentNode;


        if (event.target.src.includes("king")) {
            if (isWhiteTurn) {
                document.getElementById("gameWon").innerHTML = "White won!";
            }
            else {
                document.getElementById("gameWon").innerHTML = "Black won!";
            }

            document.getElementsByClassName("playAgain")[0].style.display = "inline";
            disablePiece = true;
        }

        // remove all last children
        event.target.parentNode.removeChild(event.target);

        // add new child
        if (img.src.includes("pawn")) {
            if (img.src.includes("black")) {
                // if black pawn reached it's last rank
                if (Array.from(parentX.parentNode.children).indexOf(parentX) == 7) {
                    img.src = "./img/piece/queen_black.jpg";
                }
            } else {
                // if white pawn reached it's last rank
                if (Array.from(parentX.parentNode.children).indexOf(parentX) == 0) {
                    img.src = "./img/piece/queen_white.jpg";
                }
            }
        }

        parentX.appendChild(img);
        isWhiteTurn = !isWhiteTurn;


        // remove from original square
        try {
            parent.removeChild(child);
        } catch (error) {

        }
    } else {
        cleanLegalMoves();
    }

});