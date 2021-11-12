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
		sound() {
			console.log("brum brum");
		},
	},
};

newUser.car.sound();
