const numbers = [0, 23, 48, 175, 2, 34, 11];

// function number(x) {
// 	return x % 2 == 0;
// }
// // callback - funkcja, którą przekazujemy do innej funkcji
// console.log(numbers.filter(number));

numbers.forEach((number) => console.log(number * 5));

console.log(numbers.includes(11));
console.log(numbers.indexOf(34));

// includeOf - jezeli tablica nie ma takiego elementu zwraca -1
