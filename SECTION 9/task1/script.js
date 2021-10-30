// const ul = document.createElement("ul");
// document.body.append(ul);
// const number = 10;

// for (let i = 1; i <= number; i++) {
// 	const liItem = document.createElement("li");
// 	liItem.textContent = i;
// 	ul.append(liItem);
// }

// const lastLi = ul.querySelector("li:last-child");
// lastLi.textContent = "Jestem ostatnim elementem.";
// lastLi.style.backgroundColor = "blue";
// lastLi.style.padding = "20px  40px";
// lastLi.style.fontSize = "48px";

const ul = document.createElement("ul");
document.body.append(ul);
const number = 10;

for (let i = 0; i <= number; i++) {
	const liItem = document.createElement("li");
	liItem.textContent = i;
	ul.append(liItem);
}

const lastIt = ul.querySelector("li:last-child");

lastIt.textContent = "Jestem ostatnim elementem!";
lastIt.style.backgroundColor = "royalblue";
