const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const conv = document.querySelector("#converter");
const result = document.querySelector(".result");
let sum;

const convertCtoF = () => {
	if (one.textContent === "°C" && two.textContent === "°F") {
		sum = conv.value * 1.8 + 32;
	} else {
		sum = (conv.value - 32) / 1.8;
	}
	if (conv.value !== "") {
		result.textContent = `${conv.value}${one.textContent} to ${sum}${two.textContent}`;
	}
};

const reset = () => {
	conv.value = "";
	result.textContent = ``;
};

const change = () => {
	if (one.textContent === "°C" && two.textContent === "°F") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
		conv.value = "";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = "";
		conv.value = "";
	}
};

convBtn.addEventListener("click", convertCtoF);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", change);
