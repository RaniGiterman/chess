/* Events fired on the drag target */
let parent;
let child;

document.addEventListener("dragstart", function (event) {
    parent = event.target.parentElement;
    child = event.target;
});

document.addEventListener("drag", function (event) {
    // console.log(event);
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "1";
});

/* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function (event) {
    if (event.target.className.includes("square")) {
        event.target.style.border = "3px dotted red";
    } else if (event.target.className.includes("piece")) {
        setTimeout(() => {
            event.target.parentNode.style.border = "3px dotted red";
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
        let img = document.createElement("img");
        img.src = event.dataTransfer.getData("text/plain");
        img.classList.add("piece");

        // remove all last children
        if (event.target.lastChild != null)
            event.target.removeChild(event.target.lastChild);

        // add new child
        event.target.appendChild(img);

        // remove from original square
        parent.removeChild(child);
    } else if (event.target.className.includes("piece")) {
        event.target.parentNode.style.border = "";
        let img = document.createElement("img");
        img.src = event.dataTransfer.getData("text/plain");
        img.classList.add("piece");

        let parentX = event.target.parentNode;

        // remove all last children
        event.target.parentNode.removeChild(event.target);

        // add new child
        parentX.appendChild(img);

        // remove from original square
        parent.removeChild(child);
    }
});