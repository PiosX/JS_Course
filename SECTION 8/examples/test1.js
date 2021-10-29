let score = 0;

const add = (num1, num2) => {
	score = num1 + num2;

	// if (score % 2 == 0) {
	// 	parzysta();
	// } else {
	// 	nieParzysta();
	// }

	score % 2 == 0 ? parzysta() : nieParzysta();

	return score;
};
const parzysta = () => {
	console.log(`Liczba ${score} jest parzysta.`);
};
const nieParzysta = () => {
	console.log(`Liczba ${score} jest nieparzysta.`);
};
