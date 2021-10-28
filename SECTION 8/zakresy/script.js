const name = "Lisa";
let food;

const test = () => {
	const name = "Lily";
	console.log(`NAME w funkcji - ${name}`);

	food = "schabowy";
	console.log(food);

	const age = 23;
	console.log(age);

	const test2 = () => {
		console.log(`---`);

		food = 123;
		console.log(food);

		console.log(name);
		console.log(age);

		const color = "blue";
		console.log(color);

		console.log(`---`);
	};
	test2();

	// const test3 = () => {
	// 	console.log(color);
	// };
	// test3();
};
test();

// console.log(age);
console.log(`NAME poza funkcją - ${name}`);
