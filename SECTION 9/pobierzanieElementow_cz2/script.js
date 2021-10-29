// getElementById
// const test = document.getElementById("item");

// getElementByTagName
// const test2 = document.getElementsByTagName("li");

// getElementByClassName
// const test3 = document.getElementsByClassName("test");

//querySelector (ES6)
// const test = document.querySelector("ul li");
const ulList = document.querySelector("ul");
console.log(ulList);

const liItem = ulList.querySelector("li");
console.log(liItem);

//querySelectorALL (ES6)
const liItems = document.querySelectorAll("li");
console.log(liItems);

// żywe kolekcje, czyli qSA vs getElementByTag / ClassName

const newLi = document.createElement("li");
ulList.appendChild(newLi).textContent = "o_o";
