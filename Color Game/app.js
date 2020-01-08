const color = document.querySelector(".color");
const reset = document.querySelector(".reset");
const mode = document.querySelectorAll(".mode");
const squares = document.querySelectorAll(".square");
let colors = generateColor(6);
const newContent = document.querySelector(".new-content");
const header = document.querySelector(".header");
let pickedColor = pickColor();
let numSquares = 6;

color.textContent = pickColor();


for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            changeColor(clickedColor);
            newContent.textContent = "YOU WIN";
            header.style.backgroundColor = clickedColor;
            reset.textContent = "PLAY AGAIN?"
        } else {
            this.style.backgroundColor = "#000000";
            newContent.textContent = "Try Again";
        }
    })
}

for (i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.toggle("selected");
        if (this === mode[0]) {
            numSquares = 3;
            colors = generateColor(numSquares);
            for (let i = 0; i < squares.length; i++) {
                if (colors[i]) {
                    squares[i].style.backgroundColor = colors[i];
                } else {
                    squares[i].style.display = "none";
                }
            }
        } else if (this === mode[1]) {
            numSquares = 6;
            colors = generateColor(numSquares);
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
            }
        }
        pickedColor = pickColor();
        color.textContent = pickColor();

    })
}

reset.addEventListener("click", function () {
    colors = generateColor(numSquares);
    pickedColor = pickColor();
    color.textContent = pickColor();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        ;
    }
    reset.textContent = "NEW COLORS";
    header.style.backgroundColor = "#567ef7";
    newContent.textContent = " ";
})


// easy.addEventListener("click", function () {
//     easy.classList.toggle("selected");
//     hard.classList.remove("selected");
//     numSquares = 3;
//     colors = generateColor(numSquares);
//     pickedColor = pickColor();
//     color.textContent = pickColor();
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hard.addEventListener("click", function () {
//     hard.classList.toggle("selected");
//     easy.classList.remove("selected");
//     numSquares = 6;
//     colors = generateColor(numSquares);
//     pickedColor = pickColor();
//     color.textContent = pickColor();
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num) { // num --> amount of colors/items in the array
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(randomColor())
    }
    return newArray;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`

}

// newcolor.addEventListener("click", function () {
//     color.textContent = `${generateColor()}, ${generateColor()}, ${generateColor()}`;
// })



