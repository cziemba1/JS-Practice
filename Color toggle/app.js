const btn = document.querySelector("button");
let isPink = true;

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
btn.addEventListener("click", function () {
    document.body.classList.toggle("isPink");
}) 