let cells = document.querySelectorAll(".row > div");
let winningStatement = document.querySelector("h3");
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let whoseTurn = true;
let restart = ["", "", "", "", "", "", "", "", ""];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}
if (cells[1].textContent === "X") {
    console.log("it worked!");
}

function cellClicked() {
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
    for (j = 0; j < win.length; j++) {
        if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
            console.log("it worked!");
            cells.textContent = restart;
            break;
        } else if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
            console.log("it worked!");
            break;
        } else if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
            console.log("it worked!");
            break;
        }
        else if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
            console.log("it worked!");
            break;
        }
        else if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
            console.log("it worked!");
            break;
        }
        else if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
            console.log("it worked!");
            break;
        }
        else if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
            console.log("it worked!");
            break;
        }
        else if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
            console.log("it worked!");
            break;
        }
        else if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
            console.log("it worked!");
            break;
        } else if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
            console.log("it worked!");
            break;
        } else if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
            console.log("it worked!");
            break;
        }
        else if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
            console.log("it worked!");
            break;
        }
        else if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
            console.log("it worked!");
            break;
        }
        else if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
            console.log("it worked!");
            break;
        }
        else if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
            console.log("it worked!");
            break;
        }
        else if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
            console.log("it worked!");
            break;
        }
        else {
            console.log("nope.");
        }
    }

}


