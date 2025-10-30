// let player = "";
let currentTurn = document.getElementById("currentTurn");

let topLeftSq = document.getElementById("topLeftSq");
let topLeftInput = document.getElementById("topLeftInput");

let topCenterSq = document.getElementById("topCenterSq");
let topCenterInput = document.getElementById("topCenterInput");

let topRightSq = document.getElementById("topRightSq");
let topRightInput = document.getElementById("topRightInput");

let middleLeftSq = document.getElementById("middleLeftSq");
let middleLeftInput = document.getElementById("middleLeftInput");

let middleCenterSq = document.getElementById("middleCenterSq");
let middleCenterInput = document.getElementById("middleCenterInput");

let middleRightSq = document.getElementById("middleRightSq");
let middleRightInput = document.getElementById("middleRightInput");

let bottomLeftSq = document.getElementById("bottomLeftSq");
let bottomLeftInput = document.getElementById("bottomLeftInput");

let bottomCenterSq = document.getElementById("bottomCenterSq");
let bottomCenterInput = document.getElementById("bottomCenterInput");

let bottomRightSq = document.getElementById("bottomRightSq");
let bottomRightInput = document.getElementById("bottomRightInput");

let resetButton = document.getElementById("resetButton");

let xScore = 0;
let oScore = 0;


currentTurn.textContent = "X";

