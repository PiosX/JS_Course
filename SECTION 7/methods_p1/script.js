const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

numbers.unshift(100, 200, "abc");
// console.log(numbers);

numbers.shift();
// console.log(numbers);

// unshift - dodaje elementy do tablicy na poczatku tablicy
// shift - usuwa element z indeksem 0

const colors = ["red", "green", "blue"];
console.log(colors);

colors.push("gold", 123);
console.log(colors);

colors.pop();
console.log(colors);

// push - dodaje elementy na koncu tablicy
// pop - usuwa ostatni element z tablicy

const tab = [];

tab.unshift("hi", 56, true);
tab.push("hello", 234);
console.log(tab);

tab.shift();
tab.pop();
console.log(tab);
