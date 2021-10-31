const upBtn = document.querySelector(".sizeUp");
const downBtn = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 36;
const colors = ["red", "blue", "yellow", "green", "orange", "purple"];

const sizeUp = () => {
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
};

const sizeDown = () => {
	if (fontSize >= 16) {
		fontSize -= 2;
		p.style.fontSize = fontSize + "px";
	}
};

// const changeColor = () => {
// 	p.style.color = colors[Math.floor(Math.random() * 6)];
// };

const changeColor = () => {
	const r = Math.floor(Math.random() * 255);
	const r1 = Math.floor(Math.random() * 255);
	const r2 = Math.floor(Math.random() * 255);
	p.style.color = `rgb(${r},${r1},${r2})`;
};

upBtn.addEventListener("click", sizeUp);
downBtn.addEventListener("click", sizeDown);
colorBtn.addEventListener("click", changeColor);
