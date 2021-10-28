const numbers = [1, 2, 3, 4, 5];

// function multiply(x) {
// 	return x * 2;
// }

// const newNumbers = numbers.map(multiply);
// console.log(numbers);
// console.log(newNumbers);

// map - podobna do pętli, wykonuje kod na każdym elemencie tablicy
// map - zwraca nową tablicę; w nawiasach map trzeba dac nazwe jakiejs funkcji

// push - metoda destrukcyjna

// console.log(numbers);
// numbers.push(6, 7, 8);

// concat - metoda niedestrukcyjna, łączy tablice, nie zmienia pierwotnej tablicy
const abc = ["a", "b", "c"];
const newAbc = numbers.concat(6, 7, 8, abc);

//console.log(newAbc);

// ... - spread operator, zamienia tablice na stringi

console.log(abc);
console.log(...abc);

const drinks = ["pepsi", "kawa", "sok"];
const meals = ["schabowy", "spaghetti", "zupa"];

// rest(czy tam spread) operator - to samo co concat, łączy dwie tablice w jedną
const menu = [...drinks, ...meals];

console.log(menu);
