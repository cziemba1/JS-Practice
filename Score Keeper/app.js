const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const reset = document.querySelector(".reset");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const input = document.querySelector("input");
const playingTo = document.querySelector(".playing-to");
let p1score = 0;
let p2score = 0;
let gameOver = false;
let winningScore = 0;


player1.addEventListener("click", function () {
    if (!gameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            gameOver = true;
            player1Score.classList.add("winner");
        }
        player1Score.textContent = p1score;
    }
});

player2.addEventListener("click", function () {
    if (!gameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            gameOver = true;
            player2Score.classList.add("winner");
        }
        player2Score.textContent = p2score;
    }
});

reset.addEventListener("click", function () {
    fReset();
});

input.addEventListener("change", function () {
    playingTo.textContent = this.value;
    winningScore = Number(this.value);
    fReset();
})

function fReset() {
    p1score = 0;
    p2score = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.classList.remove("winner");
    player2Score.classList.remove("winner");
    gameOver = false;
}