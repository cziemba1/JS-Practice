const color = document.querySelector(".color");
const newcolor = document.querySelector(".new-color");
const easy = document.querySelector(".easy");
const hard = document.querySelector(".hard");
let colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
]
const squares = document.querySelectorAll(".square");
let pickedColor = colors[4];
const newContent = document.querySelector(".new-content");
const header = document.querySelector(".header");

color.textContent = pickedColor;


for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = clickedColor;
            }
            newContent.textContent = "YOU WIN";
            header.style.backgroundColor = pickedColor;

        } else {
            this.style.backgroundColor = "#000000";
            newContent.textContent = "Try Again";
        }
    })
}



// function generateColor() {
//     return Math.floor(Math.random() * 256);
// }

// newcolor.addEventListener("click", function () {
//     color.textContent = `${generateColor()}, ${generateColor()}, ${generateColor()}`;
// })



