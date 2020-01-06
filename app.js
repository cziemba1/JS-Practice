const btn = document.querySelector("button");
let isPink = true;
let change = true;

/*v1
btn.addEventListener("click", function () {
    if (isPink) {
        document.body.style.backgroundColor = "white";
        isPink = false;
    } else {
        document.body.style.backgroundColor = "pink";
        isPink = true;
    }
}) */

/*v2
btn.addEventListener("click", function () {
    if (isPink) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "pink";
    }
    isPink = !isPink;
}) */

/*v3 ----> Creando una clase nueva*/

function changeText(text) {
    btn.textContent = text;
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("isPink");
    if (change) {
        changeText("I´ve changed!");
    } else {
        changeText("Back to normal");
    }
    change = !change;
}) 