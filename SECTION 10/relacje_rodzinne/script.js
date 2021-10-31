const grandpa = document.querySelector(".grandparent");
// console.log(grandpa.querySelector(".parent"));
// console.log(grandpa.querySelectorAll(".child"));

const middleChild = document.querySelector(".middle-child");
console.log(middleChild);
const prevSibling = middleChild.previousElementSibling;
console.log(prevSibling);

const nextSibling = middleChild.nextElementSibling;
console.log(nextSibling);

const parentEl = middleChild.parentElement;
console.log(parentEl);

console.log(middleChild.closest(".grandparent"));
