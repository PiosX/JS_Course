const numbers = [0.5, 4, "abc"];
const names = ["Lisa", "Lily", "Adam", "Przemek"];

numbers.forEach((num) => console.log(num * num));

const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames);

const showBigNames = (name) => {
	console.log(name.toUpperCase());
};

names.forEach(showBigNames);
console.log(`---`);

names.forEach((el) => console.log(el.toUpperCase()));
