

//funcion para identificar cuando los dos gifs se toquen --stackOverflow--
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const cat = document.querySelector("#cat");
const food = document.querySelector("food");


window.addEventListener("keyup", function (e) { //el evento se añade a window ya que se presionara en "cualquier" lugar del screen
	if (e.key === "ArrowDown") {
		movHorizontal(50);
	}
	else if (e.key === "ArrowUp") {
		movHorizontal(-50);
	}
	else if (e.key === "ArrowRight") {
		movVertical(50);
	}
	else if (e.key === "ArrowLeft") {
		movVertical(-50);
	}
})

const movHorizontal = (amount) => {
	const currTop = position(cat.style.top);
	cat.style.top = `${currTop + amount}px`;
}

const movVertical = (amount) => {
	const currLeft = position(cat.style.left);
	cat.style.left = `${currLeft + amount}px`;
}

const position = (pos) => {
	if (!pos) return 10;
	return parseInt(pos.slice(0, -2));
}
