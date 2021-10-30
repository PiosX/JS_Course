const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const square = document.querySelector(".square");

const hello = () => {
	console.log("cześć");
};

const redColor = () => {
	square.style.backgroundColor = "red";
};

const blueColor = () => {
	square.style.backgroundColor = "blue";
};

const pToggle = () => {
	p1.classList.toggle("show");
	p2.classList.toggle("show");

	// if (p1.classList.contains("show")) {
	// 	p1.classList.remove("show");
	// 	p2.classList.add("show");
	// } else {
	// 	p2.classList.remove("show");
	// 	p1.classList.add("show");
	// }
};

btn1.addEventListener("dblclick", hello);
square.addEventListener("mouseenter", redColor);
square.addEventListener("mouseleave", blueColor);
btn2.addEventListener("click", pToggle);