topLeftSq.onclick = function () {
    let player = currentTurn.textContent;
    if (player == "X") {
        if (topLeftInput.textContent == "") {

            topLeftInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (topLeftInput.textContent == "") {

            topLeftInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();
}
topCenterSq.onclick = function () {
    let player = currentTurn.textContent;
    if (player == "X") {
        if (topCenterInput.textContent == "") {

            topCenterInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (topCenterInput.textContent == "") {

            topCenterInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}
topRightSq.onclick = function () {
    let player = currentTurn.textContent;
    if (player == "X") {
        if (topRightInput.textContent == "") {

            topRightInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (topRightInput.textContent == "") {

            topRightInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}

middleLeftSq.onclick = function () {
    let player = currentTurn.textContent;
    block = middleLeftInput;
    if (player == "X") {
        if (middleLeftInput.textContent == "") {

            middleLeftInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (middleLeftInput.textContent == "") {

            middleLeftInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}
middleCenterSq.onclick = function () {
    let player = currentTurn.textContent;
    if (player == "X") {
        if (middleCenterInput.textContent == "") {

            middleCenterInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (middleCenterInput.textContent == "") {

            middleCenterInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}
middleRightSq.onclick = function () {
    let player = currentTurn.textContent;

    if (player == "X") {
        if (middleRightInput.textContent == "") {

            middleRightInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (middleRightInput.textContent == "") {

            middleRightInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}

bottomLeftSq.onclick = function () {
    let player = currentTurn.textContent;

    if (player == "X") {
        if (bottomLeftInput.textContent == "") {

            bottomLeftInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (bottomLeftInput.textContent == "") {

            bottomLeftInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}
bottomCenterSq.onclick = function () {
    let player = currentTurn.textContent;

    if (player == "X") {
        if (bottomCenterInput.textContent == "") {

            bottomCenterInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (bottomCenterInput.textContent == "") {

            bottomCenterInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}
bottomRightSq.onclick = function () {
    let player = currentTurn.textContent;
    if (player == "X") {
        if (bottomRightInput.textContent == "") {

            bottomRightInput.textContent = "X";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    else {
        if (bottomRightInput.textContent == "") {

            bottomRightInput.textContent = "O";
        }
        else {
            window.alert("Block aldready used!");
        }
    }
    if (player == "X") {
        currentTurn.textContent = "O";
    }
    else {
        currentTurn.textContent = "X";
    }
    checkWin();

}

resetButton.onclick = function () {
    topLeftInput.textContent = "";
    // topLeftSq.style.backgroundColor = "white";
    topCenterInput.textContent = "";
    // topCenterSq.style.backgroundColor = "white";
    topRightInput.textContent = "";
    // topRightSq.style.backgroundColor = "white";

    middleLeftInput.textContent = "";
    // middleLeftSq.style.backgroundColor = "white";
    middleCenterInput.textContent = "";
    // middleCenterSq.style.backgroundColor = "white";
    middleRightInput.textContent = "";
    // middleRightSq.style.backgroundColor = "white";

    bottomLeftInput.textContent = "";
    // bottomLeftSq.style.backgroundColor = "white"
    bottomCenterInput.textContent = "";
    // bottomCenterSq.style.backgroundColor = "white"
    bottomRightInput.textContent = "";
    // bottomRightSq.style.backgroundColor = "white"
    // bottomRightSq.style.transition = "background-color 0.25s";

    // currentTurn.textContent = "X"; //turning this on will change the game alternating between player starts


}


function checkWin() {

    //COLUMNS CHECK
    //column1
    if (((topLeftInput.textContent != "") && (topLeftInput.textContent == middleLeftInput.textContent) && (middleLeftInput.textContent == bottomLeftInput.textContent))) {
        window.alert(`Player ${topLeftInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // topLeftSq.style.backgroundColor = "lightyellow"
            // middleLeftSq.style.backgroundColor = "lightyellow"
            // bottomLeftSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // topLeftSq.style.backgroundColor = "lightyellow"
            // middleLeftSq.style.backgroundColor = "lightyellow"
            // bottomLeftSq.style.backgroundColor = "lightyellow"
        }
    }
    //column2
    else if ((topCenterInput.textContent != "") && (topCenterInput.textContent == middleCenterInput.textContent) && (middleCenterInput.textContent == bottomCenterInput.textContent)) {
        window.alert(`Player ${topCenterInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // topCenterSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // bottomCenterSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // topCenterSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // bottomCenterSq.style.backgroundColor = "lightyellow"
        }
    }
    //column3
    else if ((topRightInput.textContent != "") && (topRightInput.textContent == middleRightInput.textContent) && (middleRightInput.textContent == bottomRightInput.textContent)) {
        window.alert(`Player ${topRightInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // topRightSq.style.backgroundColor = "lightyellow"
            // middleRightSq.style.backgroundColor = "lightyellow"
            // bottomRightSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // topRightSq.style.backgroundColor = "lightyellow"
            // middleRightSq.style.backgroundColor = "lightyellow"
            // bottomRightSq.style.backgroundColor = "lightyellow"
        }
    }

    //ROWS CHECK
    //row1
    else if (((topLeftInput.textContent != "") && (topLeftInput.textContent == topCenterInput.textContent) && (topCenterInput.textContent == topRightInput.textContent))) {
        window.alert(`Player ${topLeftInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // topLeftSq.style.backgroundColor = "lightyellow"
            // topCenterSq.style.backgroundColor = "lightyellow"
            // topRightSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // topLeftSq.style.backgroundColor = "lightyellow"
            // topCenterSq.style.backgroundColor = "lightyellow"
            // topRightSq.style.backgroundColor = "lightyellow"
        }
    }
    //row2
    else if ((middleLeftInput.textContent != "") && (middleLeftInput.textContent == middleCenterInput.textContent) && (middleCenterInput.textContent == middleRightInput.textContent)) {
        window.alert(`Player ${middleLeftInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // middleLeftSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // middleRightSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // middleLeftSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // middleRightSq.style.backgroundColor = "lightyellow"
        }
    }
    // row3
    else if ((bottomLeftInput.textContent != "") && (bottomLeftInput.textContent == bottomCenterInput.textContent) && (bottomCenterInput.textContent == bottomRightInput.textContent)) {
        window.alert(`Player ${bottomLeftInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // bottomLeftSq.style.backgroundColor = "lightyellow"
            // bottomCenterSq.style.backgroundColor = "lightyellow"
            // bottomRightSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // bottomLeftSq.style.backgroundColor = "lightyellow"
            // bottomCenterSq.style.backgroundColor = "lightyellow"
            // bottomRightSq.style.backgroundColor = "lightyellow"
        }
    }

    //diagonal check
    //diagonal 1
    else if ((topLeftInput.textContent != "") && (topLeftInput.textContent == middleCenterInput.textContent) && (middleCenterInput.textContent == bottomRightInput.textContent)) {
        window.alert(`Player ${topLeftInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // topLeftSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // bottomRightSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // topLeftSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // bottomRightSq.style.backgroundColor = "lightyellow"
        }
    }
    //diagonal 2
    else if ((topRightInput.textContent !== "") && (topRightInput.textContent == middleCenterInput.textContent) && (middleCenterInput.textContent == bottomLeftInput.textContent)) {
        window.alert(`Player ${topRightInput.textContent} wins!`);
        if (topLeftInput.textContent == "X") {
            xScore++;
            document.getElementById("xScore").textContent = `Player X Score: ${xScore}`
            // topRightSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // bottomLeftSq.style.backgroundColor = "lightyellow"
        }
        else {
            oScore++;
            document.getElementById("oScore").textContent = `Player O Score: ${oScore}`
            // topRightSq.style.backgroundColor = "lightyellow"
            // middleCenterSq.style.backgroundColor = "lightyellow"
            // bottomLeftSq.style.backgroundColor = "lightyellow"
        }
    }

}
