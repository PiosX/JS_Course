const colors = ["red", "green", "blue"];

const firstColor = colors[0];
const secondColor = colors[1];

const [first, second] = colors;

console.log(firstColor, secondColor);
console.log(first, second);

const [, , abcd] = colors;
console.log(abcd);
