// const myObject = {
// 	key: value,
// 	key: value,
// 	key: value,
// };

const newUser = {
	name: "Lisa",
	age: 23,
	car: {
		brand: "Audi",
		model: "A3",
		color: "black",
	},
};

// console.log(newUser.car.brand);

console.log(
	`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, koloru ${newUser.car.color}.`
);
