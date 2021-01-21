let cells = document.querySelectorAll(".row > div");
let winningStatement = document.querySelector("h3");
let winningCom = [cells[0, 1, 2], cells[3, 4, 5], cells[6, 7, 8], cells[0, 3, 6], cells[1, 4, 7], cells[2, 5, 8], cells[0, 4, 8], cells[2, 4, 6]];
let whoseTurn = true;
let restart = ["", "", "", "", "", "", "", "", ""];
let win = false;

for (let i = 0; i < cells.length; i++) {
    if(win == false){
    cells[i].removeEventListener("click", newBoard);
    cells[i].addEventListener("click", cellClicked, { once: true });
    }
    else if (win == true) {
        cells[i].removeEventListener("click", cellClicked, { once: true });
        cells[i].addEventListener("click", newBoard);
    }
}

function newBoard() {

        if (win == true) {
            cells[0].textContent = " ";
            cells[1].textContent = " ";
            cells[2].textContent = " ";
            cells[3].textContent = " ";
            cells[4].textContent = " ";
            cells[5].textContent = " ";
            cells[6].textContent = " ";
            cells[7].textContent = " ";
            cells[8].textContent = " ";
            win = false; 
        }
}

function cellClicked() {
    if (win == true) {
        cells[0].textContent = " ";
        cells[1].textContent = " ";
        cells[2].textContent = " ";
        cells[3].textContent = " ";
        cells[4].textContent = " ";
        cells[5].textContent = " ";
        cells[6].textContent = " ";
        cells[7].textContent = " ";
        cells[8].textContent = " ";
        win = false; 
    }

    if (whoseTurn == true) {
        event.target.textContent = "X";
        winningStatement.textContent = "O's turn";
        whoseTurn = false;
    }
    else {
        event.target.textContent = "O";
        winningStatement.textContent = "X's turn";
        whoseTurn = true;
    }
    for (let j = 0; j < winningCom.length; j++) {
        if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        } else if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        } else if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        } else if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        } else if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        }
        else if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
            console.log("it worked!");
            win = true;
            break;
        }
        else {
            console.log("nope.");
        }

    }

}


