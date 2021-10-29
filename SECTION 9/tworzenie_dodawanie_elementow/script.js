const ulList = document.createElement("ul");
const liItem = document.createElement("li");
liItem.textContent = "cześć";

document.body.appendChild(ulList);
ulList.appendChild(liItem);

const divItem = document.querySelector("div");
const pItem = document.createElement("p");

divItem.appendChild(pItem);
