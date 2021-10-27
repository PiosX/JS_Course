console.log(`------`);
const numbers = [5, 8, 10, 23, 48, 60];

for (number of numbers) {
	console.log(number / 5);
}

console.log(`------`);

for (number of numbers) {
	if (number % 2 == 0) {
		console.log(
			`%cLiczba ${number} jest parzysta.`,
			"background-color: yellow; color: black;"
		);
	} else {
		console.log(
			`%cLiczba ${number} jest nieparzysta.`,
			"background-color: red; color: black;"
		);
	}
}
