let cells = document.querySelectorAll(".row > div");

for(i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked(){
    //tells the content of the target, which is what we clicked on
    //console.log(event.target.textContent);
    event.target.textContent = "X";
}


// HINTS
//top left
//cells[0].textContent
//if else statements are your friend! remember && ||
// === is it the same? O vs X
//if else if