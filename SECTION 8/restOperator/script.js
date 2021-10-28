// SPREAD
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(...arr);

//REST

const numbers = (x, y, ...z) => {
	console.log(x, y, z);

	console.log(z.map((el) => el * 2));
};

numbers(123, 34, 24, 1234, 5);
