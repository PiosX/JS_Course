const numbers = [1, 2, 3];
const foods = ["schabowy", "pizza", "chipsy"];

// const newTab = numbers.concat(foods);
// console.log(newTab);

const newTab = [...numbers, ...foods];
console.log(newTab);
